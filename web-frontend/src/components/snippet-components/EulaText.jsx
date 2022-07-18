import React, {useEffect} from 'react'
import '../../styles/grid.css'
import {useMoralis, useWeb3Contract, useMoralisWeb3Api} from 'react-moralis'
import {WheelFactoryABI, WheelFactoryContractAddress} from '../../ContractInfo/ContractInfo'





const EulaText = (props) => {


    const {web3, account} = useMoralis();
    const getuserAcceptEula = useWeb3Contract({
        abi: WheelFactoryABI,
        contractAddress: WheelFactoryContractAddress,
        functionName: "getuserAcceptEula", 
        params: {
            user: account? account : "0x0000000000000000000000000000000000000000",        
        }
      });
    const performEulaAgree = useWeb3Contract({
        abi: WheelFactoryABI,
        contractAddress: WheelFactoryContractAddress,
        functionName: "signEula", 
        params: {
            signTrue: true,        
        }
      });
     
    useEffect(()=>{
        if (getuserAcceptEula.data){
            console.log('returned getuserAcceptEula data: ',getuserAcceptEula.data._hex);
            if (getuserAcceptEula.data._hex == '0x00'){
                props.setSignedEula(false);
            }
            if (getuserAcceptEula.data._hex == '0x01'){
                props.setSignedEula(true);
            }

        }
    },[getuserAcceptEula.data]);

    useEffect(()=>{
        if (web3 && account){
            console.log('account: ',account)
            getuserAcceptEula.runContractFunction({
                onError: (error) =>{
                    console.log('getuserAcceptEula lookup ERROR: ',error);
                },
            });
        }
    },[web3, account]);

    function performSign(){
        performEulaAgree.runContractFunction({
            onError: (error) =>{
                console.log('getuserAcceptEula lookup ERROR: ',error);
            },
            onSuccess: async (tx)=>tx.wait().then(newTx => {
                console.log('[ approval ] tx confirmed: ',newTx)
                props.setSignedEula(true);
            })
        });
    }

    return (
    <div style={{textAlign:'center',position:'absolute', width:'100%', height:'100%',display:'flex', paddingTop:'5vh', paddingLeft:'2vw', paddingRight:'2vw', justifyContent:'center',}}>
        <div style={{width:'100%', textAlign:'center', }}>
            <div style={{fontSize:'2vh', marginBottom:'2vh', fontWeight:'bolder'}}>
                IMPORTANT! PLEASE SIGN AND AGREE BEFORE USING THIS DAPP
                <br></br>
            </div>
            <div style={{marginBottom:'5vh',}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque in dictum non consectetur a erat nam. Vulputate mi sit amet mauris commodo quis imperdiet massa. Egestas quis ipsum suspendisse ultrices gravida. Nunc id cursus metus aliquam. Maecenas ultricies mi eget mauris. Erat velit scelerisque in dictum non. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Interdum velit euismod in pellentesque. Dolor sit amet consectetur adipiscing.
            </div>
            <div className="signButton" onClick={()=>{performSign()}} style={{margin:'auto', padding:'1vh', borderRadius:'5px', width:'30%', }}>
                Accept and Sign
            </div>
        </div>
    </div>
    )
}

export default EulaText