import React, {useEffect, useState} from 'react';
import {WheelABI, contractAddressWheel} from './ContractInfo/ContractInfo.jsx';
import VendingCurrentSlots from './components/VendingCurrentSlots';
import TreasureChestCount from './components/TreasureChestCount';
import Moralis, {useWeb3Contract, useMoralis, MoralisProvider, useChain} from "react-moralis";
import ContractInfoGrabber from './components/ContractInfoGrabber.jsx';

import './styles/grid.css';
import NftMoreInfoDiv from './components/NftMoreInfoDiv.jsx';
import MachinePullHistory from './components/MachinePullHistory.jsx';
import ConfettiScene from './components/ConfettiScene.jsx';
import BuyMoreCapsulesDiv from './components/BuyMoreCapsulesDiv.jsx';
import WinnerImagePodium from './components/WinnerImagePodium.jsx';
import DisplayContractInfo from './components/DisplayContractInfo.jsx';
import {
  BrowserRouter as Router,
  Routes,  
  Route, 
  useNavigate, useLocation, Link
} from "react-router-dom";

import GameModeDiv from './components/GameModeDiv.jsx';
import TopNavBar from './components/TopNavBar.jsx';
import ActiveSlotCount from './components/snippet-components/ActiveSlotCount.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import RegisterInventory from './components/RegisterInventory.jsx';
import ManageRegisteredInventory from './components/RegisteredInventory.jsx';
import CreateMachine from './components/CreateMachine.jsx';
import BuyCapsuleContractInfoGrabber from './components/snippet-components/BuyCapsuleContractInfoGrabber.jsx';
import MachineNameTitle from './components/MachineNameTitle.jsx';
import DepositToInventory from './components/DepositToInventory.jsx';
import ManageInventoryViewControlDiv from './components/snippet-components/ManageInventoryViewControlDiv.jsx';
import ImageControlledLoader from './components/snippet-components/ImageControlledLoader.jsx';
import RevenueStats from './components/RevenueStats';
import Manager from './components/Manager.js';
import StatusMessageDiv from './components/StatusMessageDiv.jsx';


export const OddsAndSlotAddys = React.createContext({});
export const NftMoreInfoContext   = React.createContext({});

const Styles = {
  scene: {
    position:'absolute',
    width:'100vw',
    height:'100vh',
    border:'2px solid rgba(100,100,100,.2)',
  },
  container: {
    position:'absolute',
    width:'100vw',
    height:'100vh',
    // border:'1px solid #00ff00'

    // color:'#fff',
    // filter: 'blur(60px) brightness(0.4) hue-rotate(-0.0turn)',
    // backgroundImage: "url(https://media.istockphoto.com/photos/rays-neon-light-in-the-dark-with-smoke-empty-background-scene-picture-id1297852801?b=1&k=20&m=1297852801&s=170667a&w=0&h=MehtbxH0CEBrqqdzWXw-SXxbGdFgOdJtuh5vKlczZDE=)",
    // backgroundImage: 'linear-gradient(to right top, #000000, #050505, #090909, #0d0d0d, #111111)',
    backgroundSize: '100%',
    backgroundRepeat: 'no-repeat',
  },
  chestCount:{

    position:'absolute',
    top:'2%',
    left:'42%',
    // fontSize:'1vw',
    // display:'none' //disabled visibility for testing new CSS image layouts..
  },

 
 

  MachinePullHistory:{

  },
  WinnerImagePodium:{
    position:'absolute',
    width: '60%',
    height: '30%',
    color: "#fff",
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    top:'48%',
    left:'19%',

  },


  TopNavBar:{
    position:'absolute',
    width: '10vw',
    height: '3vh',
    color: "#fff",
    display:'flex',
    justifyContent:'left',
    alignContent:'center',
    // backgroundColor: 'rgba(50,50,50,0.1)',
    top:'1%',
    left:'1%',
    borderRadius:'10px',
    

  },


}

function App(props) {
//THE MAGIC SAUCE TO ENABLE WEB3

const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();   
useEffect(() => {
  if (!isWeb3Enabled) {
  // console.log('enabling web3...'); 
  enableWeb3();
  }
}, [web3]);

  const queryClient = new QueryClient();

  const [ManageSalesInventoryColor, setManageSalesInventoryColor]    = useState("#666");

  const [slotNameAndSymbol , setslotNameAndSymbol]    = useState({});
  const [didSlotAlreadyLoadObj, setdidSlotAlreadyLoadObj] = useState({});
  
  const [inventoryMap, setinventoryMap] = useState({});
  const [userErc20TokenBalance, setuserErc20TokenBalance] = useState();
  const [TimerOuter, setTimerOuter] = useState({});

  const [displayMetaData, setdisplayMetaData] = useState(false);
  
  const [capsuleTokenPaymentContract, setcapsuleTokenPaymentContract] = useState();
  //defined as per-second intervals
  const [domainThrottleSettings, setdomainThrottleSettings]   = useState(
    {
      'gateway.pinata.cloud': {
        provisioned: 3,
        used: 0
      }
    }
  );
  const [machineOwner, setmachineOwner] = useState();
  const [clickedmetadataObj,        setClickedmetadataObj] = useState();
  const [RinkebyNFTsState, setRinkebyNFTsState]   = useState('');
  const [Slot1showMenuUnregistered, setSlot1showMenuUnregistered] = useState({});
  const [Slot2showMenuUnregistered, setSlot2showMenuUnregistered] = useState({});
  const [Slot3showMenuUnregistered, setSlot3showMenuUnregistered] = useState({});
  const [Slot4showMenuUnregistered, setSlot4showMenuUnregistered] = useState({});
  const [Slot5showMenuUnregistered, setSlot5showMenuUnregistered] = useState({});
  const [Slot6showMenuUnregistered, setSlot6showMenuUnregistered] = useState({});
  const [Slot7showMenuUnregistered, setSlot7showMenuUnregistered] = useState({});
  const [Slot8showMenuUnregistered, setSlot8showMenuUnregistered] = useState({});
  const [Slot9showMenuUnregistered, setSlot9showMenuUnregistered] = useState({});
  const [Slot10showMenuUnregistered, setSlot10showMenuUnregistered] = useState({});

  const [Slot1AccountDepositNFTs, setSlot1AccountDepositNFTs] = useState([]);
  const [Slot2AccountDepositNFTs, setSlot2AccountDepositNFTs] = useState([]);
  const [Slot3AccountDepositNFTs, setSlot3AccountDepositNFTs] = useState([]);
  const [Slot4AccountDepositNFTs, setSlot4AccountDepositNFTs] = useState([]);
  const [Slot5AccountDepositNFTs, setSlot5AccountDepositNFTs] = useState([]);
  const [Slot6AccountDepositNFTs, setSlot6AccountDepositNFTs] = useState([]);
  const [Slot7AccountDepositNFTs, setSlot7AccountDepositNFTs] = useState([]);
  const [Slot8AccountDepositNFTs, setSlot8AccountDepositNFTs] = useState([]);
  const [Slot9AccountDepositNFTs, setSlot9AccountDepositNFTs] = useState([]);
  const [Slot10AccountDepositNFTs, setSlot10AccountDepositNFTs] = useState([]);

  const [Slot1AccountNFTs, setSlot1AccountNFTs]   = useState();
  const [Slot2AccountNFTs, setSlot2AccountNFTs]   = useState();
  const [Slot3AccountNFTs, setSlot3AccountNFTs]   = useState();
  const [Slot4AccountNFTs, setSlot4AccountNFTs]   = useState();
  const [Slot5AccountNFTs, setSlot5AccountNFTs]   = useState();
  const [Slot6AccountNFTs, setSlot6AccountNFTs]   = useState();
  const [Slot7AccountNFTs, setSlot7AccountNFTs]   = useState();
  const [Slot8AccountNFTs, setSlot8AccountNFTs]   = useState();
  const [Slot9AccountNFTs, setSlot9AccountNFTs]   = useState();
  const [Slot10AccountNFTs, setSlot10AccountNFTs] = useState();

  const [Slot1AccountUnregisteredNFTs, setSlot1AccountUnregisteredNFTs]   = useState();
  const [Slot2AccountUnregisteredNFTs, setSlot2AccountUnregisteredNFTs]   = useState();
  const [Slot3AccountUnregisteredNFTs, setSlot3AccountUnregisteredNFTs]   = useState();
  const [Slot4AccountUnregisteredNFTs, setSlot4AccountUnregisteredNFTs]   = useState();
  const [Slot5AccountUnregisteredNFTs, setSlot5AccountUnregisteredNFTs]   = useState();
  const [Slot6AccountUnregisteredNFTs, setSlot6AccountUnregisteredNFTs]   = useState();
  const [Slot7AccountUnregisteredNFTs, setSlot7AccountUnregisteredNFTs]   = useState();
  const [Slot8AccountUnregisteredNFTs, setSlot8AccountUnregisteredNFTs]   = useState();
  const [Slot9AccountUnregisteredNFTs, setSlot9AccountUnregisteredNFTs]   = useState();
  const [Slot10AccountUnregisteredNFTs, setSlot10AccountUnregisteredNFTs] = useState();


  const [displayNetworkSwitchPrompt,setdisplayNetworkSwitchPrompt] = useState(false);
  
  const [ContractErrorMessage, setContractErrorMessage] = useState();


  const [Slot1showMenu, setSlot1showMenu] = useState({});
  const [Slot2showMenu, setSlot2showMenu] = useState({});
  const [Slot3showMenu, setSlot3showMenu] = useState({});
  const [Slot4showMenu, setSlot4showMenu] = useState({});
  const [Slot5showMenu, setSlot5showMenu] = useState({});
  const [Slot6showMenu, setSlot6showMenu] = useState({});
  const [Slot7showMenu, setSlot7showMenu] = useState({});
  const [Slot8showMenu, setSlot8showMenu] = useState({});
  const [Slot9showMenu, setSlot9showMenu] = useState({});
  const [Slot10showMenu, setSlot10showMenu] = useState({});
  
  const [ToolTipTextSlot1, setToolTipTextSlot1] = useState();
  const [ToolTipTextSlot2, setToolTipTextSlot2] = useState();
  const [ToolTipTextSlot3, setToolTipTextSlot3] = useState();
  const [ToolTipTextSlot4, setToolTipTextSlot4] = useState();
  const [ToolTipTextSlot5, setToolTipTextSlot5] = useState();
  const [ToolTipTextSlot6, setToolTipTextSlot6] = useState();
  const [ToolTipTextSlot7, setToolTipTextSlot7] = useState();
  const [ToolTipTextSlot8, setToolTipTextSlot8] = useState();
  const [ToolTipTextSlot9, setToolTipTextSlot9] = useState();
  const [ToolTipTextSlot10, setToolTipTextSlot10] = useState();

  const [mcpcGenfilterSlot1, setmcpcGenfilterSlot1] = useState(0);


  const { switchNetwork, chainId, chain, account } = useChain();

  
  const [TotalPercentageProbabilities, setTotalPercentageProbabilities]       = useState(0);

  const [slot1ProbabilityValue, setslot1ProbabilityValue]       = useState(0);
  const [slot2ProbabilityValue, setslot2ProbabilityValue]       = useState(0);
  const [slot3ProbabilityValue, setslot3ProbabilityValue]       = useState(0);
  const [slot4ProbabilityValue, setslot4ProbabilityValue]       = useState(0);
  const [slot5ProbabilityValue, setslot5ProbabilityValue]       = useState(0);
  const [slot6ProbabilityValue, setslot6ProbabilityValue]       = useState(0);
  const [slot7ProbabilityValue, setslot7ProbabilityValue]       = useState(0);
  const [slot8ProbabilityValue, setslot8ProbabilityValue]       = useState(0);
  const [slot9ProbabilityValue, setslot9ProbabilityValue]       = useState(0);
  const [slot10ProbabilityValue, setslot10ProbabilityValue]     = useState(0);
  
  
  const [slot1isExplicit, setslot1isExplicit]     = useState(false);
  const [slot2isExplicit, setslot2isExplicit]     = useState(false);
  const [slot3isExplicit, setslot3isExplicit]     = useState(false);
  const [slot4isExplicit, setslot4isExplicit]     = useState(false);
  const [slot5isExplicit, setslot5isExplicit]     = useState(false);
  const [slot6isExplicit, setslot6isExplicit]     = useState(false);
  const [slot7isExplicit, setslot7isExplicit]     = useState(false);
  const [slot8isExplicit, setslot8isExplicit]     = useState(false);
  const [slot9isExplicit, setslot9isExplicit]     = useState(false);
  const [slot10isExplicit, setslot10isExplicit]     = useState(false);
  
  const [machineNameString, setmachineNameString]     = useState();
  const [ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress]     = useState(" ");
  const [ActiveNetworkThemeColor, setActiveNetworkThemeColor]                       = useState(" ");
  const [ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque]           = useState(" ");
  const [ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow]               = useState(" ");
  const [ActiveNetworkFriendlyName, setActiveNetworkFriendlyName]                   = useState(" ");
  const [ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress] = useState(" ");
  const [ActiveNetworkBorderColor, setActiveNetworkBorderColor]                     = useState(" ");
  
  const [ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter]                     = useState(" ");
  const [ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker]                     = useState(" ");
  
  const [winningTokenId, setwinningTokenId]                     = useState();
  const [PulledImageArray, setPulledImageArray]                     = useState();
  
  
  
  
  const [creatingNewMachine, setcreatingNewMachine] = useState(false);
  const [showManager, setshowManager]               = useState(false);
  
  
  
  
  
  const [slot1NewContractTokenName, setslot1NewContractTokenName] = useState(" ");
  const [slot2NewContractTokenName, setslot2NewContractTokenName] = useState(" ");
  const [slot3NewContractTokenName, setslot3NewContractTokenName] = useState(" ");
  const [slot4NewContractTokenName, setslot4NewContractTokenName] = useState(" ");
  const [slot5NewContractTokenName, setslot5NewContractTokenName] = useState(" ");
  const [slot6NewContractTokenName, setslot6NewContractTokenName] = useState(" ");
  const [slot7NewContractTokenName, setslot7NewContractTokenName] = useState(" ");
  const [slot8NewContractTokenName, setslot8NewContractTokenName] = useState(" ");
  const [slot9NewContractTokenName, setslot9NewContractTokenName] = useState(" ");
  const [slot10NewContractTokenName, setslot10NewContractTokenName] = useState(" ");
  
  const [slot1AccountRegisteredNFTs, setslot1AccountRegisteredNFTs]   = useState();
  const [slot2AccountRegisteredNFTs, setslot2AccountRegisteredNFTs]   = useState();
  const [slot3AccountRegisteredNFTs, setslot3AccountRegisteredNFTs]   = useState();
  const [slot4AccountRegisteredNFTs, setslot4AccountRegisteredNFTs]   = useState();
  const [slot5AccountRegisteredNFTs, setslot5AccountRegisteredNFTs]   = useState();
  const [slot6AccountRegisteredNFTs, setslot6AccountRegisteredNFTs]   = useState();
  const [slot7AccountRegisteredNFTs, setslot7AccountRegisteredNFTs]   = useState();
  const [slot8AccountRegisteredNFTs, setslot8AccountRegisteredNFTs]   = useState();
  const [slot9AccountRegisteredNFTs, setslot9AccountRegisteredNFTs]   = useState();
  const [slot10AccountRegisteredNFTs, setslot10AccountRegisteredNFTs] = useState();
  
  const [imageUrlToCachedBlobObject, setimageUrlToCachedBlobObject] = useState({});
  
  const [selectedSlotContractName, setselectedSlotContractName]     = useState();
  const [selectedSlotContractSymbol, setselectedSlotContractSymbol] = useState();
  
  const [UserMachinesArray, setUserMachinesArray] = useState([]);
  
  
  const [selectedFontColor, setselectedFontColor] = useState('#fff');
  
  
  const [showRegisteredInventory, setshowRegisteredInventory] = useState(2); //WALRUS - start with Deposit page when clicking Manage Machine
  
  const [managingInventory, setmanagingInventory] = useState(false);
  
  const [slotIdFilter, setslotIdFilter] = useState({
    "1":'-1',
    "2":'-1',
    "3":'-1',
    "4":'-1',
    "5":'-1',
    "6":'-1',
    "7":'-1',
    "8":'-1',
    "9":'-1',
    "10":'-1',
  });
  
  
  const [capsuleIconAnimated, setcapsuleIconAnimated] = useState(false);
  
  
  const [BuyCapsuleContract, setBuyCapsuleContract] = useState();
  const [MachineContractAddress, setMachineContractAddress] = useState();
  const [WheelInfo, setWheelInfo] = useState();
  
  
  
  const [selectedSlotBorderColor, setselectedSlotBorderColor] = useState();
  const [selectedSlotBackgroundColor, setselectedSlotBackgroundColor] = useState();
  
  const [selectedSlotAddress, setselectedSlotAddress] = useState();
  
  
  const [slotInventory1tokenInfoArray, setslotInventory1tokenInfoArray] = useState([]);
  const [slotInventory2tokenInfoArray, setslotInventory2tokenInfoArray] = useState([]);
  const [slotInventory3tokenInfoArray, setslotInventory3tokenInfoArray] = useState([]);
  const [slotInventory4tokenInfoArray, setslotInventory4tokenInfoArray] = useState([]);
  const [slotInventory5tokenInfoArray, setslotInventory5tokenInfoArray] = useState([]);
  const [slotInventory6tokenInfoArray, setslotInventory6tokenInfoArray] = useState([]);
  const [slotInventory7tokenInfoArray, setslotInventory7tokenInfoArray] = useState([]);
  const [slotInventory8tokenInfoArray, setslotInventory8tokenInfoArray] = useState([]);
  const [slotInventory9tokenInfoArray, setslotInventory9tokenInfoArray] = useState([]);
  const [slotInventory10tokenInfoArray, setslotInventory10tokenInfoArray] = useState([]);
  
  
  
  
  
  const [contractAddressWheel, setcontractAddressWheel] = useState();
  const [contractAddressWheelLC, setcontractAddressWheelLC] = useState();
  
  const [activeSlotCounter, setActiveSlotCounter] = useState(0);
  const [NftSlotContractAddresses, setNftSlotContractAddresses]   = useState(["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000"]);
  const [NftSlotOdds, setNftSlotOdds]   = useState([]); 
  
  const [contractAddressFromUrl, setcontractAddressFromUrl] = useState();
  
  
  const [UnRegisteredInventoryColor, setUnRegisteredInventoryColor] = useState("#666");
  const [RegisteredInventoryColor, setRegisteredInventoryColor] = useState("#666");
  const [DepositInventoryColor, setDepositInventoryColor]     = useState('#00ff00');
  
  const [contractAddressChainLinkToken, setcontractAddressChainLinkToken] = useState('0x01be23585060835e02b77ef475b0cc51aa1e0709');
  const [machineLinkBalance, setmachineLinkBalance] = useState(0);


  const [clickedNftImage, setclickedNftImage] = useState();

  const [slotImageObj, setslotImageObj] = useState();
  const [winningSlotNumber, setwinningSlotNumber] = useState();

  const [confettiDisplay, setconfettiDisplay] = useState(false);
  const [confettiZIndex, setconfettiZIndex] = useState('zIndexNormal');
  const [rateOfRotation, setrateOfRotation] = useState(30);

  const [clickedSlotObj, setClickedSlotObj] = useState();
  const [clickedDisplayedTokenId, setClickedDisplayedTokenId] = useState();
  const [clickedSlotContractAddress, setClickedSlotContractAddress] = useState();
  const [clickedSlotIndex, setClickedSlotIndex] = useState();
  const [clickedSlotImageUrl, setClickedSlotImageUrl] = useState();
  const [clickedNftSlotOdds, setClickedNftSlotOdds] = useState();
  const [clickedSlotStock, setClickedSlotStock] = useState();
  



  const [hideExtraInfo, sethideExtraInfo] = useState(false);


  const [slot1Obj, setslot1Obj] = useState();
  const [slot2Obj, setslot2Obj] = useState();
  const [slot3Obj, setslot3Obj] = useState();
  const [slot4Obj, setslot4Obj] = useState();
  const [slot5Obj, setslot5Obj] = useState();
  const [slot6Obj, setslot6Obj] = useState();
  const [slot7Obj, setslot7Obj] = useState();
  const [slot8Obj, setslot8Obj] = useState();
  const [slot9Obj, setslot9Obj] = useState();
  const [slot10Obj, setslot10Obj] = useState();
  
  const [uniqueRegistrationSelectionIds, setuniqueRegistrationSelectionIds] = useState({});
  
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
  
  const [showTokenSelector, setshowTokenSelector] = useState(false);

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

  const [sceneTransition, setsceneTransition] = useState();

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
  
  const [frontSlotId1, setfrontSlotId1] = useState();
  const [frontSlotId2, setfrontSlotId2] = useState();
  const [frontSlotId3, setfrontSlotId3] = useState();
  const [frontSlotId4, setfrontSlotId4] = useState();
  const [frontSlotId5, setfrontSlotId5] = useState();
  const [frontSlotId6, setfrontSlotId6] = useState();
  const [frontSlotId7, setfrontSlotId7] = useState();
  const [frontSlotId8, setfrontSlotId8] = useState();
  const [frontSlotId9, setfrontSlotId9] = useState();
  const [frontSlotId10, setfrontSlotId10] = useState();

  const contextObj = {
    slot1Inventory, setslot1Inventory,
    slot2Inventory, setslot2Inventory,
    slot3Inventory, setslot3Inventory,
    slot4Inventory, setslot4Inventory,
    slot5Inventory, setslot5Inventory,
    slot6Inventory, setslot6Inventory,
    slot7Inventory, setslot7Inventory,
    slot8Inventory, setslot8Inventory,
    slot9Inventory, setslot9Inventory,
    slot10Inventory, setslot10Inventory,

    slot1Stock, setslot1Stock,
    slot2Stock, setslot2Stock,
    slot3Stock, setslot3Stock,
    slot4Stock, setslot4Stock,
    slot5Stock, setslot5Stock,
    slot6Stock, setslot6Stock,
    slot7Stock, setslot7Stock,
    slot8Stock, setslot8Stock,
    slot9Stock, setslot9Stock,
    slot10Stock, setslot10Stock,

    frontSlotId1, setfrontSlotId1,
    frontSlotId2, setfrontSlotId2,
    frontSlotId3, setfrontSlotId3,
    frontSlotId4, setfrontSlotId4,
    frontSlotId5, setfrontSlotId5,
    frontSlotId6, setfrontSlotId6,
    frontSlotId7, setfrontSlotId7,
    frontSlotId8, setfrontSlotId8,
    frontSlotId9, setfrontSlotId9,
    frontSlotId10, setfrontSlotId10,

    NftSlotContractAddresses, setNftSlotContractAddresses,
    NftSlotOdds, setNftSlotOdds,

    clickedNftImage, setclickedNftImage,

    slot1Obj, setslot1Obj,
    slot2Obj, setslot2Obj,
    slot3Obj, setslot3Obj,
    slot4Obj, setslot4Obj,
    slot5Obj, setslot5Obj,
    slot6Obj, setslot6Obj,
    slot7Obj, setslot7Obj,
    slot8Obj, setslot8Obj,
    slot9Obj, setslot9Obj,
    slot10Obj, setslot10Obj,

    sceneTransition, setsceneTransition,
    confettiDisplay, setconfettiDisplay,
    confettiZIndex, setconfettiZIndex,
    rateOfRotation, setrateOfRotation,

    slot1ImageUrl, setslot1ImageUrl,
    slot2ImageUrl, setslot2ImageUrl,
    slot3ImageUrl, setslot3ImageUrl,
    slot4ImageUrl, setslot4ImageUrl,
    slot5ImageUrl, setslot5ImageUrl,
    slot6ImageUrl, setslot6ImageUrl,
    slot7ImageUrl, setslot7ImageUrl,
    slot8ImageUrl, setslot8ImageUrl,
    slot9ImageUrl, setslot9ImageUrl,
    slot10ImageUrl, setslot10ImageUrl,

    slotImageObj, setslotImageObj,

    winningSlotNumber, setwinningSlotNumber,

    contractAddressWheel, setcontractAddressWheel,
    contractAddressWheelLC, setcontractAddressWheelLC,
    contractAddressChainLinkToken, setcontractAddressChainLinkToken,
    
    hideExtraInfo, sethideExtraInfo,

    machineLinkBalance, setmachineLinkBalance,

    activeSlotCounter, setActiveSlotCounter,

    didSlotAlreadyLoadObj, setdidSlotAlreadyLoadObj,

    managingInventory, setmanagingInventory,
    
    slotNameAndSymbol , setslotNameAndSymbol,

    UnRegisteredInventoryColor, setUnRegisteredInventoryColor,
    RegisteredInventoryColor, setRegisteredInventoryColor,
    ManageSalesInventoryColor, setManageSalesInventoryColor,


    showRegisteredInventory, setshowRegisteredInventory,
    DepositInventoryColor, setDepositInventoryColor,
    slotInventory1tokenInfoArray, setslotInventory1tokenInfoArray,
    slotInventory2tokenInfoArray, setslotInventory2tokenInfoArray,
    slotInventory3tokenInfoArray, setslotInventory3tokenInfoArray,
    slotInventory4tokenInfoArray, setslotInventory4tokenInfoArray,
    slotInventory5tokenInfoArray, setslotInventory5tokenInfoArray,
    slotInventory6tokenInfoArray, setslotInventory6tokenInfoArray,
    slotInventory7tokenInfoArray, setslotInventory7tokenInfoArray,
    slotInventory8tokenInfoArray, setslotInventory8tokenInfoArray,
    slotInventory9tokenInfoArray, setslotInventory9tokenInfoArray,
    slotInventory10tokenInfoArray, setslotInventory10tokenInfoArray,

    capsuleIconAnimated, setcapsuleIconAnimated, 

    BuyCapsuleContract, setBuyCapsuleContract,
    MachineContractAddress, setMachineContractAddress,
    UserMachinesArray, setUserMachinesArray,
    selectedSlotAddress, setselectedSlotAddress,
    selectedSlotBorderColor, setselectedSlotBorderColor,
    selectedSlotBackgroundColor, setselectedSlotBackgroundColor,
    selectedFontColor, setselectedFontColor,

    slot1NewContractTokenName, setslot1NewContractTokenName,
    slot2NewContractTokenName, setslot2NewContractTokenName,
    slot3NewContractTokenName, setslot3NewContractTokenName,
    slot4NewContractTokenName, setslot4NewContractTokenName,
    slot5NewContractTokenName, setslot5NewContractTokenName,
    slot6NewContractTokenName, setslot6NewContractTokenName,
    slot7NewContractTokenName, setslot7NewContractTokenName,
    slot8NewContractTokenName, setslot8NewContractTokenName,
    slot9NewContractTokenName, setslot9NewContractTokenName,
    slot10NewContractTokenName, setslot10NewContractTokenName,

    selectedSlotContractName, setselectedSlotContractName,
    selectedSlotContractSymbol, setselectedSlotContractSymbol,

    ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress,
    ActiveNetworkThemeColor, setActiveNetworkThemeColor,
    ActiveNetworkFriendlyName, setActiveNetworkFriendlyName,
    ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress,

    ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow,
    ActiveNetworkBorderColor, setActiveNetworkBorderColor,
    creatingNewMachine, setcreatingNewMachine,
    showManager, setshowManager,
    winningTokenId, setwinningTokenId,
    PulledImageArray, setPulledImageArray,
    machineNameString, setmachineNameString,
    userErc20TokenBalance, setuserErc20TokenBalance,
    ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque,
    ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter,
    ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker,

    slot1ProbabilityValue, setslot1ProbabilityValue,
    slot2ProbabilityValue, setslot2ProbabilityValue,
    slot3ProbabilityValue, setslot3ProbabilityValue,
    slot4ProbabilityValue, setslot4ProbabilityValue,
    slot5ProbabilityValue, setslot5ProbabilityValue,
    slot6ProbabilityValue, setslot6ProbabilityValue,
    slot7ProbabilityValue, setslot7ProbabilityValue,
    slot8ProbabilityValue, setslot8ProbabilityValue,
    slot9ProbabilityValue, setslot9ProbabilityValue,
    slot10ProbabilityValue, setslot10ProbabilityValue,

    slot1isExplicit, setslot1isExplicit,
    slot2isExplicit, setslot2isExplicit,
    slot3isExplicit, setslot3isExplicit,
    slot4isExplicit, setslot4isExplicit,
    slot5isExplicit, setslot5isExplicit,
    slot6isExplicit, setslot6isExplicit,
    slot7isExplicit, setslot7isExplicit,
    slot8isExplicit, setslot8isExplicit,
    slot9isExplicit, setslot9isExplicit,
    slot10isExplicit, setslot10isExplicit,
    TotalPercentageProbabilities, setTotalPercentageProbabilities,
    TimerOuter, setTimerOuter,

    Slot1showMenu, setSlot1showMenu,
    Slot2showMenu, setSlot2showMenu,
    Slot3showMenu, setSlot3showMenu,
    Slot4showMenu, setSlot4showMenu,
    Slot5showMenu, setSlot5showMenu,
    Slot6showMenu, setSlot6showMenu,
    Slot7showMenu, setSlot7showMenu,
    Slot8showMenu, setSlot8showMenu,
    Slot9showMenu, setSlot9showMenu,
    Slot10showMenu, setSlot10showMenu,
    
    ToolTipTextSlot1, setToolTipTextSlot1,
    ToolTipTextSlot2, setToolTipTextSlot2,
    ToolTipTextSlot3, setToolTipTextSlot3,
    ToolTipTextSlot4, setToolTipTextSlot4,
    ToolTipTextSlot5, setToolTipTextSlot5,
    ToolTipTextSlot6, setToolTipTextSlot6,
    ToolTipTextSlot7, setToolTipTextSlot7,
    ToolTipTextSlot8, setToolTipTextSlot8,
    ToolTipTextSlot9, setToolTipTextSlot9,
    ToolTipTextSlot10, setToolTipTextSlot10,
    
    RinkebyNFTsState, setRinkebyNFTsState,
    
    displayMetaData, setdisplayMetaData,

    WheelInfo, setWheelInfo,

    Slot1AccountNFTs, setSlot1AccountNFTs,
    Slot2AccountNFTs, setSlot2AccountNFTs,
    Slot3AccountNFTs, setSlot3AccountNFTs,
    Slot4AccountNFTs, setSlot4AccountNFTs,
    Slot5AccountNFTs, setSlot5AccountNFTs,
    Slot6AccountNFTs, setSlot6AccountNFTs,
    Slot7AccountNFTs, setSlot7AccountNFTs,
    Slot8AccountNFTs, setSlot8AccountNFTs,
    Slot9AccountNFTs, setSlot9AccountNFTs,
    Slot10AccountNFTs, setSlot10AccountNFTs,

    Slot1AccountUnregisteredNFTs, setSlot1AccountUnregisteredNFTs,
    Slot2AccountUnregisteredNFTs, setSlot2AccountUnregisteredNFTs,
    Slot3AccountUnregisteredNFTs, setSlot3AccountUnregisteredNFTs,
    Slot4AccountUnregisteredNFTs, setSlot4AccountUnregisteredNFTs,
    Slot5AccountUnregisteredNFTs, setSlot5AccountUnregisteredNFTs,
    Slot6AccountUnregisteredNFTs, setSlot6AccountUnregisteredNFTs,
    Slot7AccountUnregisteredNFTs, setSlot7AccountUnregisteredNFTs,
    Slot8AccountUnregisteredNFTs, setSlot8AccountUnregisteredNFTs,
    Slot9AccountUnregisteredNFTs, setSlot9AccountUnregisteredNFTs,
    Slot10AccountUnregisteredNFTs, setSlot10AccountUnregisteredNFTs,
    
    slot1AccountRegisteredNFTs, setslot1AccountRegisteredNFTs,
    slot2AccountRegisteredNFTs, setslot2AccountRegisteredNFTs,
    slot3AccountRegisteredNFTs, setslot3AccountRegisteredNFTs,
    slot4AccountRegisteredNFTs, setslot4AccountRegisteredNFTs,
    slot5AccountRegisteredNFTs, setslot5AccountRegisteredNFTs,
    slot6AccountRegisteredNFTs, setslot6AccountRegisteredNFTs,
    slot7AccountRegisteredNFTs, setslot7AccountRegisteredNFTs,
    slot8AccountRegisteredNFTs, setslot8AccountRegisteredNFTs,
    slot9AccountRegisteredNFTs, setslot9AccountRegisteredNFTs,
    slot10AccountRegisteredNFTs, setslot10AccountRegisteredNFTs,
    uniqueRegistrationSelectionIds, setuniqueRegistrationSelectionIds,
    imageUrlToCachedBlobObject, setimageUrlToCachedBlobObject,
    domainThrottleSettings, setdomainThrottleSettings,

    slotIdFilter, setslotIdFilter,

    showTokenSelector, setshowTokenSelector,
    
    Slot1AccountDepositNFTs, setSlot1AccountDepositNFTs,
    Slot2AccountDepositNFTs, setSlot2AccountDepositNFTs,
    Slot3AccountDepositNFTs, setSlot3AccountDepositNFTs,
    Slot4AccountDepositNFTs, setSlot4AccountDepositNFTs,
    Slot5AccountDepositNFTs, setSlot5AccountDepositNFTs,
    Slot6AccountDepositNFTs, setSlot6AccountDepositNFTs,
    Slot7AccountDepositNFTs, setSlot7AccountDepositNFTs,
    Slot8AccountDepositNFTs, setSlot8AccountDepositNFTs,
    Slot9AccountDepositNFTs, setSlot9AccountDepositNFTs,
    Slot10AccountDepositNFTs,setSlot10AccountDepositNFTs,

    machineOwner, setmachineOwner,
    displayNetworkSwitchPrompt,setdisplayNetworkSwitchPrompt,
    ContractErrorMessage, setContractErrorMessage,

    Slot1showMenuUnregistered, setSlot1showMenuUnregistered,
    Slot2showMenuUnregistered, setSlot2showMenuUnregistered,
    Slot3showMenuUnregistered, setSlot3showMenuUnregistered,
    Slot4showMenuUnregistered, setSlot4showMenuUnregistered,
    Slot5showMenuUnregistered, setSlot5showMenuUnregistered,
    Slot6showMenuUnregistered, setSlot6showMenuUnregistered,
    Slot7showMenuUnregistered, setSlot7showMenuUnregistered,
    Slot8showMenuUnregistered, setSlot8showMenuUnregistered,
    Slot9showMenuUnregistered, setSlot9showMenuUnregistered,
    Slot10showMenuUnregistered, setSlot10showMenuUnregistered,

    clickedmetadataObj,        setClickedmetadataObj,
    clickedDisplayedTokenId, setClickedDisplayedTokenId,
    clickedSlotContractAddress, setClickedSlotContractAddress,
    clickedSlotIndex, setClickedSlotIndex,
    clickedSlotImageUrl, setClickedSlotImageUrl,
    clickedNftSlotOdds, setClickedNftSlotOdds,
    clickedSlotStock, setClickedSlotStock,
    clickedSlotObj, setClickedSlotObj,

    capsuleTokenPaymentContract, setcapsuleTokenPaymentContract


  } 

  const location = useLocation();

  useEffect(()=>{
    setcreatingNewMachine(props.creatingMachine);
  },[props.creatingMachine]);

  useEffect(()=>{
    setshowManager(props.showManager);
  },[props.showManager]);

  useEffect(()=>{
    let temp = location.pathname.replace('/machine/', '');
    temp = temp.replace('/', '');
    console.log('SETTING MACHINE ADDRESS: ',temp)
    setMachineContractAddress(temp);
    
    props.creatingMachine? setcreatingNewMachine(true): setcreatingNewMachine(false);
    props.showManager? setshowManager(true): setshowManager(false);
  },[location.pathname]);

  useEffect(()=>{
    // console.log('\t\tshowRegisteredInventory is now: ',showRegisteredInventory);
  },[showRegisteredInventory]);


  const [] = useState();
  useEffect(()=>{
    // console.log('scene transition UPDATED: ', sceneTransition)
  },[sceneTransition]);


  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };



  return ( 
    // <MoralisProvider appId="mMa2kNXSIzwSJIltiZ9xXxFo852tmvnBul790I40" serverUrl="https://rffrl9tjeact.usemoralis.com:2053/server">
      <OddsAndSlotAddys.Provider value={{NftSlotContractAddresses, setNftSlotContractAddresses, NftSlotOdds, setNftSlotOdds}} >
      <NftMoreInfoContext.Provider value={contextObj} >
        <QueryClientProvider client={queryClient}>
        <ContractInfoGrabber />
        <ImageControlledLoader />
        <BuyCapsuleContractInfoGrabber />


          {showManager? 
            <div>
              <Manager />
            </div>
          :<></>}
          
          {ContractErrorMessage? 
            <div>
              <StatusMessageDiv />
            </div>
          :<></>}
          {displayNetworkSwitchPrompt? 
        <div style={{fontSize:'1.2vw', textAlign:'center', borderRadius:'10px', color:'#fff', zIndex:'9999', width:'25vw', height:'57vh', position:'fixed', top:'25%',left:'38%',border:'1px dashed #ffcc00', backgroundColor:'rgba(10,10,10,.99)',display:'flex',justifyContent:'center',alignItems:'center'}}>
          This dapp runs on <span style={{color:'#ffff00'}}>&nbsp;Rinkeby&nbsp;</span> Ethereum testnet!
          <div onClick={() => switchNetwork("0x80001")} className="selectTokenButtonEmpty" style={{cursor:'pointer', borderRadius:'10px', padding:'0.3vw', border:'1px solid #ccc', position:'absolute', bottom:'35%',}}>
            Switch to Rinkeby
          </div>
        </div>
        
        :<></>}

          {managingInventory&& !creatingNewMachine && !showManager? 
              <>

            <div style={{zIndex:'1', position:'fixed',top:'0.5vh',display:'flex',justifyContent:'center', width:'32vw',left:'30vw', height:'9vh',border:'1px solid #ccc', backgroundColor:'rgba(165, 221, 255 ,0.15)'}}>
              <div style={{color:'#fff', fontSize:'1vw', position:'absolute',  left:'0%',paddingLeft:'1.5%',paddingRight:'1.5%',borderBottomRightRadius:'10px',border:'1px solid #ccc', top:'0%',backgroundColor:ActiveNetworkThemeColorLighter?ActiveNetworkThemeColorLighter:"#ccc"}}>
                ADMIN CONTROL PANEL
              </div>

              
              <div style={{position:'absolute', width:'95%', bottom:'0',height:'50%',border:'0px solid #00ffff'}}>
                <ManageInventoryViewControlDiv />
              </div>
            </div>
          </>
          :<></>}

        {creatingNewMachine? <CreateMachine/> : <>
        
          {!managingInventory && !showManager? 
            <div style={{position:'absolute',width:'100%',height:'10%',display:'flex',justifyContent:'center',}}>
              <MachineNameTitle />
            </div>
          : <></>}







          {showManager? "" : <div className={sceneTransition} style={Styles.scene} >
            <div className="blurredBG" style={{position:'absolute',height:'100%',width:'100%',boxShadow: ActiveNetworkThemeBoxShadow? ActiveNetworkThemeBoxShadow: <></>,backgroundColor:ActiveNetworkThemeColor?ActiveNetworkThemeColor:"#ccc"}}>
            
            </div>
            { managingInventory? <></> :
              <>
              <div>
                <BuyMoreCapsulesDiv />
              </div>

              {/* <div >
                <ActiveSlotCount />
              </div> */}
              <div>
                <VendingCurrentSlots />
              </div>
              <div style={Styles.chestCount}>
                <TreasureChestCount />
              </div>
              <div >
              <MachinePullHistory />
            </div>
              </>
            }
            { managingInventory?
                showRegisteredInventory==0? 
                  <div >
                    <ManageRegisteredInventory />
                  </div>
                : 
                  <></>
                  : <></>
            }
            { managingInventory?
                showRegisteredInventory==1? 
                  <div >
                    <RegisterInventory />
                  </div>
                : 
                  <></>
                  : <></>
            }
            { managingInventory?
                showRegisteredInventory==2? 
                  <div >
                    <DepositToInventory />
                  </div>
                : 
                  <></>
                  : <></>
            }
            { managingInventory?
                showRegisteredInventory==3? 
                  <div >
                    <RevenueStats />
                  </div>
                : 
                  <></>
                  : <></>
            }


            {/* { managingInventory?
                showRegisteredInventory==2? 
                : 
                  <></>
                  : <></>
            } */}
            
            <div style={Styles.DisplayContractInfo}>
              <DisplayContractInfo />
            </div>
            <div style={Styles.TopNavBar}>
              <TopNavBar />
            </div>

            { managingInventory?
                showRegisteredInventory==2? 
                <></>
                  
                : 
                  <></>
                  : <>
                  <div>
                    <GameModeDiv />
                  </div>
                  <div >
                      <NftMoreInfoDiv />
                  </div>
                </>
            }
                    
          </div> }

              

          </>
        }

        
      </QueryClientProvider>
      </NftMoreInfoContext.Provider>
      </OddsAndSlotAddys.Provider>
    // </MoralisProvider>
  );
}

export default App;
