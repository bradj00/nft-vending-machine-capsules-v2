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

    const {contractAddressTreasureChest, setcontractAddressTreasureChest} = useContext(NftMoreInfoContext);

    
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
      contractAddress: contractAddressTreasureChest,
      functionName: "owner",
    });
    
    const fetchContractInventorySlot1 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 0
      }
    });
    const fetchContractInventorySlot2 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 1
      }
    });
    const fetchContractInventorySlot3 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 2
      }
    });
    const fetchContractInventorySlot4 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 3
      }
    });
    const fetchContractInventorySlot5 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 4
      }
    });
    
    const fetchContractInventorySlot6 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 5
      }
    });
    
    const fetchContractInventorySlot7 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 6
      }
    });
    
    const fetchContractInventorySlot8 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 7
      }
    });
    
    const fetchContractInventorySlot9 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 8
      }
    });
    
    const fetchContractInventorySlot10 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 9
      }
    });
    
    useEffect(()=>{

      //fetching owner address for this machine
      fetchMachineOwner.runContractFunction();
      
      // console.log('fetching inventory for each slot..');
        //POSSIBLY THROTTLE CALLS TO AVOID UPSETTING THE NODE GODS
        if (NftSlotContractAddresses.length > 0){
            if (NftSlotContractAddresses[0] != "0x0000000000000000000000000000000000000000"){
                setTimeout(function(){
                  fetchContractInventorySlot1.runContractFunction();
                  // console.log('fetching: [ 1 ]')
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




    function filterArray(topSlotIndex, TopLevelArray) {
      if (!TopLevelArray){return}
      let filteredArray = TopLevelArray[0].filter((item) => {
        return item.slotIndex == topSlotIndex
      });
      let filteredUriArray = TopLevelArray[0].filter((item) => {
        return item.slotIndex == topSlotIndex
      });


      return([filteredArray, TopLevelArray[1],TopLevelArray[2],TopLevelArray[3],TopLevelArray[4]])
    } 

    useEffect(()=>{
      if (fetchContractInventorySlot1.data != null){
        // sethideExtraInfo(false); //should probably call this somewhere more reliable.
        setcapsuleIconAnimated(false);
        // console.log('SLOT 1 : ',fetchContractInventorySlot1.data);
        // console.log('FILTERED SLOT 1: ',filterArray(1, fetchContractInventorySlot1.data))

        setslotInventory1tokenInfoArray( filterArray(1, fetchContractInventorySlot1.data) );
        setslot1Inventory( filterArray(1, fetchContractInventorySlot1.data)[0].length );
        setslot1Stock( deriveInStockFromRegisteredInventory(  filterArray(1, fetchContractInventorySlot1.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...  WALRUS
        let updated1 = {"1":  {name: fetchContractInventorySlot1.data[2], symbol: fetchContractInventorySlot1.data[3], contract: fetchContractInventorySlot1.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated1
        })    );

        if ( filterArray(1, fetchContractInventorySlot1.data)[0].length > 0 ){
         setFrontSlotId1( filterArray(1, fetchContractInventorySlot1.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(1, fetchContractInventorySlot1.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot1ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"1": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot1.data])


    useEffect(()=>{
      if (fetchContractInventorySlot2.data != null){
        // sethideExtraInfo(false); //should probably call this somewhere more reliable.
        setcapsuleIconAnimated(false);
        // console.log('SLOT 2 : ',fetchContractInventorySlot1.data);
        // console.log('FILTERED SLOT 2: ',filterArray(2, fetchContractInventorySlot1.data))

        setslotInventory2tokenInfoArray( filterArray(2, fetchContractInventorySlot2.data) );
        setslot2Inventory( filterArray(2, fetchContractInventorySlot2.data)[0].length );
        setslot2Stock( deriveInStockFromRegisteredInventory(  filterArray(2, fetchContractInventorySlot2.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated2 = {"2":  {name: fetchContractInventorySlot2.data[2], symbol: fetchContractInventorySlot2.data[3], contract: fetchContractInventorySlot2.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated2
        })    );

        if ( filterArray(2, fetchContractInventorySlot2.data)[0].length > 0 ){
         setFrontSlotId2( filterArray(2, fetchContractInventorySlot2.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(2, fetchContractInventorySlot2.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot2ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot2Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot2.data[0][i][0]._hex, 16)});
            let updated = {"2": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot2.data])

    useEffect(()=>{
      if (fetchContractInventorySlot3.data != null){
        // console.log('SLOT 3 : ',fetchContractInventorySlot1.data);
        // console.log('FILTERED SLOT 3: ',filterArray(3, fetchContractInventorySlot3.data))

        setslotInventory3tokenInfoArray( filterArray(3, fetchContractInventorySlot3.data) );
        setslot3Inventory( filterArray(3, fetchContractInventorySlot3.data)[0].length );
        setslot3Stock( deriveInStockFromRegisteredInventory(  filterArray(3, fetchContractInventorySlot3.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated3 = {"3":  {name: fetchContractInventorySlot3.data[2], symbol: fetchContractInventorySlot3.data[3], contract: fetchContractInventorySlot3.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated3
        })    );

        if ( filterArray(3, fetchContractInventorySlot3.data)[0].length > 0 ){
         setFrontSlotId3( filterArray(3, fetchContractInventorySlot3.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(3, fetchContractInventorySlot3.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot3ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"3": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot3.data])

    useEffect(()=>{
      if (fetchContractInventorySlot4.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))

        setslotInventory4tokenInfoArray( filterArray(4, fetchContractInventorySlot4.data) );
        setslot4Inventory( filterArray(4, fetchContractInventorySlot4.data)[0].length );
        setslot4Stock( deriveInStockFromRegisteredInventory(  filterArray(4, fetchContractInventorySlot4.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated4 = {"4":  {name: fetchContractInventorySlot4.data[2], symbol: fetchContractInventorySlot4.data[3], contract: fetchContractInventorySlot4.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated4
        })    );

        if ( filterArray(4, fetchContractInventorySlot4.data)[0].length > 0 ){
         setFrontSlotId4( filterArray(4, fetchContractInventorySlot4.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(4, fetchContractInventorySlot4.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot4ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"4": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot4.data])



    useEffect(()=>{
      if (fetchContractInventorySlot5.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))

        setslotInventory5tokenInfoArray( filterArray(5, fetchContractInventorySlot4.data) );
        setslot5Inventory( filterArray(5, fetchContractInventorySlot5.data)[0].length );
        setslot5Stock( deriveInStockFromRegisteredInventory(  filterArray(5, fetchContractInventorySlot5.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated5 = {"5":  {name: fetchContractInventorySlot5.data[2], symbol: fetchContractInventorySlot5.data[3], contract: fetchContractInventorySlot5.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated5
        })    );

        if ( filterArray(5, fetchContractInventorySlot5.data)[0].length > 0 ){
         setFrontSlotId5( filterArray(5, fetchContractInventorySlot5.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(5, fetchContractInventorySlot5.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot5ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"5": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot5.data])



    useEffect(()=>{
      if (fetchContractInventorySlot6.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))

        setslotInventory6tokenInfoArray( filterArray(6, fetchContractInventorySlot6.data) );
        setslot6Inventory( filterArray(6, fetchContractInventorySlot6.data)[0].length );
        setslot6Stock( deriveInStockFromRegisteredInventory(  filterArray(6, fetchContractInventorySlot6.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated6 = {"6":  {name: fetchContractInventorySlot6.data[2], symbol: fetchContractInventorySlot6.data[3], contract: fetchContractInventorySlot6.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated6
        })    );

        if ( filterArray(6, fetchContractInventorySlot6.data)[0].length > 0 ){
         setFrontSlotId6( filterArray(6, fetchContractInventorySlot6.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(6, fetchContractInventorySlot6.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot6ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"6": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot6.data])


    useEffect(()=>{
      if (fetchContractInventorySlot7.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))

        setslotInventory7tokenInfoArray( filterArray(7, fetchContractInventorySlot7.data) );
        setslot7Inventory( filterArray(7, fetchContractInventorySlot7.data)[0].length );
        setslot7Stock( deriveInStockFromRegisteredInventory(  filterArray(7, fetchContractInventorySlot7.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated7 = {"7":  {name: fetchContractInventorySlot7.data[2], symbol: fetchContractInventorySlot7.data[3], contract: fetchContractInventorySlot7.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated7
        })    );

        if ( filterArray(7, fetchContractInventorySlot7.data)[0].length > 0 ){
         setFrontSlotId7( filterArray(7, fetchContractInventorySlot7.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(7, fetchContractInventorySlot7.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot7ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"7": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot7.data])



    useEffect(()=>{
      if (fetchContractInventorySlot8.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))

        setslotInventory8tokenInfoArray( filterArray(8, fetchContractInventorySlot8.data) );
        setslot8Inventory( filterArray(8, fetchContractInventorySlot8.data)[0].length );
        setslot8Stock( deriveInStockFromRegisteredInventory(  filterArray(8, fetchContractInventorySlot8.data)[0]  ) );

        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated8 = {"8":  {name: fetchContractInventorySlot8.data[2], symbol: fetchContractInventorySlot8.data[3], contract: fetchContractInventorySlot8.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated8
        })    );

        if ( filterArray(8, fetchContractInventorySlot8.data)[0].length > 0 ){
         setFrontSlotId8( filterArray(8, fetchContractInventorySlot8.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(8, fetchContractInventorySlot8.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot8ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"8": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot8.data])


    useEffect(()=>{
      if (fetchContractInventorySlot9.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))
  
        setslotInventory9tokenInfoArray( filterArray(9, fetchContractInventorySlot9.data) );
        setslot9Inventory( filterArray(9, fetchContractInventorySlot9.data)[0].length );
        setslot9Stock( deriveInStockFromRegisteredInventory(  filterArray(9, fetchContractInventorySlot9.data)[0]  ) );
  
        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated9 = {"9":  {name: fetchContractInventorySlot9.data[2], symbol: fetchContractInventorySlot9.data[3], contract: fetchContractInventorySlot9.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated9
        })    );
  
        if ( filterArray(9, fetchContractInventorySlot9.data)[0].length > 0 ){
         setFrontSlotId9( filterArray(9, fetchContractInventorySlot9.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(9, fetchContractInventorySlot9.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot9ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"9": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot9.data])
  
  
    useEffect(()=>{
      if (fetchContractInventorySlot10.data != null){
        // console.log('SLOT 4 : ',fetchContractInventorySlot4.data);
        // console.log('FILTERED SLOT 4: ',filterArray(4, fetchContractInventorySlot4.data))
  
        setslotInventory10tokenInfoArray( filterArray(10, fetchContractInventorySlot10.data) );
        setslot10Inventory( filterArray(10, fetchContractInventorySlot10.data)[0].length );
        setslot10Stock( deriveInStockFromRegisteredInventory(  filterArray(10, fetchContractInventorySlot10.data)[0]  ) );
  
        //these indexes will shift down 1 when we deploy our new factory due to uncommitted changes...
        let updated10 = {"10":  {name: fetchContractInventorySlot10.data[2], symbol: fetchContractInventorySlot10.data[3], contract: fetchContractInventorySlot10.data[4]} } 
        setslotNameAndSymbol(oldValue => ({
          ...oldValue, ...updated10
        })    );
  
        if ( filterArray(10, fetchContractInventorySlot10.data)[0].length > 0 ){
         setFrontSlotId10( filterArray(10, fetchContractInventorySlot10.data)[0][0] ); //NFT in this slot, at the front
          fetch( filterArray(10, fetchContractInventorySlot10.data)[0][0].tokenURI ) 
          .then(response => response.json())
          .then(data => {
            setslot10ImageUrl(data.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'));
            // setslot1Obj({data: data, slotOdds: NftSlotOdds[0], id: parseInt(fetchContractInventorySlot1.data[0][i][0]._hex, 16)});
            let updated = {"10": data.image} 
            setslotImageObj(oldValue => ({
              ...oldValue, ...updated
            })    );
          });
        }
      }
    },[fetchContractInventorySlot10.data])
  
  











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
          

        
         {fetchContractInventorySlot1.data? <CarouselNftSlot metadata={filterArray(1, fetchContractInventorySlot1.data)[0][0]} contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[0]} slotObj={slot1Obj} contractName={fetchContractInventorySlot1.data[2]}  contractSymbol={fetchContractInventorySlot1.data[3]}    tokenId={fetchContractInventorySlot1.data[0]}  thisStyle={style1}  slotIndex={1}  slotImageUrl={slot1ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot1Stock}  styleEmpty={style1Empty}/> : <CarouselNftSlot thisStyle={style1}  slotIndex={1}  styleEmpty={style1Empty}/> }                   
         {fetchContractInventorySlot2.data? <CarouselNftSlot metadata={filterArray(2, fetchContractInventorySlot2.data)[0][0]} contractAddress={'MCPA contract'}  slotContractAddress={NftSlotContractAddresses[1]} slotObj={slot2Obj} contractName={fetchContractInventorySlot2.data[2]}  contractSymbol={fetchContractInventorySlot2.data[3]}    tokenId={fetchContractInventorySlot2.data[0]} thisStyle={style2}  slotIndex={2}  slotImageUrl={slot2ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot2Stock}  styleEmpty={style2Empty}/> : <CarouselNftSlot thisStyle={style2}  slotIndex={2}  styleEmpty={style2Empty}/> }
         {fetchContractInventorySlot3.data? <CarouselNftSlot metadata={filterArray(3, fetchContractInventorySlot3.data)[0][0]} contractAddress={'MCPL contract'}  slotContractAddress={NftSlotContractAddresses[2]} slotObj={slot3Obj} contractName={fetchContractInventorySlot3.data[2]}  contractSymbol={fetchContractInventorySlot3.data[3]}    tokenId={fetchContractInventorySlot3.data[0]} thisStyle={style3}  slotIndex={3}  slotImageUrl={slot3ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot3Stock}  styleEmpty={style3Empty}/> : <CarouselNftSlot thisStyle={style3}  slotIndex={3}  styleEmpty={style3Empty}/>}
         {fetchContractInventorySlot4.data? <CarouselNftSlot metadata={filterArray(4, fetchContractInventorySlot4.data)[0][0]} contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[3]} slotObj={slot4Obj} contractName={fetchContractInventorySlot4.data[2]}  contractSymbol={fetchContractInventorySlot4.data[3]}    tokenId={fetchContractInventorySlot4.data[0]} thisStyle={style4}  slotIndex={4}  slotImageUrl={slot4ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot4Stock}  styleEmpty={style4Empty}/> : <CarouselNftSlot thisStyle={style4}  slotIndex={4}  styleEmpty={style4Empty}/>}
         {fetchContractInventorySlot5.data? <CarouselNftSlot metadata={filterArray(5, fetchContractInventorySlot5.data)[0][0]} contractAddress={'MCPA contract'}  slotContractAddress={NftSlotContractAddresses[4]} slotObj={slot5Obj} contractName={fetchContractInventorySlot5.data[2]}  contractSymbol={fetchContractInventorySlot5.data[3]}    tokenId={fetchContractInventorySlot5.data[0]} thisStyle={style5}  slotIndex={5}  slotImageUrl={slot5ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot5Stock}  styleEmpty={style5Empty}/> : <CarouselNftSlot thisStyle={style5}  slotIndex={5}  styleEmpty={style5Empty}/> }
         {fetchContractInventorySlot6.data? <CarouselNftSlot metadata={filterArray(6, fetchContractInventorySlot6.data)[0][0]} contractAddress={'MCPL contract'}  slotContractAddress={NftSlotContractAddresses[5]} slotObj={slot6Obj} contractName={fetchContractInventorySlot6.data[2]}  contractSymbol={fetchContractInventorySlot6.data[3]}    tokenId={fetchContractInventorySlot6.data[0]} thisStyle={style6}  slotIndex={6}  slotImageUrl={slot6ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot6Stock}  styleEmpty={style6Empty}/> : <CarouselNftSlot thisStyle={style6}  slotIndex={6}  styleEmpty={style6Empty}/>}
         {fetchContractInventorySlot7.data? <CarouselNftSlot metadata={filterArray(7, fetchContractInventorySlot7.data)[0][0]} contractAddress={'MCPC contract'}  slotContractAddress={NftSlotContractAddresses[6]} slotObj={slot7Obj} contractName={fetchContractInventorySlot7.data[2]}  contractSymbol={fetchContractInventorySlot7.data[3]}    tokenId={fetchContractInventorySlot7.data[0]} thisStyle={style7}  slotIndex={7}  slotImageUrl={slot7ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot7Stock}  styleEmpty={style7Empty}/> : <CarouselNftSlot thisStyle={style7}  slotIndex={7}  styleEmpty={style7Empty}/> }
         {fetchContractInventorySlot8.data? <CarouselNftSlot metadata={filterArray(8, fetchContractInventorySlot8.data)[0][0]} contractAddress={'MCPA contract'}  slotContractAddress={NftSlotContractAddresses[7]} slotObj={slot8Obj} contractName={fetchContractInventorySlot8.data[2]}  contractSymbol={fetchContractInventorySlot8.data[3]}    tokenId={fetchContractInventorySlot8.data[0]} thisStyle={style8}  slotIndex={8}  slotImageUrl={slot8ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot8Stock}  styleEmpty={style8Empty}/> : <CarouselNftSlot thisStyle={style8}  slotIndex={8}  styleEmpty={style8Empty}/> }
         {fetchContractInventorySlot9.data? <CarouselNftSlot metadata={filterArray(9, fetchContractInventorySlot9.data)[0][0]} contractAddress={'MCPL contract'}  slotContractAddress={NftSlotContractAddresses[8]} slotObj={slot9Obj} contractName={fetchContractInventorySlot9.data[2]}  contractSymbol={fetchContractInventorySlot9.data[3]}    tokenId={fetchContractInventorySlot9.data[0]} thisStyle={style9}  slotIndex={9}  slotImageUrl={slot9ImageUrl}  NftSlotOdds={NftSlotOdds} slotStock={slot9Stock}  styleEmpty={style9Empty}/> : <CarouselNftSlot thisStyle={style9}  slotIndex={9}  styleEmpty={style9Empty}/> }
         {fetchContractInventorySlot10.data? <CarouselNftSlot metadata={filterArray(10, fetchContractInventorySlot10.data)[0][0]} contractAddress={'MCPL contract'}  slotContractAddress={NftSlotContractAddresses[9]} slotObj={slot10Obj} contractName={fetchContractInventorySlot10.data[2]} contractSymbol={fetchContractInventorySlot10.data[3]} tokenId={fetchContractInventorySlot10.data[0]}thisStyle={style10} slotIndex={10} slotImageUrl={slot10ImageUrl} NftSlotOdds={NftSlotOdds} slotStock={slot10Stock} styleEmpty={style10Empty}/> : <CarouselNftSlot thisStyle={style10}  slotIndex={10}  styleEmpty={style10Empty}/>}
            
            

        </div>    
    </div>
  )
}

export default VendingCurrentSlots