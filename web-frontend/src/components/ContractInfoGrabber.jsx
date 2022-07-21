import React, {useContext, useEffect, useState} from 'react';
import {WheelABI, contractAddressWheel, contractAddressChainLinkTokenABI} from '../ContractInfo/ContractInfo.jsx';
import VendingCurrentSlots from './VendingCurrentSlots';
import TreasureChestCount from './TreasureChestCount';
import Moralis, {useWeb3Contract, useMoralis, MoralisProvider, useERC20Balances} from "react-moralis";
import { OddsAndSlotAddys } from '../App.js'; 
import { NftMoreInfoContext } from '../App.js';
import {ethers} from 'ethers';


const ContractInfoGrabber = () => {
    const {NftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
    const {setNftSlotContractAddresses} = useContext(OddsAndSlotAddys);
    const {NftSlotOdds}    = useContext(OddsAndSlotAddys);
    const {setNftSlotOdds} = useContext(OddsAndSlotAddys);
    const {contractAddressChainLinkToken, setcontractAddressChainLinkToken} = useContext(NftMoreInfoContext);
    const {winningSlotNumber, setwinningSlotNumber} = useContext(NftMoreInfoContext);
    const {machineLinkBalance, setmachineLinkBalance} = useContext(NftMoreInfoContext);
    const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
    const {WheelInfo, setWheelInfo}     = useContext(NftMoreInfoContext);
    
    const {userErc20TokenBalance, setuserErc20TokenBalance} = useContext(NftMoreInfoContext);
    
    const {registeredFromOnChainBySlot, setregisteredFromOnChainBySlot} = useContext(NftMoreInfoContext);



    const {machineNameString, setmachineNameString} = useContext(NftMoreInfoContext);

    const {sceneTransition, setsceneTransition} = useContext(NftMoreInfoContext);

    const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);

    const {setconfettiZIndex, setrateOfRotation, setconfettiDisplay, } = useContext(NftMoreInfoContext);

    const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();
  



    const getRegisteredFromOnChainBySlot1 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 0
      }
    });
    const getRegisteredFromOnChainBySlot2 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 1
      }
    });
    const getRegisteredFromOnChainBySlot3 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 2
      }
    });
    const getRegisteredFromOnChainBySlot4 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 3
      }
    });
    const getRegisteredFromOnChainBySlot5 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 4
      }
    });
    const getRegisteredFromOnChainBySlot6 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 5
      }
    });
    const getRegisteredFromOnChainBySlot7 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 6
      }
    });
    const getRegisteredFromOnChainBySlot8 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 7
      }
    });
    const getRegisteredFromOnChainBySlot9 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 8
      }
    });
    const getRegisteredFromOnChainBySlot10 = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
      functionName: "getAllRegisteredForSlot",
      params:{
        slotIndex: 9
      }
    });




















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
    const getChainLinkContractBalance = useWeb3Contract({
      abi: contractAddressChainLinkTokenABI,
      contractAddress: contractAddressChainLinkToken,
      functionName: "balanceOf",
      params:{
        _owner: contractAddressWheel
      }
    });
  
    const getWheelInfo = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressWheel,
      functionName: "getWheelInfo",
    });
  
    //fetchERC20Balances, data, isLoading, isFetching, error
    const getAllERC20TokensForAccount = useERC20Balances({
      
    });
  
    useEffect(()=>{
      if (getAllERC20TokensForAccount.data){
      if (getAllERC20TokensForAccount.data.length > 0){
        // console.log('\t\t\t\t************* USER ERC20 BALANCES: ',getAllERC20TokensForAccount.data)
        setuserErc20TokenBalance(getAllERC20TokensForAccount.data);
      }
      }
    },[getAllERC20TokensForAccount.data]);

    


    useEffect(()=>{
      if (isWeb3Enabled && contractAddressWheel && (contractAddressWheel != '/')){
          getAllRegisteredTokensInAllSlots(); // get our registered tokens for all slots
        // setTimeout(function(){
            // console.log('getting crate slot settings for contract: ',contractAddressWheel);
            // getAllCrateSlotAddresses.runContractFunction();


            
            // getAllSlotOdds.runContractFunction();
            checkEvents();

            // console.log('***** getting LINK contract balance..');
            getChainLinkContractBalance.runContractFunction();

            getWheelInfo.runContractFunction({
              onError: (error) =>{
                console.log('getWheelInfo ERROR: ',error);
                setContractErrorMessage(error.error.message);
              },
            });

            getAllERC20TokensForAccount.fetchERC20Balances({
              onError: (error) =>{
                console.log('00000 big ERROR: ',error);
                setContractErrorMessage(error.error.message);
              },
            });

        // },400);
      }
    },[isWeb3Enabled, contractAddressWheel, WheelABI])


    useEffect(()=>{
      if (getWheelInfo.data){
        console.log('got all 3 back: ',getWheelInfo.data);
        setWheelInfo(getWheelInfo.data);
        setmachineNameString(getWheelInfo.data[2]);

        // setNftSlotContractAddresses([]);
        for (let i = 0; i < getWheelInfo.data[1].length; i++){
            // console.log(i, getAllCrateSlotAddresses.data[i],'  RRRRRR');
            setNftSlotContractAddresses(getWheelInfo.data[1]); 
        }

        setNftSlotOdds([]);
        for (let i = 0; i < getWheelInfo.data[0].length; i++){
            let parsedOdds = parseInt(getWheelInfo.data[0][i]);
            parsedOdds = (parsedOdds / 1000000)*100;
            setNftSlotOdds(NftSlotOdds => [...NftSlotOdds, parsedOdds]); 
        }



      }
    },[getWheelInfo.data]);

    useEffect(()=>{
      if (getChainLinkContractBalance.data){
        let converted = parseInt(getChainLinkContractBalance.data._hex, 16) / (10**18) ;
        // console.log('\LINK BALANCE: ', (converted) );
        setmachineLinkBalance(converted);
      }
    },[getChainLinkContractBalance.data]);

    useEffect(() => {
        if (getAllSlotOdds.data != null){
            // console.log('contract addresses: ',getAllCrateSlotAddresses.data);
            setNftSlotOdds([]);
            for (let i = 0; i < getAllSlotOdds.data.length; i++){
                let parsedOdds = parseInt(getAllSlotOdds.data[i]);
                parsedOdds = (parsedOdds / 1000000)*100;
                // console.log(getAllSlotOdds.data[i]);
                setNftSlotOdds(NftSlotOdds => [...NftSlotOdds, parsedOdds]); 
            }
        }
    }, [getAllSlotOdds.data]);

    useEffect(() => {
        if (getAllCrateSlotAddresses.data != null){
            // console.log('contract addresses: ',getAllCrateSlotAddresses.data);
            // setNftSlotContractAddresses([]);
            // for (let i = 0; i < getAllCrateSlotAddresses.data.length; i++){
            //     // console.log(getAllCrateSlotAddresses.data[i]);
            //     setNftSlotContractAddresses(NftSlotContractAddresses => [...NftSlotContractAddresses, getAllCrateSlotAddresses.data[i]]); 
            // }
        }
    }, [getAllCrateSlotAddresses.data]);


    const checkEvents = async() => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      let libcContract = new ethers.Contract(contractAddressWheel, WheelABI, provider);

      libcContract.on("NewRandomItem", (requestId, vrfRandomNumber, nftTokenId, slotWinner) => {
        console.log('NewRandomItem: ', requestId, parseInt(vrfRandomNumber._hex, 16), parseInt(nftTokenId._hex, 16), parseInt(slotWinner._hex, 16) );
        //look up requestId
        //match with my logged in address
        //if it's mine, play revealAnimation()
        setwinningSlotNumber(parseInt(slotWinner._hex, 16));
        
        CapsuleOpenedAnimations();
      });

    }

    function getAllRegisteredTokensInAllSlots(){
        setTimeout(()=>{ getRegisteredFromOnChainBySlot1.runContractFunction();  },1 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot2.runContractFunction();  },400 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot3.runContractFunction();  },800 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot4.runContractFunction();  },1200 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot5.runContractFunction();  },1600 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot6.runContractFunction();  },2000 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot7.runContractFunction();  },2400 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot8.runContractFunction();  },2800 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot9.runContractFunction();  },3200 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot10.runContractFunction(); },3600 );
      
    }

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot1.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [1]: getRegisteredFromOnChainBySlot1.data
        }));

      }
    },[getRegisteredFromOnChainBySlot1.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot2.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [2]: getRegisteredFromOnChainBySlot2.data
        }));

      }
    },[getRegisteredFromOnChainBySlot2.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot3.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [3]: getRegisteredFromOnChainBySlot3.data
        }));

      }
    },[getRegisteredFromOnChainBySlot3.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot4.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [4]: getRegisteredFromOnChainBySlot4.data
        }));

      }
    },[getRegisteredFromOnChainBySlot4.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot5.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [5]: getRegisteredFromOnChainBySlot5.data
        }));

      }
    },[getRegisteredFromOnChainBySlot5.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot6.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [6]: getRegisteredFromOnChainBySlot6.data
        }));

      }
    },[getRegisteredFromOnChainBySlot6.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot7.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [7]: getRegisteredFromOnChainBySlot7.data
        }));

      }
    },[getRegisteredFromOnChainBySlot7.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot8.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [8]: getRegisteredFromOnChainBySlot8.data
        }));

      }
    },[getRegisteredFromOnChainBySlot8.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot9.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [9]: getRegisteredFromOnChainBySlot9.data
        }));

      }
    },[getRegisteredFromOnChainBySlot9.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot10.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [10]: getRegisteredFromOnChainBySlot10.data
        }));

      }
    },[getRegisteredFromOnChainBySlot10.data]);




    useEffect(()=>{
      if (registeredFromOnChainBySlot){
        console.log('Registered Token Ids by front-end slot number',registeredFromOnChainBySlot)
      }
    },[registeredFromOnChainBySlot])














    function CapsuleOpenedAnimations(){
      
      setsceneTransition('fadeOut');
      console.log('fading out...');
      setconfettiDisplay(true);
      setconfettiZIndex("zIndexFront");
      setTimeout(function(){
        setsceneTransition('fadeIn');
        setconfettiDisplay(false);
        setconfettiZIndex("zIndexNormal");
        setrateOfRotation(30);
      },10000);

  }

    return (
    <></>
  )
}

export default ContractInfoGrabber