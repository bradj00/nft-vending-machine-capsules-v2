import React, {useState} from 'react'
import '../styles/grid.css';
import {useWeb3Contract, useMoralisWeb3Api, useMoralis} from 'react-moralis';
import {WheelABI} from '../ContractInfo/ContractInfo.jsx';
import { useContext, useEffect } from 'react';
import { OddsAndSlotAddys } from "../App.js"
import {getEllipsisTxt} from "../helpers/formatters";
import { NftMoreInfoContext } from '../App.js';
import CarouselNftSlot from './CarouselNftSlot';

const VendingCurrentSlots = () => {
    const {account} = useMoralis();
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);

    const {NftSlotOdds, setNftSlotOdds}    = useContext(OddsAndSlotAddys);
    const {RinkebyNFTsState, setRinkebyNFTsState}    = useContext(OddsAndSlotAddys);
    const {ChestNftTokenId, setChestNftTokenId}    = useContext(OddsAndSlotAddys);


    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {confettiDisplay, setconfettiDisplay}    = useContext(NftMoreInfoContext);
    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    
    
    const {machineOwner, setmachineOwner}    = useContext(NftMoreInfoContext);
    const [OwnerMatch, setOwnerMatch]        = useState(false);
    
    const {slotInventory1tokenInfoArray, setslotInventory1tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory2tokenInfoArray, setslotInventory2tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory3tokenInfoArray, setslotInventory3tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory4tokenInfoArray, setslotInventory4tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory5tokenInfoArray, setslotInventory5tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory6tokenInfoArray, setslotInventory6tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory7tokenInfoArray, setslotInventory7tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory8tokenInfoArray, setslotInventory8tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory9tokenInfoArray, setslotInventory9tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory10tokenInfoArray, setslotInventory10tokenInfoArray}    = useContext(NftMoreInfoContext);
    

    const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
    const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
    const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
      //

    
    const {slotNameAndSymbol , setslotNameAndSymbol}    = useContext(NftMoreInfoContext);

    const {slotImageObj, setslotImageObj} = useContext(NftMoreInfoContext);
    
    const {capsuleIconAnimated, setcapsuleIconAnimated} = useContext(NftMoreInfoContext);

    const [slot1ImageUrl, setslot1ImageUrl] = useState();
    const [slot2ImageUrl, setslot2ImageUrl] = useState();
    const [slot3ImageUrl, setslot3ImageUrl] = useState();
    const [slot4ImageUrl, setslot4ImageUrl] = useState();
    const [slot5ImageUrl, setslot5ImageUrl] = useState();
    const [slot6ImageUrl, setslot6ImageUrl] = useState();
    const [slot7ImageUrl, setslot7ImageUrl] = useState();
    const [slot8ImageUrl, setslot8ImageUrl] = useState();
    const [slot9ImageUrl, setslot9ImageUrl] = useState();
    const [slot10ImageUrl, setslot10ImageUrl] = useState();
    

    const {sceneTransition, setsceneTransition} = useContext(NftMoreInfoContext); 

    
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
    
    
    
    const {clickedSlotObj, setClickedSlotObj} = useContext(NftMoreInfoContext);
    const {confettiZIndex, setconfettiZIndex} = useContext(NftMoreInfoContext);

    const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);


    const {slot1Obj, setslot1Obj} = useContext(NftMoreInfoContext);
    const {slot2Obj, setslot2Obj} = useContext(NftMoreInfoContext);
    const {slot3Obj, setslot3Obj} = useContext(NftMoreInfoContext);
    const {slot4Obj, setslot4Obj} = useContext(NftMoreInfoContext);
    const {slot5Obj, setslot5Obj} = useContext(NftMoreInfoContext);
    const {slot6Obj, setslot6Obj} = useContext(NftMoreInfoContext);
    const {slot7Obj, setslot7Obj} = useContext(NftMoreInfoContext);
    const {slot8Obj, setslot8Obj} = useContext(NftMoreInfoContext);
    const {slot9Obj, setslot9Obj} = useContext(NftMoreInfoContext);
    const {slot10Obj, setslot10Obj} = useContext(NftMoreInfoContext);
    
    const [frontSlotId1, setFrontSlotId1] = useState();
    const [frontSlotId2, setFrontSlotId2] = useState();
    const [frontSlotId3, setFrontSlotId3] = useState();
    const [frontSlotId4, setFrontSlotId4] = useState();
    const [frontSlotId5, setFrontSlotId5] = useState();
    const [frontSlotId6, setFrontSlotId6] = useState();
    const [frontSlotId7, setFrontSlotId7] = useState();
    const [frontSlotId8, setFrontSlotId8] = useState();
    const [frontSlotId9, setFrontSlotId9] = useState();
    const [frontSlotId10, setFrontSlotId10] = useState();
    
    // const {hideExtraInfo, sethideExtraInfo} = useContext(NftMoreInfoContext);
    
    const {rateOfRotation, setrateOfRotation} = useContext(NftMoreInfoContext);

    const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);

    
    const [slot1Stock, setslot1Stock] = useState();
    const [slot2Stock, setslot2Stock] = useState();
    const [slot3Stock, setslot3Stock] = useState();
    const [slot4Stock, setslot4Stock] = useState();
    const [slot5Stock, setslot5Stock] = useState();
    const [slot6Stock, setslot6Stock] = useState();
    const [slot7Stock, setslot7Stock] = useState();
    const [slot8Stock, setslot8Stock] = useState();
    const [slot9Stock, setslot9Stock] = useState();
    const [slot10Stock, setslot10Stock] = useState();



    
    const [slot1Inventory, setslot1Inventory] = useState();
    const [slot2Inventory, setslot2Inventory] = useState();
    const [slot3Inventory, setslot3Inventory] = useState();
    const [slot4Inventory, setslot4Inventory] = useState();
    const [slot5Inventory, setslot5Inventory] = useState();
    const [slot6Inventory, setslot6Inventory] = useState();
    const [slot7Inventory, setslot7Inventory] = useState();
    const [slot8Inventory, setslot8Inventory] = useState();
    const [slot9Inventory, setslot9Inventory] = useState();
    const [slot10Inventory, setslot10Inventory] = useState();
    const Web3Api = useMoralisWeb3Api();


    const fetchMachineOwner = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "owner",
    });
    
    //WALRUS - THIS IS NO LONGER GIVING US token symbol or name to save contract space. We'll need to fetch it directly using the address and moralis
    const fetchContractInventorySlot1 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 0
      }
    });
    const fetchContractInventorySlot2 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 1
      }
    });
    const fetchContractInventorySlot3 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 2
      }
    });
    const fetchContractInventorySlot4 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 3
      }
    });
    const fetchContractInventorySlot5 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 4
      }
    });
    
    const fetchContractInventorySlot6 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 5
      }
    });
    
    const fetchContractInventorySlot7 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 6
      }
    });
    
    const fetchContractInventorySlot8 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 7
      }
    });
    
    const fetchContractInventorySlot9 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 8
      }
    });
    
    const fetchContractInventorySlot10 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 9
      }
    });
    
    useEffect(()=>{

      //fetching owner address for this machine
      fetchMachineOwner.runContractFunction();
      
      console.log('---------------fetching inventory for each slot..');
        //POSSIBLY THROTTLE CALLS TO AVOID UPSETTING THE NODE GODS
        if (NftSlotContractAddresses.length > 0){
            if (NftSlotContractAddresses[0] != "0x0000000000000000000000000000000000000000"){
                setTimeout(function(){
                  fetchContractInventorySlot1.runContractFunction();
                  console.log('fetching: [ 1 ]')
                },0);
            }

            if (NftSlotContractAddresses[1] != "0x0000000000000000000000000000000000000000"){
                setTimeout(function(){
                  fetchContractInventorySlot2.runContractFunction();
                  // console.log('fetching: [ 2 ]')
                },0);
            }

            if (NftSlotContractAddresses[2] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot3.runContractFunction();
                // console.log('fetching: [ 3 ]')
              },0);
            }

            if (NftSlotContractAddresses[3] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot4.runContractFunction();
                // console.log('fetching: [ 4 ]')
              },0);

            }

            if (NftSlotContractAddresses[4] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot5.runContractFunction();
                // console.log('fetching: [ 5 ]')
              },0);
            }

            if (NftSlotContractAddresses[5] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot6.runContractFunction();
                // console.log('fetching: [ 6 ]')
              },0);
            }

            if (NftSlotContractAddresses[6] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot7.runContractFunction();
                // console.log('fetching: [ 7 ]')
              },0);
            }

            if (NftSlotContractAddresses[7] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot8.runContractFunction();
                // console.log('fetching: [ 8 ]')
              },0);
            }

            if (NftSlotContractAddresses[8] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot9.runContractFunction();
                // console.log('fetching: [ 9 ]')
              },0);
            }

            if (NftSlotContractAddresses[9] != "0x0000000000000000000000000000000000000000"){
              setTimeout(function(){
                fetchContractInventorySlot10.runContractFunction();
                // console.log('fetching: [ 10 ]')
              },0);
            }
          }

    },[NftSlotContractAddresses])

    function deriveInStockFromRegisteredInventory(arr){
      var offset = 0;
      for (let i = 0; i < arr.length; i++){
        if (arr[i].index == 0){
          offset++;
        }
      }
      return((arr.length - offset ));
    }

    useEffect(()=>{
      console.log('WHEEL OWNER: ',fetchMachineOwner.data);
      if ((fetchMachineOwner.data != null)&&(account)){
        // console.log(typeof fetchMachineOwner.data,'~~~~~~~~~~~~~~~~fetchMachineOwner is: ',fetchMachineOwner.data.toLowerCase());
        // console.log(typeof account,'~~~~~~~~~~~~~~~~~~~~~~~~~~account is: ',account.toLowerCase());
        if (fetchMachineOwner.data.toLowerCase() == account.toLowerCase()) {
          // console.log('MATCH!') 
          setOwnerMatch(true);
        }
        else {
          // console.log('NOT match')
          setOwnerMatch(false);
        }
      }
    },[fetchMachineOwner.data, account]);

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
  
      if (rinkebyNFTs.result[0]){ //set the first tokenId as the one that will be opened upon clicking the main icon
          setChestNftTokenId(parseInt(rinkebyNFTs.result[0].token_id) + 0);
      } 
    } 



    useEffect(()=>{
      if (fetchContractInventorySlot1.data != null){
      if (fetchContractInventorySlot1.data.length > 0){
        // sethideExtraInfo(false); //should probably call this somewhere more reliable.
        setcapsuleIconAnimated(false);
        console.log('SLOT 1 : ',fetchContractInventorySlot1.data);
        // console.log('FILTERED SLOT 1: ',filterArray(1, fetchContractInventorySlot1.data))

        // setslotInventory1tokenInfoArray( filterArray(1, fetchContractInventorySlot1.data) );
        // setslot1Inventory( filterArray(1, fetchContractInventorySlot1.data)[0].length );
        // setslot1Stock( deriveInStockFromRegisteredInventory(  filterArray(1, fetchContractInventorySlot1.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...  WALRUS
        let updated1 = {"1":  {name: fetchContractInventorySlot1.data[1], symbol: fetchContractInventorySlot1.data[2], contract: fetchContractInventorySlot1.data[3]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated1
        })    );

        // if ( filterArray(1, fetchContractInventorySlot1.data) ){
        // if ( filterArray(1, fetchContractInventorySlot1.data)[0].length > 0 ){
        // //  setFrontSlotId1( filterArray(1, fetchContractInventorySlot1.data)[0][0] ); //NFT in this slot, at the front
        // //   fetch( filterArray(1, fetchContractInventorySlot1.data)[0][0].tokenURI ) 
        // //   .then(response => response.json())
        // //   .then(data => {
        // //     setslot1ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
        // //     // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
        // //     let updated = {"1": data.image} 
        // //     setslotImageObj(oldValue => ({
        // //       ...oldValue, ...updated
        // //     })    );
        // //   });
        // }
        // }
      }
      }
    },[fetchContractInventorySlot1.data])













    var style1  = { "--i": 1,  borderBottom: '1px groove #fff',borderRadius:'-3px'  };
    var style2  = { "--i": 2,  borderBottom: '1px groove #fff',borderRadius:'-3px'  };
    var style3  = { "--i": 3,  borderBottom: '1px groove #fff',borderRadius:'-3px'  };
    var style4  = { "--i": 4,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style5  = { "--i": 5,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style6  = { "--i": 6,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style7  = { "--i": 7,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style8  = { "--i": 8,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style9  = { "--i": 9,  borderBottom: '1px groove #fff',borderRadius:'-3px' };
    var style10 = { "--i": 10, borderBottom: '1px groove #fff',borderRadius:'-3px' };
    
    var style1Empty  = { "--i": 1,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'25px ridge #fff'};
    var style2Empty  = { "--i": 2,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style3Empty  = { "--i": 3,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style4Empty  = { "--i": 4,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style5Empty  = { "--i": 5,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style6Empty  = { "--i": 6,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style7Empty  = { "--i": 7,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style8Empty  = { "--i": 8,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style9Empty  = { "--i": 9,    width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};
    var style10Empty  = { "--i": 10,  width:'50%', height:'50%', marginLeft:'30%',marginTop:'50%', borderBottom:'2px ridge #fff'};


    

    // useEffect(()=>{
    //   if(hideExtraInfo == true){
    //     setslot1ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot2ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot3ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot4ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot5ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot6ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot7ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot8ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot9ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //     setslot10ImageUrl('https://i.imgur.com/j3CWt1x.png');
    //   }
    // },[hideExtraInfo])

    // function SimulateConfettiScene(){
      
    //   setsceneTransition('fadeOut');
    //   console.log('fading out...');
    //   setconfettiDisplay(true);
    //   setconfettiZIndex("zIndexFront");
    //   setTimeout(function(){
    //     setsceneTransition('fadeIn');
    //     setconfettiDisplay(false);
    //     setconfettiZIndex("zIndexNormal");
    //   },5000);
      
    // }
    function manageInventory(){
      //navigate to Register Inventory management page
      setmanagingInventory(!managingInventory);
    }

    return (
    // <div style={{position:'absolute',width:'20vw',height:'20vh'}}> somehow get the showcase to scale with viewport... scale works here but wrong.
    <div style={{}}>
        
        {OwnerMatch?
        <button style={{zIndex:'555', position:'absolute',top:'2vh',left:'21vw', height:'4vh',paddingLeft:'0.2vw',paddingRight:'0.2vw',cursor:'pointer', fontSize:'0.9vw', border:'1px solid #fff'}} onClick={()=>{manageInventory()}}>Manage Wheel</button>
        :<></>        
        }
        
        <div className="showcase" style={{animation: `animate ${rateOfRotation}s linear infinite`}}>
          {/* <div style={{color:'#fff',position:'fixed',top:'-20',}}>qqqqqqqqqqqqqqqqqq</div> */}
          

        
         {fetchContractInventorySlot1.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[0]} slotObj={slot1Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot1.data}  thisStyle={style1}  slotIndex={1}  slotImageUrl={slot1ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot1Stock}  styleEmpty={style1Empty}/> : <CarouselNftSlot thisStyle={style1}  slotIndex={1}  styleEmpty={style1Empty}/> }                   
         {fetchContractInventorySlot2.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[1]} slotObj={slot2Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot2.data}  thisStyle={style2}  slotIndex={2}  slotImageUrl={slot2ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot2Stock}  styleEmpty={style2Empty}/> : <CarouselNftSlot thisStyle={style2}  slotIndex={2}  styleEmpty={style2Empty}/> }                   
         {fetchContractInventorySlot3.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[2]} slotObj={slot3Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot3.data}  thisStyle={style3}  slotIndex={3}  slotImageUrl={slot3ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot3Stock}  styleEmpty={style3Empty}/> : <CarouselNftSlot thisStyle={style3}  slotIndex={3}  styleEmpty={style3Empty}/> }                   
         {fetchContractInventorySlot4.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[3]} slotObj={slot4Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot4.data}  thisStyle={style4}  slotIndex={4}  slotImageUrl={slot4ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot4Stock}  styleEmpty={style4Empty}/> : <CarouselNftSlot thisStyle={style4}  slotIndex={4}  styleEmpty={style4Empty}/> }                   
         {fetchContractInventorySlot5.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[4]} slotObj={slot5Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot5.data}  thisStyle={style5}  slotIndex={5}  slotImageUrl={slot5ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot5Stock}  styleEmpty={style5Empty}/> : <CarouselNftSlot thisStyle={style5}  slotIndex={5}  styleEmpty={style5Empty}/> }                   
         {fetchContractInventorySlot6.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[5]} slotObj={slot6Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot6.data}  thisStyle={style6}  slotIndex={6}  slotImageUrl={slot6ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot6Stock}  styleEmpty={style6Empty}/> : <CarouselNftSlot thisStyle={style6}  slotIndex={6}  styleEmpty={style6Empty}/> }                   
         {fetchContractInventorySlot7.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[6]} slotObj={slot7Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot7.data}  thisStyle={style7}  slotIndex={7}  slotImageUrl={slot7ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot7Stock}  styleEmpty={style7Empty}/> : <CarouselNftSlot thisStyle={style7}  slotIndex={7}  styleEmpty={style7Empty}/> }                   
         {fetchContractInventorySlot8.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[7]} slotObj={slot8Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot8.data}  thisStyle={style8}  slotIndex={8}  slotImageUrl={slot8ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot8Stock}  styleEmpty={style8Empty}/> : <CarouselNftSlot thisStyle={style8}  slotIndex={8}  styleEmpty={style8Empty}/> }                   
         {fetchContractInventorySlot9.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[8]} slotObj={slot9Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot9.data}  thisStyle={style9}  slotIndex={9}  slotImageUrl={slot9ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot9Stock}  styleEmpty={style9Empty}/> : <CarouselNftSlot thisStyle={style9}  slotIndex={9}  styleEmpty={style9Empty}/> }                   
         {fetchContractInventorySlot10.data? <CarouselNftSlot  contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[9]} slotObj={slot10Obj} contractName={1}  contractSymbol={1}    tokenId={fetchContractInventorySlot10.data}  thisStyle={style10}  slotIndex={10}  slotImageUrl={slot10ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot10Stock}  styleEmpty={style10Empty}/> : <CarouselNftSlot thisStyle={style10}  slotIndex={10}  styleEmpty={style10Empty}/> }                   
         
                
            

        </div>    
    </div>
  )
}

export default VendingCurrentSlots