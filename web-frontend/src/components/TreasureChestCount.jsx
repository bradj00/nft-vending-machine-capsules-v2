import React, {useState, useContext} from 'react'
import { useEffect } from 'react';
import {useERC20Balances, useWeb3Contract, useMoralisWeb3Api, useMoralis} from 'react-moralis';
import {WheelABI} from '../ContractInfo/ContractInfo.jsx';
import { NftMoreInfoContext } from '../App.js';
import CapsuleIcon from './snippet-components/CapsuleIcon.jsx';
import CapsuleIconInventory from './snippet-components/CapsuleIconInventory.jsx';

const TreasureChestCount = () => {
    const {setslot1ImageUrl,setslot2ImageUrl,setslot3ImageUrl,setslot4ImageUrl,setslot5ImageUrl,setslot6ImageUrl,setslot7ImageUrl,setslot8ImageUrl,setslot9ImageUrl,setslot10ImageUrl,} = useContext(NftMoreInfoContext);
    const {setconfettiZIndex, setrateOfRotation, setconfettiDisplay, setsceneTransition} = useContext(NftMoreInfoContext);
    
    const {ContractErrorMessage, setContractErrorMessage} = useContext(NftMoreInfoContext);
     
    const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, account, user, logout} = useMoralis();

    const [ChestNftImageUrl, setChestNftImageUrl]   = useState('');
    const [ChestNftTitle, setChestNftTitle]         = useState('');
    const [ChestNftTokenId, setChestNftTokenId]     = useState('');
    
    const {RinkebyNFTsState, setRinkebyNFTsState}   = useContext(NftMoreInfoContext);
    const [NftSlotContractAddresses, setNftSlotContractAddresses]   = useState([]);
    const [NftSlotOdds, setNftSlotOdds]   = useState([]);


    const {capsuleIconAnimated, setcapsuleIconAnimated} = useContext(NftMoreInfoContext);
    


    const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
    const {hideExtraInfo, sethideExtraInfo} = useContext(NftMoreInfoContext);

    const Web3Api = useMoralisWeb3Api();
    // const { data, error, runContractFunction, isFetching, isLoading } =
    const getAllCrateSlotAddresses = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllAddys",
    });
    const getAllSlotOdds = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllOdds",
    });
  const Styles = {
    CapsuleInventoryDiv:{

        color: "#fff",
        position:'absolute',
        width: '70%',
        height: '100%',
        // backgroundColor :'rgba(50,50,50,0.6)',
        top:'15%',
        left:'-100%',
        borderRadius:'10px',
        padding:'10px',
        // display:'flex',
        // justifyContent:'center',
        
        fontSize:'1.5rem',
        // border:'1px solid #0022ff'
      },
  }  
    
    // useEffect(()=>{
    //     console.log('getting contract info..');
    //     setTimeout(function(){
    //         getAllCrateSlotAddresses.runContractFunction();
    //         getAllSlotOdds.runContractFunction();
    //     },400);
    // },[])
    
    useEffect(() => {
        if ((contractAddressWheel) && (contractAddressWheel != '/') ){
            if (web3 && account){fetchOwnedCrates();}
        }
    },[contractAddressWheel,web3,account]);

    useEffect(() => {
        if (getAllSlotOdds.data != null){
            // console.log('contract addresses: ',getAllCrateSlotAddresses.data);
            setNftSlotOdds([]);
            for (let i = 0; i < getAllSlotOdds.data.length; i++){
                console.log(getAllSlotOdds.data[i]);
                setNftSlotOdds(NftSlotOdds => [...NftSlotOdds, getAllSlotOdds.data[i]]); 
            }
        }
    }, [getAllSlotOdds.data]);

    useEffect(() => {
        if (getAllCrateSlotAddresses.data != null){
            // console.log('contract addresses: ',getAllCrateSlotAddresses.data);
            setNftSlotContractAddresses([]);
            for (let i = 0; i < getAllCrateSlotAddresses.data.length; i++){
                // console.log(getAllCrateSlotAddresses.data[i]);
                setNftSlotContractAddresses(NftSlotContractAddresses => [...NftSlotContractAddresses, getAllCrateSlotAddresses.data[i]]); 
            }
        }
    }, [getAllCrateSlotAddresses.data]);



     //THE MAGIC SAUCE TO ENABLE WEB3
     useEffect(() => {
        if (!isWeb3Enabled) {
        // console.log('enabling web3...'); 
        enableWeb3();
        }
        // if (web3){fetchOwnedCrates();}
    }, [web3]);


    
    // const fetchContractLinkBalance = async () => {
    // const options = {
    //     chain: "rinkeby",
    //     address: contractAddressWheel
    // };

    // fetchERC20Balances({ params: { options } })

    // }


      const fetchOwnedCrates = async () => { 
        const options = {
            chain: "rinkeby",
            address: account? account: '0x0000000000000000000000000000000000000000', //make this whoever is signed in to Moralis.auth()
            token_address: contractAddressWheel, //treasure chest
        };

        console.log("Requesting Capsule inventory [ "+contractAddressWheel+" ] from Moralis DB..");
        const rinkebyNFTs = await Web3Api.account.getNFTsForContract(options);
        console.log('CAPSULE NFT LIST: ',account,rinkebyNFTs);
        setRinkebyNFTsState(rinkebyNFTs); 
        rinkebyNFTs.result.reverse(); 

        if (rinkebyNFTs.result[0]){ 
            setChestNftTokenId(parseInt(rinkebyNFTs.result[0].token_id) + 0);
            // fetch(rinkebyNFTs.result[0].token_uri , {headers: {"Access-Control-Allow-Origin" : "*"}}) 
            //     .then(response => {
            //         response.headers['Access-Control-Allow-Origin'] = '*';
            //         response.json()
            //     })
            //     .then(data => {
            //         // console.log("data_uri value for NFT: ",data)
            //         // setChestNftImageUrl(data.image);
            //         setChestNftImageUrl("https://i.imgur.com/qLqgj0w.png");
            //         setChestNftTitle(data.name);
            //     });
        } 
    } 

    const openLootCrate = useWeb3Contract({
        
        abi: WheelABI,
        contractAddress: contractAddressWheel,
        functionName: "openChest",
        params: {
            chestId: ChestNftTokenId
            // chestId: 1
        }
    });

    function openTheLootCrate(){
        console.log('requesting user signature to open loot crate: ',ChestNftTokenId);
        openLootCrate.runContractFunction({
            onSuccess:(tx) => tx.wait().then(() => {
              
              console.log('transaction confirmed! Awaiting Chain Link VRF...', tx);
            //   CapsuleOpeningAnimations(); //re-writing this...
            }),
            onError: (error) =>{
              console.log('big ERROR333: ',Object.keys(error)); 
              console.log('big ERROR334: ',error.error.message); 
              setContractErrorMessage(error.error.message);
            },
            onComplete: () => {
                console.log("submitted TX to blockchain");
            }
          });
    }


    function CapsuleOpeningAnimations(){
        setrateOfRotation(6);
        setcapsuleIconAnimated(true);
        sethideExtraInfo(true);

        setslot1ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot2ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot3ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot4ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot5ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot6ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot7ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot8ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot9ImageUrl('https://i.imgur.com/j3CWt1x.png');
        setslot10ImageUrl('https://i.imgur.com/j3CWt1x.png');
      }


    return (
        <div style={{zIndex:'1', }}>
            {/* <img className="imgBorder" onClick={()=>{openTheLootCrate();} } src={ChestNftImageUrl? ChestNftImageUrl : 'https://media2.giphy.com/media/3o7bu3XilJ5BOiSGic/giphy.gif'}></img><br></br>  */}
            <div style={{cursor:'pointer', }} onClick={()=>{openTheLootCrate();}}>
            <CapsuleIcon />

            </div>
                <div style={Styles.CapsuleInventoryDiv}>
                { 
                   RinkebyNFTsState.result ? RinkebyNFTsState.result.map((nothing, index)=>{
                        
                    if (index > 4){
                        return(<div key={index}> </div>)
                    }
                    else{
                        return(
                            <div key={index} style={{position:'absolute',right:230+ (20*index),top:50+(20*index), transform:'scale(0.5)', }}>
                                <CapsuleIconInventory /> 
                            </div>
                        )
                    }
                        
                    }) : <></>

                }
                
                <div style={{position:'fixed', top:'20vh', left:'38vw', width:'13vw',}}>
                    {RinkebyNFTsState ? <div><span style={{fontSize:'1.5vw'}}>x&nbsp;</span>{RinkebyNFTsState.result.length}</div> : <span style={{fontSize:'1vw',fontStyle:'italic'}}>loading capsule inventory..</span>}
                </div>

                </div>
      
                
            
            
    
        </div>
    )
}

export default TreasureChestCount;