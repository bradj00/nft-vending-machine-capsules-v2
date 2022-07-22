import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import '../styles/grid.css';
import {useERC20Balances, useWeb3Contract, useMoralisWeb3Api, useMoralis,useNFTBalances } from 'react-moralis';
import { useEffect } from 'react';
import {WheelABI} from '../ContractInfo/ContractInfo.jsx';
import { OddsAndSlotAddys } from '../App';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    useQuery,
    useQueryClient,
    useMutation,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import MCPCitizenStatBar from './snippet-components/MCPCitizenStatBar';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Cancel from '@mui/icons-material/Cancel';
import MCPCitizenFilterSlider from './snippet-components/MCPCitizenFilterSlider';
import MCPCitizenFilterSliderGen from './snippet-components/MCPCitizenFilterSliderGen';
import UnregisteredNftSlot from './Admin Panels/UnregisteredPanel/UnregisteredNftSlot';
import UnregisteredInventorySlotLoader from './Admin Panels/UnregisteredPanel/UnregisteredInventorySlotLoader';

const RegisterInventory = () => {
  const Web3Api = useMoralisWeb3Api();
  const {account, isInitialized} = useMoralis();
  const queryClient = useQueryClient()
  const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
  const {activeSlotCounter, setActiveSlotCounter}    = useContext(NftMoreInfoContext);


  const [registerTokensInfoButton, setregisterTokensInfoButton] = useState('Register Tokens');

  const {MachineContractAddress, setMachineContractAddress,}    = useContext(NftMoreInfoContext);
  
  const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque} = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter} = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}   = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}             = useContext(NftMoreInfoContext);
  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);

  const {SlotAccountUnregisteredNFTs, setSlotAccountUnregisteredNFTs} = useContext(NftMoreInfoContext);

  const {refreshRegisteredSlotData, setrefreshRegisteredSlotData} = useContext(NftMoreInfoContext);

  const {uniqueRegistrationSelectionIds, setuniqueRegistrationSelectionIds}    = useContext(NftMoreInfoContext);

  const {Slot1AccountUnregisteredNFTs, setSlot1AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot2AccountUnregisteredNFTs, setSlot2AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot3AccountUnregisteredNFTs, setSlot3AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot4AccountUnregisteredNFTs, setSlot4AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot5AccountUnregisteredNFTs, setSlot5AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot6AccountUnregisteredNFTs, setSlot6AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot7AccountUnregisteredNFTs, setSlot7AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot8AccountUnregisteredNFTs, setSlot8AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot9AccountUnregisteredNFTs, setSlot9AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {Slot10AccountUnregisteredNFTs, setSlot10AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  
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
  
  const {registeredFromOnChainBySlot, setregisteredFromOnChainBySlot}    = useContext(NftMoreInfoContext);
  
  
  const {displayMetaData, setdisplayMetaData}    = useContext(NftMoreInfoContext);

    
  const [isLoaded1, setisLoaded1]   = useState(false);
  const [isLoaded2, setisLoaded2]   = useState(false);
  const [isLoaded3, setisLoaded3]   = useState(false);
  const [isLoaded4, setisLoaded4]   = useState(false);
  const [isLoaded5, setisLoaded5]   = useState(false);
  const [isLoaded6, setisLoaded6]   = useState(false);
  const [isLoaded7, setisLoaded7]   = useState(false);
  const [isLoaded8, setisLoaded8]   = useState(false);
  const [isLoaded9, setisLoaded9]   = useState(false);
  const [isLoaded10, setisLoaded10] = useState(false);


  const [ImageArray1, setImageArray1] = useState([]);
  const [ImageArray2, setImageArray2] = useState([]);
  const [ImageArray3, setImageArray3] = useState([]);
  const [ImageArray4, setImageArray4] = useState([]);
  const [ImageArray5, setImageArray5] = useState([]);
  const [ImageArray6, setImageArray6] = useState([]);
  const [ImageArray7, setImageArray7] = useState([]);
  const [ImageArray8, setImageArray8] = useState([]);
  const [ImageArray9, setImageArray9] = useState([]);
  const [ImageArray10, setImageArray10] = useState([]);

  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);
  
  const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
  
  const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
  const {clickedSlotObj, setclickedSlotObj} = useContext(NftMoreInfoContext);

  const [selectedIndexArr, setselectedIndexArr] = useState({});
  const [selectedIndexArrActiveCount, setselectedIndexArrActiveCount] = useState(0);

  const [ImgArray, setImgArray] = useState([]);
  const [tokenInfoArr, settokenInfoArr] = useState([]);

  const [selectedSlotContractAddress, setselectedSlotContractAddress] = useState(0);
  
  const [TokenAddressToDepositToContract, setTokenAddressToDepositToContract] = useState();
  const [TokenIdToDepositToContract, setTokenIdToDepositToContract]           = useState();
  
  const {UnRegisteredInventoryColor, setUnRegisteredInventoryColor} = useContext(NftMoreInfoContext);
  const {RegisteredInventoryColor,   setRegisteredInventoryColor  } = useContext(NftMoreInfoContext);

  const [renderImages, setrenderImages] = useState(false);

  const [thecontractSlotNFTs, setcontractSlotNFTs] = useState([]);




  const [displayedItems, setdisplayedItems] = useState({});


  const {TotalRegisterTokenCount, setTotalRegisterTokenCount} = useContext(NftMoreInfoContext);


  const [mcpStatGTLT, setmcpStatGTLT] = useState(true);
  const [displayFilterSlot1, setdisplayFilterSlot1] = useState(false);
  const [displayFilterSlot2, setdisplayFilterSlot2] = useState(false);
  const [displayFilterSlot3, setdisplayFilterSlot3] = useState(false);
  const [displayFilterSlot4, setdisplayFilterSlot4] = useState(false);
  const [displayFilterSlot5, setdisplayFilterSlot5] = useState(false);
  const [displayFilterSlot6, setdisplayFilterSlot6] = useState(false);
  const [displayFilterSlot7, setdisplayFilterSlot7] = useState(false);
  const [displayFilterSlot8, setdisplayFilterSlot8] = useState(false);
  const [displayFilterSlot9, setdisplayFilterSlot9] = useState(false);
  const [displayFilterSlot10, setdisplayFilterSlot10] = useState(false);


  const [AllSlotsSelectedArr, setAllSlotsSelectedArr] = useState([]);


  const {mcpcIfilterSlot1, setmcpcIfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcSfilterSlot1, setmcpcSfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcCfilterSlot1, setmcpcCfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcAfilterSlot1, setmcpcAfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcLfilterSlot1, setmcpcLfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcEfilterSlot1, setmcpcEfilterSlot1} = useContext(NftMoreInfoContext);
  const {mcpcGenfilterSlot1, setmcpcGenfilterSlot1} = useContext(NftMoreInfoContext);


  const [slot1MaxLoad, setslot1MaxLoad] = useState(3);
  const [slot2MaxLoad, setslot2MaxLoad] = useState(3);
  const [slot3MaxLoad, setslot3MaxLoad] = useState(3);
  const [slot4MaxLoad, setslot4MaxLoad] = useState(3);
  const [slot5MaxLoad, setslot5MaxLoad] = useState(3);
  const [slot6MaxLoad, setslot6MaxLoad] = useState(3);
  const [slot7MaxLoad, setslot7MaxLoad] = useState(3);
  const [slot8MaxLoad, setslot8MaxLoad] = useState(3);
  const [slot9MaxLoad, setslot9MaxLoad] = useState(3);
  const [slot10MaxLoad, setslot10MaxLoad] = useState(3);


  const [Slot1SelectedArr, setSlot1SelectedArr] = useState([]);
  const [Slot2SelectedArr, setSlot2SelectedArr] = useState([]);
  const [Slot3SelectedArr, setSlot3SelectedArr] = useState([]);
  const [Slot4SelectedArr, setSlot4SelectedArr] = useState([]);
  const [Slot5SelectedArr, setSlot5SelectedArr] = useState([]);
  const [Slot6SelectedArr, setSlot6SelectedArr] = useState([]);
  const [Slot7SelectedArr, setSlot7SelectedArr] = useState([]);
  const [Slot8SelectedArr, setSlot8SelectedArr] = useState([]);
  const [Slot9SelectedArr, setSlot9SelectedArr] = useState([]);
  const [Slot10SelectedArr, setSlot10SelectedArr] = useState([]);

  const {TimerOuter, setTimerOuter} = useContext(NftMoreInfoContext);

  const {Slot1showMenuUnregistered, setSlot1showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot2showMenuUnregistered, setSlot2showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot3showMenuUnregistered, setSlot3showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot4showMenuUnregistered, setSlot4showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot5showMenuUnregistered, setSlot5showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot6showMenuUnregistered, setSlot6showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot7showMenuUnregistered, setSlot7showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot8showMenuUnregistered, setSlot8showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot9showMenuUnregistered, setSlot9showMenuUnregistered} = useContext(NftMoreInfoContext);
  const {Slot10showMenuUnregistered, setSlot10showMenuUnregistered} = useContext(NftMoreInfoContext);
  
  const {ToolTipTextSlot1, setToolTipTextSlot1} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot2, setToolTipTextSlot2} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot3, setToolTipTextSlot3} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot4, setToolTipTextSlot4} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot5, setToolTipTextSlot5} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot6, setToolTipTextSlot6} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot7, setToolTipTextSlot7} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot8, setToolTipTextSlot8} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot9, setToolTipTextSlot9} = useContext(NftMoreInfoContext);
  const {ToolTipTextSlot10, setToolTipTextSlot10} = useContext(NftMoreInfoContext);

  //get registered for slot directly from web3 call first..

  const {getRegisteredFromOnChainBySlot, setgetRegisteredFromOnChainBySlot} = useContext(NftMoreInfoContext);

  
  // const getRegisteredFromOnChainBySlot1 = useWeb3Contract({
  //   abi: WheelABI,
  //   contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
  //   functionName: "getAllRegisteredForSlot",
  //   params:{
  //     slotIndex: 0
  //   }
  // });

  // useEffect(()=>{
  //   if (getRegisteredFromOnChainBySlot1.data){
  //     // console.log('slot 1 tokens registered in contract in any slot',getRegisteredFromOnChainBySlot1.data[0]);
  //   }
  // },[getRegisteredFromOnChainBySlot1.data])
  
  useEffect(()=>{ 
    if (contractAddressWheel){
      refreshSlotRegisteredDataFromChain();
    }
  },[contractAddressWheel])

  
  const [loadedAddressTokens, setloadedAddressTokens] = useState({});
  // loadedAddressTokens = {
  //   "0x00000012": [14, 17, 20, 25],
  //   "0x00000013": [14, 17, 20, 25],
  //   "0x00000014": [14, 17, 20, 25],
  // }

  useEffect(()=>{
    if (loadedAddressTokens) {
      // console.log('loadedAddressTokens IS UPDATED YO: ',loadedAddressTokens);
      // console.log(NftSlotContractAddresses[0]);

      if (loadedAddressTokens.latestSlotLoaded+1 <= 10){
        loadNftsForSlot(loadedAddressTokens.latestSlotLoaded+1, NftSlotContractAddresses[loadedAddressTokens.latestSlotLoaded])
      }
    }
  },[loadedAddressTokens]);

  async function loadNftsForSlot(slotIndex, slotAddress){
        // console.log('attempting token load for slot: ',slotIndex, slotAddress)
        let rinkebySlotUnregisteredTokens;
        // console.log('~~ ',loadedAddressTokens[0]);

          if (slotAddress in loadedAddressTokens){ //if we have already loaded tokens for a key address 
            console.log('found existing cached data for ',slotAddress, loadedAddressTokens[slotAddress])
            rinkebySlotUnregisteredTokens = loadedAddressTokens[slotAddress];

            setloadedAddressTokens(loadedAddressTokens => ({
              ...loadedAddressTokens,
              latestSlotLoaded: slotIndex
            }));

        }
        else { 
          console.log('bawk bawk need to check it manually ',slotAddress, loadedAddressTokens)
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
        if (registeredFromOnChainBySlot[slotIndex][0]){
          if (registeredFromOnChainBySlot[slotIndex][0].filter(e => parseInt(e.tokenId._hex, 16) == item.token_id).length > 0) {
            return false;
          }
          else return true;
        }else return true;
      }) 


      setSlotAccountUnregisteredNFTs(SlotAccountUnregisteredNFTs => ({
        ...SlotAccountUnregisteredNFTs,
        [slotIndex]: final
      }));
      
  }




  useEffect(()=>{
    if (Slot1AccountUnregisteredNFTs){
      // console.log('Tokens in contract for [slot1 address] but NOT registered in [slot 1]: ',Slot1AccountUnregisteredNFTs, getRegisteredFromOnChainBySlot1.data);
    }
  },[Slot1AccountUnregisteredNFTs])







  useEffect(()=>{
    // console.log('*****************\t',MachineContractAddress);
    if (isInitialized && MachineContractAddress && registeredFromOnChainBySlot){
      setTimeout(()=> {loadNftsForSlot(1, NftSlotContractAddresses[0])}, 100);
      // setTimeout(()=> {loadNftsForSlot(2, NftSlotContractAddresses[1])}, 500);
      // setTimeout(()=> {loadNftsForSlot(3, NftSlotContractAddresses[2])}, 800);
      // setTimeout(()=> {loadNftsForSlot(4, NftSlotContractAddresses[3])}, 1200);
      // setTimeout(()=> {loadNftsForSlot(5, NftSlotContractAddresses[4])}, 1800);
      // setTimeout(()=> {loadNftsForSlot(6, NftSlotContractAddresses[5])}, 2100);
      // setTimeout(()=> {loadNftsForSlot(7, NftSlotContractAddresses[6])}, 2500);
      // setTimeout(()=> {loadNftsForSlot(8, NftSlotContractAddresses[7])}, 2900);
      // setTimeout(()=> {loadNftsForSlot(9, NftSlotContractAddresses[8])}, 3300);
      // setTimeout(()=> {loadNftsForSlot(10, NftSlotContractAddresses[9])}, 3800);


      setTimeout(function(){if (NftSlotContractAddresses[0] != '0x0000000000000000000000000000000000000000'){loadNftsForSlot(1, NftSlotContractAddresses[0])}},1);
      // setTimeout(function(){if (NftSlotContractAddresses[1] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot2()}},300);
      // setTimeout(function(){if (NftSlotContractAddresses[2] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot3()}},600);
      // setTimeout(function(){if (NftSlotContractAddresses[3] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot4()}},900);
      // setTimeout(function(){if (NftSlotContractAddresses[4] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot5()}},1200);
      // setTimeout(function(){if (NftSlotContractAddresses[5] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot6()}},1500);
      // setTimeout(function(){if (NftSlotContractAddresses[6] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot7()}},1800);
      // setTimeout(function(){if (NftSlotContractAddresses[7] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot8()}},2100);
      // setTimeout(function(){if (NftSlotContractAddresses[8] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot9()}},2400);
      // setTimeout(function(){if (NftSlotContractAddresses[9] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot10()}},2700);

    }
  },[isInitialized, MachineContractAddress, registeredFromOnChainBySlot])



  
  const registerTokensForSlot = useWeb3Contract({
    abi: WheelABI,
    contractAddress: contractAddressWheel,
    functionName: "RegisterListOfNftIds",
    params: {
        theList: AllSlotsSelectedArr? AllSlotsSelectedArr : 0,
    },
    chain: 'rinkeby'
  });
  const depositErc721ToContractInventory = useWeb3Contract({
    params:{
      from: account,
      to: MachineContractAddress,
      tokenId: TokenIdToDepositToContract
    },
    contractAddress: TokenAddressToDepositToContract,

    abi: WheelABI, //erc721 abi
    functionName: "transferFrom",
    chain: 'rinkeby'
  });


  function returnToMachineView(){
    setmanagingInventory(!managingInventory);
  }


  function toggleSelected(index,token_id,token_address){
      
      console.log('selected: ',index,token_id,token_address);
      const x = document.getElementById("cool").childNodes[index];
      x.classList.toggle("hoverStyle");
      x.classList.toggle("selectedStyle");
    //   console.log('x: ',x);

      if ((!selectedIndexArr[token_id]) || (selectedIndexArr[token_id] == false)){
        setselectedIndexArr({...selectedIndexArr, [token_id]: true});
        
      }
      if ((selectedIndexArr[token_id] == true)){
        setselectedIndexArr({...selectedIndexArr, [token_id]: false});
      }

    //   setselectedIndexArrActiveCount( Object.keys(selectedIndexArr).filter(k => selectedIndexArr[k] == true) );


  }




  // useEffect(()=>{
  //     if (slotInventory1tokenInfoArray){
  //       console.log('unregistered inventory and info about slot 1:',slotInventory1tokenInfoArray);
  //     }
  // },[slotInventory1tokenInfoArray])

  useEffect(()=>{
      if (selectedIndexArr){

          setselectedIndexArrActiveCount(Object.keys(selectedIndexArr).filter(k => selectedIndexArr[k] == true));

      }
  },[selectedIndexArr])

  useEffect(()=>{
      if (TokenAddressToDepositToContract){
        depositErc721ToContractInventory.runContractFunction({
          onError: (error) =>{
              console.log('777 big ERROR: ',error); 
              console.log('*****__ ',TokenAddressToDepositToContract, MachineContractAddress, TokenIdToDepositToContract, account)
      
            },
            onSuccess : (tx) => {
              console.log('deposit to contract succeeded',tx)
            },
        });
      }
  },[TokenAddressToDepositToContract,TokenIdToDepositToContract ])


function depositClickedNft(object){
  console.log(object);

  setTokenAddressToDepositToContract(object.token_address);
  setTokenIdToDepositToContract(object.token_id);
  
  

}

function refreshSlotRegisteredDataFromChain(){
  // getRegisteredFromOnChainBySlot1.runContractFunction(); //refresh slot registered data
  // setTimeout(()=>{fetchAccountNFTsForSlot1()},3000);
  console.log('fetching fresh slot registration data..')
  setloadedAddressTokens(loadedAddressTokens => ({
    ...loadedAddressTokens,
    latestSlotLoaded: 0
  }));
}


function registerTokens(){
  registerTokensForSlot.runContractFunction({
    onSuccess : async (tx)=>tx.wait().then(newTx => {
      console.log('SUCCESS! Check machine',tx)
      setregisterTokensInfoButton('Success!');
      setrefreshRegisteredSlotData(true);

      setTimeout(()=>{
        // refreshSlotRegisteredDataFromChain();
        setregisterTokensInfoButton('Register Tokens');
        
        setTotalRegisterTokenCount(0);

        setSlot1showMenuUnregistered({});
        setSlot2showMenuUnregistered({});
        setSlot3showMenuUnregistered({});
        setSlot4showMenuUnregistered({});
        setSlot5showMenuUnregistered({});
        setSlot6showMenuUnregistered({});
        setSlot7showMenuUnregistered({});
        setSlot8showMenuUnregistered({});
        setSlot9showMenuUnregistered({});
        setSlot10showMenuUnregistered({});


        setuniqueRegistrationSelectionIds({});


      },5000) //long timeout to let chain and database data update...then re-enable the register button
    }),
    onComplete : (tx) => {
      console.log('Registered all IDs in their slots! Check machine',tx)
      setregisterTokensInfoButton('Awaiting chain confirmation...');
    },
    onError: (error) =>{
    console.log('frrrr big ERROR: ',error,"_____",WheelABI,contractAddressWheel,AllSlotsSelectedArr); 
    },
  }); 

}


useEffect(()=>{
  if (AllSlotsSelectedArr){
    console.log(AllSlotsSelectedArr.length,'\t__AllSlotsSelectedArr: ',AllSlotsSelectedArr);
    let totalCount = 0;
    for (let i = 0; i < AllSlotsSelectedArr.length; i++){
      for (let q = 0; q < AllSlotsSelectedArr[i].length; q++){
        totalCount++;
      }
    }
 
    setTotalRegisterTokenCount(totalCount);
  }
},[AllSlotsSelectedArr]);


useEffect(()=>{
  setAllSlotsSelectedArr([Slot1SelectedArr, Slot2SelectedArr, Slot3SelectedArr, Slot4SelectedArr, Slot5SelectedArr, Slot6SelectedArr, Slot7SelectedArr, Slot8SelectedArr, Slot9SelectedArr, Slot10SelectedArr ]);
  // console.log('---------> ',AllSlotsSelectedArr);
},[Slot1SelectedArr, Slot2SelectedArr, Slot3SelectedArr, Slot4SelectedArr, Slot5SelectedArr, Slot6SelectedArr, Slot7SelectedArr, Slot8SelectedArr, Slot9SelectedArr, Slot10SelectedArr ]);

useEffect(()=>{
  if (Slot1showMenuUnregistered){
    let temp1 = [];
    for(var key in Slot1showMenuUnregistered){
      if (Slot1showMenuUnregistered[key] == true ) {
        temp1.push(key);
      }
      setSlot1SelectedArr(temp1);
    }
  }

  
  if (Slot2showMenuUnregistered){
    let temp2 = [];
    for(var key in Slot2showMenuUnregistered){
      if (Slot2showMenuUnregistered[key] == true) {
        temp2.push(key);
      }
      setSlot2SelectedArr(temp2);
    }
  }

  if (Slot3showMenuUnregistered){
    let temp3 = [];
    for(var key in Slot3showMenuUnregistered){
      if (Slot3showMenuUnregistered[key] == true) {
        temp3.push(key);
      }
      setSlot3SelectedArr(temp3);
    }
  }

  if (Slot4showMenuUnregistered){
    let temp4 = [];
    for(var key in Slot4showMenuUnregistered){
      if (Slot4showMenuUnregistered[key] == true) {
        temp4.push(key);
      }
      setSlot4SelectedArr(temp4);
    }
  }

  if (Slot5showMenuUnregistered){
    let temp5 = [];
    for(var key in Slot5showMenuUnregistered){
      if (Slot5showMenuUnregistered[key] == true) {
        temp5.push(key);
      }
      setSlot5SelectedArr(temp5);
    }
  }

  if (Slot6showMenuUnregistered){
    let temp6 = [];
    for(var key in Slot6showMenuUnregistered){
      if (Slot6showMenuUnregistered[key] == true) {
        temp6.push(key);
      }
      setSlot6SelectedArr(temp6);
    }
  }

  
  if (Slot7showMenuUnregistered){
    let temp7 = [];
    for(var key in Slot7showMenuUnregistered){
      if (Slot7showMenuUnregistered[key] == true) {
        temp7.push(key);
      }
      setSlot7SelectedArr(temp7);
    }
  }
  
  if (Slot8showMenuUnregistered){
    let temp8 = [];
    for(var key in Slot8showMenuUnregistered){
      if (Slot8showMenuUnregistered[key] == true) {
        temp8.push(key);
      }
      setSlot8SelectedArr(temp8);
    }
  }
  
  if (Slot9showMenuUnregistered){
    let temp9 = [];
    for(var key in Slot9showMenuUnregistered){
      if (Slot9showMenuUnregistered[key] == true) {
        temp9.push(key);
      }
      setSlot9SelectedArr(temp9);
    }
  }
  
  if (Slot10showMenuUnregistered){
    let temp10 = [];
    for(var key in Slot10showMenuUnregistered){
      if (Slot10showMenuUnregistered[key] == true) {
        temp10.push(key);
      }
      setSlot10SelectedArr(temp10);
    }
  }

  },[Slot1showMenuUnregistered, Slot2showMenuUnregistered, Slot3showMenuUnregistered, Slot4showMenuUnregistered, Slot5showMenuUnregistered, Slot6showMenuUnregistered, Slot7showMenuUnregistered, Slot8showMenuUnregistered, Slot9showMenuUnregistered, Slot10showMenuUnregistered, ])
  // },[Slot1showMenuUnregistered])


function determineGridSize(){
  if(NftSlotContractAddresses){
    let tempcount = 0;
    for (let i = 0; i < NftSlotContractAddresses.length; i++){
      if (NftSlotContractAddresses[i] != '0x0000000000000000000000000000000000000000'){
        tempcount++;
      }
    }
    let gridStyle = 'repeat('+tempcount+', 1fr)'
    return(gridStyle)
  }
  else 
    return ('repeat(10, 1fr)');
}

  useEffect(()=>{
    // console.log('registerTokensInfoButton:',registerTokensInfoButton);
  },[registerTokensInfoButton])
  
  useEffect(()=>{
    console.log('Slot showMenuUnregistered: ',Slot1showMenuUnregistered, Slot2showMenuUnregistered, Slot3showMenuUnregistered, Slot4showMenuUnregistered, Slot5showMenuUnregistered, Slot6showMenuUnregistered, Slot7showMenuUnregistered, Slot8showMenuUnregistered, Slot9showMenuUnregistered, Slot10showMenuUnregistered,);
  },[Slot1showMenuUnregistered, Slot2showMenuUnregistered, Slot3showMenuUnregistered, Slot4showMenuUnregistered, Slot5showMenuUnregistered, Slot6showMenuUnregistered, Slot7showMenuUnregistered, Slot8showMenuUnregistered, Slot9showMenuUnregistered, Slot10showMenuUnregistered, ])

  return (
    <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '80%',marginBottom:'10vh', position:'absolute',display:'flex',justifyContent:'center', width:'100%'}}>
    {/* <div style={{position:'absolute', top:'20%',left:'-22%',color:'#fff',}}> */}
        <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Wheel</button>
    {/* </div> */}
    

 
    <div style={{display:'flex', justifyContent:'center', zIndex:'1',display:'grid', gridTemplateColumns:determineGridSize(), gap:'0.5vw',border:'0px solid #00ffff', width:'95%', paddingTop:'5vh',}}>
 
        {/* <div style={{position:'absolute'}}>
              <UnregisteredInventorySlotLoader slotIndex={1} isLoaded={isLoaded1} isPrevLoaded={true}        SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[0]]} qqr={NftSlotContractAddresses} setIsLoaded={setisLoaded1}  slotAddress={NftSlotContractAddresses[0]} />
              <UnregisteredInventorySlotLoader slotIndex={2} isLoaded={isLoaded2} isPrevLoaded={isLoaded1}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[1]]} setIsLoaded={setisLoaded2}  slotAddress={NftSlotContractAddresses[1]} />
              <UnregisteredInventorySlotLoader slotIndex={3} isLoaded={isLoaded3} isPrevLoaded={isLoaded2}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[2]]} setIsLoaded={setisLoaded3}  slotAddress={NftSlotContractAddresses[2]} />
              <UnregisteredInventorySlotLoader slotIndex={4} isLoaded={isLoaded4} isPrevLoaded={isLoaded3}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[3]]} setIsLoaded={setisLoaded4}  slotAddress={NftSlotContractAddresses[3]} />
              <UnregisteredInventorySlotLoader slotIndex={5} isLoaded={isLoaded5} isPrevLoaded={isLoaded4}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[4]]} setIsLoaded={setisLoaded5}  slotAddress={NftSlotContractAddresses[4]} />
              <UnregisteredInventorySlotLoader slotIndex={6} isLoaded={isLoaded6} isPrevLoaded={isLoaded5}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[5]]} setIsLoaded={setisLoaded6}  slotAddress={NftSlotContractAddresses[5]} />
              <UnregisteredInventorySlotLoader slotIndex={7} isLoaded={isLoaded7} isPrevLoaded={isLoaded6}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[6]]} setIsLoaded={setisLoaded7}  slotAddress={NftSlotContractAddresses[6]} />
              <UnregisteredInventorySlotLoader slotIndex={8} isLoaded={isLoaded8} isPrevLoaded={isLoaded7}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[7]]} setIsLoaded={setisLoaded8}  slotAddress={NftSlotContractAddresses[7]} />
              <UnregisteredInventorySlotLoader slotIndex={9} isLoaded={isLoaded9} isPrevLoaded={isLoaded8}   SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[8]]} setIsLoaded={setisLoaded9}  slotAddress={NftSlotContractAddresses[8]} />
              <UnregisteredInventorySlotLoader slotIndex={10} isLoaded={isLoaded10} isPrevLoaded={isLoaded9} SlotAccountUnregisteredNFTs={loadedAddressTokens[NftSlotContractAddresses[9]]} setIsLoaded={setisLoaded10} slotAddress={NftSlotContractAddresses[9]} />
        </div> */} 
         
              <UnregisteredNftSlot slotIndex={"1"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[1]: {}}    SlotshowMenu={Slot1showMenuUnregistered} setSlotshowMenu={setSlot1showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"2"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[2]: {}}    SlotshowMenu={Slot2showMenuUnregistered} setSlotshowMenu={setSlot2showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"3"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[3]: {}}    SlotshowMenu={Slot3showMenuUnregistered} setSlotshowMenu={setSlot3showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"4"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[4]: {}}    SlotshowMenu={Slot4showMenuUnregistered} setSlotshowMenu={setSlot4showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"5"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[5]: {}}    SlotshowMenu={Slot5showMenuUnregistered} setSlotshowMenu={setSlot5showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"6"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[6]: {}}    SlotshowMenu={Slot6showMenuUnregistered} setSlotshowMenu={setSlot6showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"7"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[7]: {}}    SlotshowMenu={Slot7showMenuUnregistered} setSlotshowMenu={setSlot7showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"8"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[8]: {}}    SlotshowMenu={Slot8showMenuUnregistered} setSlotshowMenu={setSlot8showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"9"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[9]: {}}    SlotshowMenu={Slot9showMenuUnregistered} setSlotshowMenu={setSlot9showMenuUnregistered}/>
              <UnregisteredNftSlot slotIndex={"10"} SlotAccountUnregisteredNFTs={SlotAccountUnregisteredNFTs? SlotAccountUnregisteredNFTs[10]: {}} SlotshowMenu={Slot10showMenuUnregistered} setSlotshowMenu={setSlot10showMenuUnregistered}/>
             


              
              
              {TotalRegisterTokenCount?
              <>
                {(registerTokensInfoButton=='Register Tokens') ?
                  <div className="buttonHover" onClick={()=>{registerTokens()}} style={{ position:'fixed',bottom:'2.5vh',left:'40vw',fontSize:'2vw',color:'#fff', padding:'0.3vw',borderRadius:'25px',border:'1px solid #888'}}>
                    {registerTokensInfoButton} ({TotalRegisterTokenCount? TotalRegisterTokenCount:'0'})
                  </div>
                :<></>}

               { (registerTokensInfoButton=='Awaiting chain confirmation...') ?
                  <div className="breathingText" onClick={()=>{registerTokens()}} style={{position:'fixed',bottom:'2vh',left:'34vw',fontSize:'2vw',color:'#ffff00', padding:'0.3vw'}}>
                    {registerTokensInfoButton}
                  </div>
                :<></>} 

                {(registerTokensInfoButton=='Success!') ?
                  <div className="breathingText" style={{position:'fixed',bottom:'2vh',left:'43vw',fontSize:'2vw',color:'#00ff00', padding:'0.3vw'}}>
                    {registerTokensInfoButton}
                  </div>
                :<></>}
              </>
              :
              
              <div style={{position:'fixed',bottom:'2.5vh',left:'34vw',fontSize:'2vw',color:'#fff', padding:'0.3vw',}}>
                Select inventory to activate in its slot
              </div>
                
              }

       
    </div> 
    </div>
  )
}

export default RegisterInventory