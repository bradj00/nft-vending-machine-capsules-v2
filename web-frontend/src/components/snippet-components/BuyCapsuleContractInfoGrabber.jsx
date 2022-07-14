import React, { useEffect, useContext } from 'react'
import {CapsuleFactoryABI,CapsuleFactoryContractAddress, BuyCapsuleContractABI } from '../../ContractInfo/ContractInfo';
import {useNavigate, useLocation, Link } from 'react-router-dom'
import {useWeb3Contract, useMoralisWeb3Api, useMoralis, useChain } from 'react-moralis';
import { NftMoreInfoContext } from '../../App';

const BuyCapsuleContractInfoGrabber = () => {
  const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();
  const location = useLocation();
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const {MachineContractAddress, setMachineContractAddress} = useContext(NftMoreInfoContext)
  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
 //THE MAGIC SAUCE TO ENABLE WEB3
 useEffect(() => {
    if (!isWeb3Enabled) {
    // console.log('enabling web3...'); 
    enableWeb3();
    }
}, [web3]);

  const GetBuyCapsuleContractAddress = useWeb3Contract({
    abi: CapsuleFactoryABI,  
    contractAddress: CapsuleFactoryContractAddress,
    functionName: "BuyCapsulesByMachineAddress",
    params: {
        machineAddress: MachineContractAddress
    }
  });

  const getBuyCapsuleGetCapsuleInfo = useWeb3Contract({
    abi: BuyCapsuleContractABI,  
    contractAddress: BuyCapsuleContract,
    functionName: "GetCapsuleInfo",
  });



  useEffect(()=>{
    if (GetBuyCapsuleContractAddress.data){
        console.log('got Buy Capsule contract address: ',GetBuyCapsuleContractAddress.data);
        setBuyCapsuleContract(GetBuyCapsuleContractAddress.data);
    }
  },[GetBuyCapsuleContractAddress.data]);

  useEffect(()=>{
    if (MachineContractAddress && isWeb3Enabled && (MachineContractAddress != '/')){
        console.log('@@@@@@\tfetching BuyCapsuleContractAddress for MachineContractAddress: ',MachineContractAddress)
        GetBuyCapsuleContractAddress.runContractFunction({
            onError: (error) =>{
            console.log('123123123 big ERROR: ',error,CapsuleFactoryABI,CapsuleFactoryContractAddress,MachineContractAddress); 
        }

        });
    }
  },[MachineContractAddress, isWeb3Enabled]);
  useEffect(()=>{
    if (getBuyCapsuleGetCapsuleInfo.data){
        // console.log('got ULTIMATE STUFF BACK: ',getBuyCapsuleGetCapsuleInfo.data);
    }
  },[getBuyCapsuleGetCapsuleInfo.data]);

    useEffect(()=>{
        if (BuyCapsuleContract){
            // console.log('okalie dokalie neighborino! Here is our Buy Capsule contract to do something with: ',BuyCapsuleContract);
            getBuyCapsuleGetCapsuleInfo.runContractFunction({
                onError: (error) =>{
                console.log('44444 big ERROR: ',error); 
            }

            });

        }
    },[BuyCapsuleContract])


  return (
    <div>
        <></>
    </div>
  )
}

export default BuyCapsuleContractInfoGrabber