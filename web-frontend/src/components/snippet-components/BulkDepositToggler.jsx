import React from 'react'
import { useEffect, useContext, useState} from 'react';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { BulkDepositorContractAddress, WheelFactoryContractAddress, WheelFactoryABI, WheelABI } from '../../ContractInfo/ContractInfo';
import { NftMoreInfoContext } from '../../App';



const BulkDepositToggler = (props) => {
    const {isWeb3Enabled, account} = useMoralis();
    const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
    const {BulkApprovalByContract, setBulkApprovalByContract} = useContext(NftMoreInfoContext);



    const [changingDepositSettings, setchangingDepositSettings] = useState(false);
    const [active, setActive] = useState();


    const approveAllForTheBulkDeposit = useWeb3Contract({ 
        abi: WheelABI,
        contractAddress: props.theAddress? props.theAddress: "0x0000000000000000000000000000000000000000" ,
        functionName: "setApprovalForAll",
        chain: 'rinkeby',
        params: {
            operator: BulkDepositorContractAddress,
            approved: true
        }
      });
    const revokeApprovalForTheBulkDeposit = useWeb3Contract({ 
        abi: WheelABI,
        contractAddress: props.theAddress? props.theAddress: "0x0000000000000000000000000000000000000000" ,
        functionName: "setApprovalForAll",
        chain: 'rinkeby',
        params: {
            operator: BulkDepositorContractAddress,
            approved: false
        }
      });
    
    const getApprovalToBulkDeposit = useWeb3Contract({ 
        abi: WheelABI,
        contractAddress: props.theAddress? props.theAddress: "0x0000000000000000000000000000000000000000" ,
        functionName: "isApprovedForAll",
        chain: 'rinkeby',
        params: {
            owner: account,
            operator: BulkDepositorContractAddress
        }
      });


      useEffect(()=>{
        if (isWeb3Enabled && account){
            getApprovalToBulkDeposit.runContractFunction({
              onError: (error) =>{
              console.log('register inventory ERROR: ',error,"_____"); 
              },
            }); 

        }
      },[isWeb3Enabled, account]);

      useEffect(()=>{
        // if (getApprovalToBulkDeposit.data){ 
            console.log('['+props.theAddress+'] getApprovalToBulkDeposit.data: ',getApprovalToBulkDeposit.data);

            setBulkApprovalByContract(prevStyle => ({
            ...prevStyle,
            [props.theAddress]: { ...prevStyle[ props.theAddress ], [props.theAddress]: getApprovalToBulkDeposit.data   }
            }))
        // }
      },[getApprovalToBulkDeposit.data]);


    function approveAllForBulkDeposit() {
        approveAllForTheBulkDeposit.runContractFunction({
            onError: (error) =>{
            console.log('approve bulk deposit ERROR: ',error,"_____"); 
            },
            onSuccess : async (tx)=>tx.wait().then(newTx => {
                setTimeout(()=> {
                    setchangingDepositSettings(false);
                    console.log('[ '+props.theAddress+' ] fetching bulk approval status...')
                    getApprovalToBulkDeposit.runContractFunction({
                        onError: (error) =>{
                        console.log('register inventory ERROR: ',error,"_____"); 
                        },
                      }); 
                },2000);
            }),
            onComplete: (error) =>{
                setchangingDepositSettings(true);
            }
        }); 
    }
    function revokeApprovalForBulkDeposit() {
        console.log('revoking bulk deposit privileges..');

        revokeApprovalForTheBulkDeposit.runContractFunction({
            onError: (error) =>{
            console.log('approve bulk deposit ERROR: ',error,"_____"); 
            },
            onSuccess : async (tx)=>tx.wait().then(newTx => {
                console.log('[ '+props.theAddress+' ] bulk deposit privileges REVOKED')
                setTimeout(()=> {
                    setchangingDepositSettings(false);
                    console.log('[ '+props.theAddress+' ] fetching bulk approval status...')
                    getApprovalToBulkDeposit.runContractFunction({
                        onError: (error) =>{
                        console.log('register inventory ERROR: ',error,"_____"); 
                        },
                      }); 
                },2000);
            }),
            onComplete: (error) =>{
                setchangingDepositSettings(true);
            }
        }); 
    }
    
    return (
        <div>

            {!changingDepositSettings? 
            <>
                <div style={{color:getApprovalToBulkDeposit.data?'#00ff00': 'red', fontSize:'2vh', position:'absolute', left:'-8vw', width:'7vw', top:'15%', textAlign:'left'}}>
                Bulk Deposit
                </div> 
            
                <div onClick={ ()=>{ getApprovalToBulkDeposit.data ? revokeApprovalForBulkDeposit(): approveAllForBulkDeposit() } } style={{cursor:'pointer', zIndex:'2',position:'absolute', right:'5%', width:'1vw',height:'2vh',backgroundColor:getApprovalToBulkDeposit.data?'#00ff00': '', border:getApprovalToBulkDeposit.data? '1px solid #00ff00' : '1px solid red',}}>

                </div>
            </>
            :
            <>
                <div style={{color: '#ffff00', fontSize:'2vh', position:'absolute', left:'-10vw', width:'10vw', top:'15%', textAlign:'left'}}>
                    Changing Privileges..
                </div>
            </>
            }
 
                
        </div>
    )
}

export default BulkDepositToggler