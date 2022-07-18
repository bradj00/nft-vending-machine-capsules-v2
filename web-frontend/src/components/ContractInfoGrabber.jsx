import React, {useContext, useEffect, useState} from 'react';
import {WheelABI, contractAddressTreasureChest, contractAddressChainLinkTokenABI} from '../ContractInfo/ContractInfo.jsx';
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
    
    const {machineNameString, setmachineNameString} = useContext(NftMoreInfoContext);

    const {sceneTransition, setsceneTransition} = useContext(NftMoreInfoContext);

    const {contractAddressTreasureChest, setcontractAddressTreasureChest} = useContext(NftMoreInfoContext);

    const {setconfettiZIndex, setrateOfRotation, setconfettiDisplay, } = useContext(NftMoreInfoContext);

    const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();
  
    const getAllCrateSlotAddresses = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllAddys",
    });
    const getAllSlotOdds = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
      functionName: "getAllOdds",
    });
    const getChainLinkContractBalance = useWeb3Contract({
      abi: contractAddressChainLinkTokenABI,
      contractAddress: contractAddressChainLinkToken,
      functionName: "balanceOf",
      params:{
        _owner: contractAddressTreasureChest
      }
    });
  
    const getWheelInfo = useWeb3Contract({
      abi: WheelABI,
      contractAddress: contractAddressTreasureChest,
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
      if (isWeb3Enabled && contractAddressTreasureChest && (contractAddressTreasureChest != '/')){
        // setTimeout(function(){
            // console.log('getting crate slot settings for contract: ',contractAddressTreasureChest);
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
    },[isWeb3Enabled, contractAddressTreasureChest, WheelABI])


    useEffect(()=>{
      if (getWheelInfo.data){
        console.log('got all 3 back: ',getWheelInfo.data);
        setWheelInfo(getWheelInfo.data);
        setmachineNameString(getWheelInfo.data[2]);

        setNftSlotContractAddresses([]);
        for (let i = 0; i < getWheelInfo.data[1].length; i++){
            // console.log(getAllCrateSlotAddresses.data[i]);
            setNftSlotContractAddresses(NftSlotContractAddresses => [...NftSlotContractAddresses, getWheelInfo.data[1][i]]); 
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
      let libcContract = new ethers.Contract(contractAddressTreasureChest, WheelABI, provider);

      libcContract.on("NewRandomItem", (requestId, vrfRandomNumber, nftTokenId, slotWinner) => {
        console.log('NewRandomItem: ', requestId, parseInt(vrfRandomNumber._hex, 16), parseInt(nftTokenId._hex, 16), parseInt(slotWinner._hex, 16) );
        //look up requestId
        //match with my logged in address
        //if it's mine, play revealAnimation()
        setwinningSlotNumber(parseInt(slotWinner._hex, 16));
        
        CapsuleOpenedAnimations();
      });

    }

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