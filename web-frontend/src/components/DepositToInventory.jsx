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
import RegisteredNftSlot from './Admin Panels/RegisteredPanel/RegisteredNftSlot';
import DepositNftToMachine from './Admin Panels/Deposit Panel/DepositNftToMachineSlot';

const RegisterInventory = () => {
  const Web3Api = useMoralisWeb3Api();
  const {account, isInitialized} = useMoralis();
  const queryClient = useQueryClient()
  const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
  const {activeSlotCounter, setActiveSlotCounter}    = useContext(NftMoreInfoContext);

  const {MachineContractAddress, setMachineContractAddress,}    = useContext(NftMoreInfoContext);
  
  const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque} = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter} = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}   = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}             = useContext(NftMoreInfoContext);

  const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
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
  
  
  const {displayMetaData, setdisplayMetaData}    = useContext(NftMoreInfoContext);






  const [displayedItems, setdisplayedItems] = useState({});


  const [TotalRegisterTokenCount, setTotalRegisterTokenCount] = useState(0);


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


  const {Slot1AccountDepositNFTs, setSlot1AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot2AccountDepositNFTs, setSlot2AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot3AccountDepositNFTs, setSlot3AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot4AccountDepositNFTs, setSlot4AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot5AccountDepositNFTs, setSlot5AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot6AccountDepositNFTs, setSlot6AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot7AccountDepositNFTs, setSlot7AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot8AccountDepositNFTs, setSlot8AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot9AccountDepositNFTs, setSlot9AccountDepositNFTs} = useContext(NftMoreInfoContext);
  const {Slot10AccountDepositNFTs, setSlot10AccountDepositNFTs} = useContext(NftMoreInfoContext);


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

  const {Slot1showMenu, setSlot1showMenu} = useContext(NftMoreInfoContext);
  const {Slot2showMenu, setSlot2showMenu} = useContext(NftMoreInfoContext);
  const {Slot3showMenu, setSlot3showMenu} = useContext(NftMoreInfoContext);
  const {Slot4showMenu, setSlot4showMenu} = useContext(NftMoreInfoContext);
  const {Slot5showMenu, setSlot5showMenu} = useContext(NftMoreInfoContext);
  const {Slot6showMenu, setSlot6showMenu} = useContext(NftMoreInfoContext);
  const {Slot7showMenu, setSlot7showMenu} = useContext(NftMoreInfoContext);
  const {Slot8showMenu, setSlot8showMenu} = useContext(NftMoreInfoContext);
  const {Slot9showMenu, setSlot9showMenu} = useContext(NftMoreInfoContext);
  const {Slot10showMenu, setSlot10showMenu} = useContext(NftMoreInfoContext);
  
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

  const fetchAccountNFTsForSlot1 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[0],
    };
 
    const rinkebySlot1AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 1\t',rinkebySlot1AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot1AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot1AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot2 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[1],
    };
 
    const rinkebySlot2AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 2\t',rinkebySlot2AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot2AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot2AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot3 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[2],
    };
 
    const rinkebySlot3AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 3\t',rinkebySlot3AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot3AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot3AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot4 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[3],
    };
 
    const rinkebySlot4AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 4\t',rinkebySlot4AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot4AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot4AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot5 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[4],
    };
 
    const rinkebySlot5AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 5\t',rinkebySlot5AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot5AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot5AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot6 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[5],
    };
 
    const rinkebySlot6AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 6\t',rinkebySlot6AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot6AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot6AccountDepositNFTs(tempArray);
  };


  const fetchAccountNFTsForSlot7 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[6],
    };
 
    const rinkebySlot7AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 7\t',rinkebySlot7AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot7AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot7AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot8 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[7],
    };
 
    const rinkebySlot8AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 8\t',rinkebySlot8AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot8AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot8AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot9 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[8],
    };
 
    const rinkebySlot9AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 9\t',rinkebySlot9AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot9AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot9AccountDepositNFTs(tempArray);
  };

  const fetchAccountNFTsForSlot10 = async () => {
    const options = {
      chain: "rinkeby",
      address: account? account: '0x0000000000000000000000000000000000000000',
      token_address: NftSlotContractAddresses[9],
    };
 
    const rinkebySlot10AccountUnregisteredNFTs = await Web3Api.account.getNFTsForContract(options);
    console.log('!!!!!!!!! 10\t',rinkebySlot10AccountUnregisteredNFTs);
    let tempArray = [];
    rinkebySlot10AccountUnregisteredNFTs.result.map((item, index)=>{
      if (typeof item.metadata != "object"){item.metadata = JSON.parse(item.metadata);}
      tempArray.push(item);
      tempArray = Array.from(new Set(tempArray));
    });
    setSlot10AccountDepositNFTs(tempArray);
  };












  useEffect(()=>{
    console.log('*****************\t',MachineContractAddress);
    if (isInitialized && MachineContractAddress){
      setTimeout(function(){if (NftSlotContractAddresses[0] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot1()}},1);
      setTimeout(function(){if (NftSlotContractAddresses[1] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot2()}},300);
      setTimeout(function(){if (NftSlotContractAddresses[2] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot3()}},600);
      setTimeout(function(){if (NftSlotContractAddresses[3] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot4()}},900);
      setTimeout(function(){if (NftSlotContractAddresses[4] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot5()}},1200);
      setTimeout(function(){if (NftSlotContractAddresses[5] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot6()}},1500);
      setTimeout(function(){if (NftSlotContractAddresses[6] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot7()}},1800);
      setTimeout(function(){if (NftSlotContractAddresses[7] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot8()}},2100);
      setTimeout(function(){if (NftSlotContractAddresses[8] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot9()}},2400);
      setTimeout(function(){if (NftSlotContractAddresses[9] != '0x0000000000000000000000000000000000000000'){fetchAccountNFTsForSlot10()}},2700);

    }
  },[isInitialized, MachineContractAddress])




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

function registerTokens(){
  registerTokensForSlot.runContractFunction({
    onSuccess : (tx) => {
      console.log('Registered all IDs in their slots! Check machine',tx)
    },
    onError: (error) =>{
    console.log('frrrr big ERROR: ',error); 
    },
  });

}


useEffect(()=>{
  if (AllSlotsSelectedArr){
    console.log('\t__AllSlotsSelectedArr: ',AllSlotsSelectedArr);
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
},[Slot1SelectedArr, Slot2SelectedArr, Slot3SelectedArr, Slot4SelectedArr, Slot5SelectedArr, Slot6SelectedArr, Slot7SelectedArr, Slot8SelectedArr, Slot9SelectedArr, Slot10SelectedArr ]);

useEffect(()=>{
  if (Slot1showMenu){
    let temp1 = [];
    for(var key in Slot1showMenu){
      if (Slot1showMenu[key] == true) {
        temp1.push(key);
      }
      setSlot1SelectedArr(temp1);
    }
  }

  
  if (Slot2showMenu){
    let temp2 = [];
    for(var key in Slot2showMenu){
      if (Slot2showMenu[key] == true) {
        temp2.push(key);
      }
      setSlot2SelectedArr(temp2);
    }
  }

  if (Slot3showMenu){
    let temp3 = [];
    for(var key in Slot3showMenu){
      if (Slot3showMenu[key] == true) {
        temp3.push(key);
      }
      setSlot3SelectedArr(temp3);
    }
  }

  if (Slot4showMenu){
    let temp4 = [];
    for(var key in Slot4showMenu){
      if (Slot4showMenu[key] == true) {
        temp4.push(key);
      }
      setSlot4SelectedArr(temp4);
    }
  }

  if (Slot5showMenu){
    let temp5 = [];
    for(var key in Slot5showMenu){
      if (Slot5showMenu[key] == true) {
        temp5.push(key);
      }
      setSlot5SelectedArr(temp5);
    }
  }

  if (Slot6showMenu){
    let temp6 = [];
    for(var key in Slot6showMenu){
      if (Slot6showMenu[key] == true) {
        temp6.push(key);
      }
      setSlot6SelectedArr(temp6);
    }
  }

  
  if (Slot7showMenu){
    let temp7 = [];
    for(var key in Slot7showMenu){
      if (Slot7showMenu[key] == true) {
        temp7.push(key);
      }
      setSlot7SelectedArr(temp7);
    }
  }
  
  if (Slot8showMenu){
    let temp8 = [];
    for(var key in Slot8showMenu){
      if (Slot8showMenu[key] == true) {
        temp8.push(key);
      }
      setSlot8SelectedArr(temp8);
    }
  }
  
  if (Slot9showMenu){
    let temp9 = [];
    for(var key in Slot9showMenu){
      if (Slot9showMenu[key] == true) {
        temp9.push(key);
      }
      setSlot9SelectedArr(temp9);
    }
  }
  
  if (Slot10showMenu){
    let temp10 = [];
    for(var key in Slot10showMenu){
      if (Slot10showMenu[key] == true) {
        temp10.push(key);
      }
      setSlot10SelectedArr(temp10);
    }
  }

  },[Slot1showMenu, Slot2showMenu, Slot3showMenu, Slot4showMenu, Slot5showMenu, Slot6showMenu, Slot7showMenu, Slot8showMenu, Slot9showMenu, Slot10showMenu, ])
  // },[Slot1showMenu])


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
  console.log('Slot1AccountDepositNFTs: ',Slot1AccountDepositNFTs);
},[Slot1AccountDepositNFTs])

  return (
    <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '80%',marginBottom:'10vh', position:'absolute',display:'flex',justifyContent:'center', width:'100%'}}>
    {/* <div style={{position:'absolute', top:'20%',left:'-22%',color:'#fff',}}> */}
        <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Wheel</button>
    {/* </div> */}
    

 
    <div style={{display:'flex', justifyContent:'center', zIndex:'1',display:'grid', gridTemplateColumns:determineGridSize(), gap:'0.5vw',border:'0px solid #00ffff', width:'95%', paddingTop:'5vh',}}>
  
    <DepositNftToMachine slotIndex={"1"} SlotAccountUnregisteredNFTs={Slot1AccountDepositNFTs} SlotshowMenu={Slot1showMenu} setSlotshowMenu={setSlot1showMenu}/>
    <DepositNftToMachine slotIndex={"2"} SlotAccountUnregisteredNFTs={Slot2AccountDepositNFTs} SlotshowMenu={Slot2showMenu} setSlotshowMenu={setSlot2showMenu}/>
    <DepositNftToMachine slotIndex={"3"} SlotAccountUnregisteredNFTs={Slot3AccountDepositNFTs} SlotshowMenu={Slot3showMenu} setSlotshowMenu={setSlot3showMenu}/>
    <DepositNftToMachine slotIndex={"4"} SlotAccountUnregisteredNFTs={Slot4AccountDepositNFTs} SlotshowMenu={Slot4showMenu} setSlotshowMenu={setSlot4showMenu}/>
    <DepositNftToMachine slotIndex={"5"} SlotAccountUnregisteredNFTs={Slot5AccountDepositNFTs} SlotshowMenu={Slot5showMenu} setSlotshowMenu={setSlot5showMenu}/>
    <DepositNftToMachine slotIndex={"6"} SlotAccountUnregisteredNFTs={Slot6AccountDepositNFTs} SlotshowMenu={Slot6showMenu} setSlotshowMenu={setSlot6showMenu}/>
    <DepositNftToMachine slotIndex={"7"} SlotAccountUnregisteredNFTs={Slot7AccountDepositNFTs} SlotshowMenu={Slot7showMenu} setSlotshowMenu={setSlot7showMenu}/>
    <DepositNftToMachine slotIndex={"8"} SlotAccountUnregisteredNFTs={Slot8AccountDepositNFTs} SlotshowMenu={Slot8showMenu} setSlotshowMenu={setSlot8showMenu}/>
    <DepositNftToMachine slotIndex={"9"} SlotAccountUnregisteredNFTs={Slot9AccountDepositNFTs} SlotshowMenu={Slot9showMenu} setSlotshowMenu={setSlot9showMenu}/>
    <DepositNftToMachine slotIndex={"10"} SlotAccountUnregisteredNFTs={Slot10AccountDepositNFTs} SlotshowMenu={Slot10showMenu} setSlotshowMenu={setSlot10showMenu}/>




        

              {TotalRegisterTokenCount?
              
              <div onClick={()=>{registerTokens()}} style={{cursor:'pointer', position:'fixed',bottom:'2.5vh',left:'28vw',fontSize:'2vw',color:'#fff', paddingLeft:'0.6vw', paddingRight:'0.6vw', padding:'0.3vw',}}>
                Double-Click a token to deposit into machine
              </div>
              :
              
              <div style={{position:'fixed',bottom:'2.5vh',left:'34vw',fontSize:'2vw',color:'#fff', padding:'0.3vw',}}>
                Select token(s) from your wallet above
              </div>
                
              }

       
    </div> 
    </div>
  )
}

export default RegisterInventory