import React, {useContext, useEffect, useState} from 'react';
import {WheelABI, contractAddressWheel, contractAddressChainLinkTokenABI} from '../ContractInfo/ContractInfo.jsx';
import VendingCurrentSlots from './VendingCurrentSlots';
import TreasureChestCount from './TreasureChestCount';
import Moralis, {useWeb3Contract, useMoralis, MoralisProvider, useERC20Balances, useMoralisWeb3Api} from "react-moralis";
import { OddsAndSlotAddys } from '../App.js'; 
import { NftMoreInfoContext } from '../App.js';
import {ethers} from 'ethers';


const ContractInfoGrabber = () => {
    
    const {account, isInitialized} = useMoralis();
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
    const {NftSlotOdds, setNftSlotOdds}    = useContext(OddsAndSlotAddys);

    const {contractAddressChainLinkToken, setcontractAddressChainLinkToken} = useContext(NftMoreInfoContext);
    const {winningSlotNumber, setwinningSlotNumber} = useContext(NftMoreInfoContext);
    const {machineLinkBalance, setmachineLinkBalance} = useContext(NftMoreInfoContext);
    const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
    const {WheelInfo, setWheelInfo}     = useContext(NftMoreInfoContext);
    const {MachineContractAddress, setMachineContractAddress,}    = useContext(NftMoreInfoContext);
    const {userErc20TokenBalance, setuserErc20TokenBalance} = useContext(NftMoreInfoContext);
    const {SlotAccountUnregisteredNFTs, setSlotAccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {loadSlotsCounter, setloadSlotsCounter} = useContext(NftMoreInfoContext);
    const [loadedAddressTokens, setloadedAddressTokens] = useState({});

    
    const {ReducedNftSlotContractAddys, setReducedNftSlotContractAddys} = useContext(NftMoreInfoContext);
    const {registeredFromOnChainBySlot, setregisteredFromOnChainBySlot} = useContext(NftMoreInfoContext);
    const {registeredFromOnChainByAddress, setregisteredFromOnChainByAddress} = useContext(NftMoreInfoContext);

    const {refreshRegisteredSlotData, setrefreshRegisteredSlotData} = useContext(NftMoreInfoContext);


    const {WheelTokensHeldByAccount, setWheelTokensHeldByAccount} = useContext(NftMoreInfoContext);
    const {WheelTokensHeldByAddress, setWheelTokensHeldByAddress} = useContext(NftMoreInfoContext);
    const {WheelSlotWinnerOffsets, setWheelSlotWinnerOffsets} = useContext(NftMoreInfoContext);


    const Web3Api = useMoralisWeb3Api();


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


//if wallet address == wheel owner...
//pre-load the filtered list of unregistered tokens in wheel's possession for admin panel display
//--------------------------------------------------
//--------------------------------------------------




useEffect(()=>{                                                                                                                               //slot10 to ensure we are waiting for complete list of registereds..
  if ((loadSlotsCounter <=9)&&(NftSlotOdds[loadSlotsCounter] != 0) && (isWeb3Enabled) && (NftSlotContractAddresses[0]!='0x0000000000000000000000000000000000000000')&&(getRegisteredFromOnChainBySlot10.data)){
    console.log('LOADING SLOT: ',loadSlotsCounter+1,'  ',NftSlotContractAddresses[loadSlotsCounter])
    loadNftsForSlot(loadSlotsCounter+1, NftSlotContractAddresses[loadSlotsCounter]) //slotIndex, slotAddress
  }
},[loadSlotsCounter, isWeb3Enabled, NftSlotContractAddresses, getRegisteredFromOnChainBySlot10.data])


async function loadNftsForSlot(slotIndex, slotAddress){
  // console.log('attempting token load for slot: ',slotIndex, slotAddress)
  let rinkebySlotUnregisteredTokens;
  // console.log('~~ ',loadedAddressTokens[0]);
  
  if (slotAddress in loadedAddressTokens){ //if we have already loaded tokens for a key address 
    // console.log('found existing cached data for ',slotAddress, loadedAddressTokens[slotAddress])
    rinkebySlotUnregisteredTokens = loadedAddressTokens[slotAddress];
    
    setloadedAddressTokens(loadedAddressTokens => ({
      ...loadedAddressTokens,
      latestSlotLoaded: slotIndex
    }));
    
  }
  else { 
    console.log('bawk bawk need to check it manually ',slotAddress,"__", loadedAddressTokens)
    rinkebySlotUnregisteredTokens = await Web3Api.account.getNFTsForContract(
      { 
        chain: "rinkeby",
        address: MachineContractAddress&&MachineContractAddress!='0x0000000000000000000000000000000000000000'? MachineContractAddress: '0x0000000000000000000000000000000000000000',
        token_address: NftSlotContractAddresses[slotIndex-1],
      }
      );
      // console.log('rinkebySlotUnregisteredTokens: ',rinkebySlotUnregisteredTokens);
      setloadedAddressTokens(loadedAddressTokens => ({
        ...loadedAddressTokens,
        [slotAddress]:rinkebySlotUnregisteredTokens,
        latestSlotLoaded: slotIndex
      }));
      
    } 
    // const final = rinkebySlotUnregisteredTokens.result;


    const final = rinkebySlotUnregisteredTokens.result.filter(item => {
      if (registeredFromOnChainByAddress[ NftSlotContractAddresses[slotIndex-1] ]){
        if (registeredFromOnChainByAddress[ NftSlotContractAddresses[slotIndex-1] ].filter(e => e == parseInt(item.token_id)).length > 0) {
          return false;
        }
        else return true;
      }else return true;
    }) 
    
    
    setSlotAccountUnregisteredNFTs(SlotAccountUnregisteredNFTs => ({
      ...SlotAccountUnregisteredNFTs,
      [slotIndex]: final
    }));
    setTimeout(()=>{ setloadSlotsCounter(loadSlotsCounter+1); },100);
    
    
  }





  useEffect(()=>{
    if (registeredFromOnChainBySlot){
      // console.log('registeredFromOnChainByAddress: ',registeredFromOnChainByAddress,registeredFromOnChainBySlot);

      //every time this is updated, trigger a delayed timeout that if succeeds will filter out duplicates from this list
      //WALRUS


    }
  },[registeredFromOnChainBySlot]);
  
  useEffect(()=>{
    if (registeredFromOnChainByAddress){
      for (var key in registeredFromOnChainByAddress){
        let tempArray = Array.from(new Set(registeredFromOnChainByAddress[key]));
        // console.log('[ '+key+' ] registeredFromOnChainByAddress: ',tempArray);
      }
    }

  },[registeredFromOnChainByAddress]);
  
  
 
  //--------------------------------------------------
  //--------------------------------------------------
  
  
  
  
  
  


  
      const getSlotWinnerOffsets = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel,
        functionName: "getslotWinnerOffsets",
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
            
            
            getSlotWinnerOffsets.runContractFunction({
              onError: (error) =>{
                console.log('getSlotWinnerOffsets ERROR: ',error);
                setContractErrorMessage(error.error.message);
              },
            });




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
        console.log('got all 3 back: ',getWheelInfo.data); //addresses, slot percentages, wheel title, 
        setWheelInfo(getWheelInfo.data);

        // WheelInfo[4][x] //slot winnerOffset array

        setmachineNameString(getWheelInfo.data[2]);

        // setNftSlotContractAddresses([]);
        // for (let i = 0; i < getWheelInfo.data[1].length; i++){
            // console.log(i, getAllCrateSlotAddresses.data[i],'  RRRRRR');
            setNftSlotContractAddresses([...getWheelInfo.data[1]]); 
        // }

        setNftSlotOdds([]);
        for (let i = 0; i < getWheelInfo.data[0].length; i++){
            let parsedOdds = parseInt(getWheelInfo.data[0][i]);
            parsedOdds = (parsedOdds / 1000000)*100;
            setNftSlotOdds(NftSlotOdds => [...NftSlotOdds, parsedOdds]); 
        }



      }
    },[getWheelInfo.data]);

   



    // useEffect(()=>{

    // },[fetchSlotContractAddressName.data, fetchSlotContractAddressSymbol]);

    useEffect(()=>{
      if (WheelSlotWinnerOffsets){
        //look up owned tokens by slot contract_address
        //determine token ID and address, place token Object in an array to be used by the front carousel
      }
    },[WheelSlotWinnerOffsets]);

    useEffect(()=>{
      if (getSlotWinnerOffsets.data){
        console.log('all slotWinner offsets: ',getSlotWinnerOffsets.data )
        let temp = [];
        for (let q = 0; q < getSlotWinnerOffsets.data.length; q++){
          temp.push(parseInt(getSlotWinnerOffsets.data[q]._hex,16))
        }

        setWheelSlotWinnerOffsets(temp);
      }
    },[getSlotWinnerOffsets.data]);
  

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

    useEffect(()=>{
      if (refreshRegisteredSlotData){
        setrefreshRegisteredSlotData(false);
        getAllRegisteredTokensInAllSlots();
        
        
        getSlotWinnerOffsets.runContractFunction({
          onError: (error) =>{
            console.log('getSlotWinnerOffsets ERROR: ',error);
            setContractErrorMessage(error.error.message);
          },
        });

      }
    },[refreshRegisteredSlotData]);

    function getAllRegisteredTokensInAllSlots(){
        setTimeout(()=>{ getRegisteredFromOnChainBySlot1.runContractFunction();  },200 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot2.runContractFunction();  },400 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot3.runContractFunction();  },600 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot4.runContractFunction();  },800 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot5.runContractFunction();  },1000 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot6.runContractFunction();  },1200 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot7.runContractFunction();  },1400 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot8.runContractFunction();  },1600 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot9.runContractFunction();  },1800 );
        setTimeout(()=>{ getRegisteredFromOnChainBySlot10.runContractFunction(); },2000 );
      
    }

    // async function preLoadSlotContractTokenInfo(){
    //   //
    // }


    useEffect(()=>{
      if (WheelTokensHeldByAccount){
        console.log('WheelTokensHeldByAccount: ',WheelTokensHeldByAccount);
      }
    },[WheelTokensHeldByAccount])

    useEffect(()=>{
      if (ReducedNftSlotContractAddys){
        Object.keys(ReducedNftSlotContractAddys).map((address)=>{
          getAdminOwnedTokensFromSlotAddys(ReducedNftSlotContractAddys[address]);
        })
      }
    },[ReducedNftSlotContractAddys])
    
    async function getAdminOwnedTokensFromSlotAddys(tokenAddress) {
      if (!WheelTokensHeldByAddress[tokenAddress]){
        console.log('looking up WheelTokensHeldByAddress: ',tokenAddress, ReducedNftSlotContractAddys)
        const options = {
          chain: "rinkeby",
          address: account? account: '0x0000000000000000000000000000000000000000',
          token_address: tokenAddress,
        };
    
        const rinkebySlot1AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
        // console.log('!!!!!!!!! 1\t',rinkebySlot1AccountUnregisteredNFTs);
        let tempArray = [];
        rinkebySlot1AccountUnregisteredNFTs.result.map((item, index)=>{
          if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
          tempArray.push(item);
          tempArray = Array.from(new Set(tempArray));
        });
        setWheelTokensHeldByAccount(WheelTokensHeldByAccount => ({
          ...WheelTokensHeldByAccount,
          [tokenAddress]: tempArray
        }));


      }else {
        console.log('already have held tokens for : ',tokenAddress,'  : ',WheelTokensHeldByAddress[tokenAddress])
      }
    }
    

    useEffect(()=>{
      if (NftSlotContractAddresses && MachineContractAddress){
        let tempArray = Array.from(new Set(NftSlotContractAddresses));
        if (tempArray[0]!='0x0000000000000000000000000000000000000000'){
          setReducedNftSlotContractAddys(tempArray);
          console.log(NftSlotContractAddresses.length,' filtered to: ',tempArray.length,' :',tempArray);
          
          for (let i = 0; i < tempArray.length; i++){
            // if (tempArray[i] == '0x0000000000000000000000000000000000000000') { continue; }
            const fetchUniqueSlotData = async ()=>{
              const options = {
                chain: "rinkeby",
                address: MachineContractAddress&&MachineContractAddress!='0x0000000000000000000000000000000000000000'? MachineContractAddress: '0x0000000000000000000000000000000000000000',
                token_address: tempArray[i],
              };
              const wheelAddressTokensHeldForContract = await Web3Api.account.getNFTsForContract(options);
              console.log(tempArray[i],' ayy: ',wheelAddressTokensHeldForContract);

              setWheelTokensHeldByAddress(WheelTokensHeldByAddress => ({
                ...WheelTokensHeldByAddress,
                [tempArray[i]]: wheelAddressTokensHeldForContract
              }));

            }
            fetchUniqueSlotData();
          }
        }
      }
    },[NftSlotContractAddresses, MachineContractAddress]);

//  how I want my registeredFromOnChainByAddress object to look...
// {0x65bAA849d1A823009ffc2a45CB0f1e3220392d93: [2002,2016,2040,2091] }
//walrus

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot1.data){
 
        
        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [1]: getRegisteredFromOnChainBySlot1.data
        }));
        
        const temp = getRegisteredFromOnChainBySlot1.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[0]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[0] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[0] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[0] ]:  [...temp]
        }) )
      }
    },[getRegisteredFromOnChainBySlot1.data]); 



    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot2.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [2]: getRegisteredFromOnChainBySlot2.data
        }));
        const temp = getRegisteredFromOnChainBySlot2.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[1]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[1] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[1] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[1] ]:  [...temp]
        }) )
      }
    },[getRegisteredFromOnChainBySlot2.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot3.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [3]: getRegisteredFromOnChainBySlot3.data
        }));

        const temp = getRegisteredFromOnChainBySlot3.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[2]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[2] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[2] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[2] ]:  [...temp]
        }) )

      }
    },[getRegisteredFromOnChainBySlot3.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot4.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [4]: getRegisteredFromOnChainBySlot4.data
        }));
        const temp = getRegisteredFromOnChainBySlot4.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[3]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[3] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[3] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[3] ]:  [...temp]
        }) )
      }
    },[getRegisteredFromOnChainBySlot4.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot5.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [5]: getRegisteredFromOnChainBySlot5.data
        }));
        const temp = getRegisteredFromOnChainBySlot5.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[4]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[4] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[4] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[4] ]:  [...temp]
        }) )

      }
    },[getRegisteredFromOnChainBySlot5.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot6.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [6]: getRegisteredFromOnChainBySlot6.data
        }));
        const temp = getRegisteredFromOnChainBySlot6.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[5]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[5] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[5] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[5] ]:  [...temp]
        }) )
      }
    },[getRegisteredFromOnChainBySlot6.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot7.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [7]: getRegisteredFromOnChainBySlot7.data
        }));
        const temp = getRegisteredFromOnChainBySlot7.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[6]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[6] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[6] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[6] ]:  [...temp]
        }) )

      }
    },[getRegisteredFromOnChainBySlot7.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot8.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [8]: getRegisteredFromOnChainBySlot8.data
        }));
        const temp = getRegisteredFromOnChainBySlot8.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[7]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[7] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[7] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[7] ]:  [...temp]
        }) )
      }
    },[getRegisteredFromOnChainBySlot8.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot9.data){

        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [9]: getRegisteredFromOnChainBySlot9.data
        }));
        const temp = getRegisteredFromOnChainBySlot9.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[8]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[8] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[8] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[8] ]:  [...temp]
        }) )

      }
    },[getRegisteredFromOnChainBySlot9.data]);

    useEffect(()=>{
      if (getRegisteredFromOnChainBySlot10.data){
        
        setregisteredFromOnChainBySlot(getRegisteredFromOnChainBySlot => ({
          ...getRegisteredFromOnChainBySlot,
          [10]: getRegisteredFromOnChainBySlot10.data
        }));
        const temp = getRegisteredFromOnChainBySlot10.data.map((item)=>{
          return parseInt(item._hex, 16);
        })

        registeredFromOnChainByAddress[ NftSlotContractAddresses[9]]?
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
             [ NftSlotContractAddresses[9] ]: [...registeredFromOnChainByAddress[ NftSlotContractAddresses[9] ], ...temp
            
            ]  
        }) )
          :
        setregisteredFromOnChainByAddress(registeredFromOnChainByAddress => ({
          ...registeredFromOnChainByAddress,
          [ NftSlotContractAddresses[9] ]:  [...temp]
        }) )

        setloadSlotsCounter(0); //testing here to refresh data on token registration 
      }
    },[getRegisteredFromOnChainBySlot10.data]);




    // useEffect(()=>{
    //   if (registeredFromOnChainBySlot){
    //     console.log('Registered Token Ids by front-end slot number',registeredFromOnChainBySlot)
    //   }
    // },[registeredFromOnChainBySlot])














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