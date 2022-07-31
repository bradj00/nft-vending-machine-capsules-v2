import React, {useContext, useState, useEffect} from 'react'
import { NftMoreInfoContext } from '../../App';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { WheelFactoryContractAddress, WheelFactoryABI, WheelABI } from '../../ContractInfo/ContractInfo';
import RefreshIcon from '@mui/icons-material/Refresh';
import '../../styles/tempStyles.css';

const ManageInventoryViewControlDiv = () => {

    const {isWeb3Enabled, account} = useMoralis();
    const {ManageSalesInventoryColor, setManageSalesInventoryColor} = useContext(NftMoreInfoContext);
    const {DepositInventoryColor, setDepositInventoryColor} = useContext(NftMoreInfoContext);
    const {UnRegisteredInventoryColor, setUnRegisteredInventoryColor} = useContext(NftMoreInfoContext);
    const {RegisteredInventoryColor,   setRegisteredInventoryColor  } = useContext(NftMoreInfoContext);
    const {showRegisteredInventory,   setshowRegisteredInventory  } = useContext(NftMoreInfoContext);
    const {displayMetaData,   setdisplayMetaData  } = useContext(NftMoreInfoContext);
    const {displayDiagnosticPage,   setdisplayDiagnosticPage  } = useContext(NftMoreInfoContext);
    const {refreshRegisteredSlotData,   setrefreshRegisteredSlotData  } = useContext(NftMoreInfoContext);
    const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
    const {AllRegisteredTokens , setAllRegisteredTokens} = useContext(NftMoreInfoContext);
    
    
    
    const [DisableRefreshButton,setDisableRefreshButton] = useState(false);

    // function showRegistered(){
    //     setRegisteredInventoryColor("#666");
    //     setUnRegisteredInventoryColor("#00ff00");
    //     setDepositInventoryColor("#666");  
    //     setManageSalesInventoryColor("#666");
    //     setshowRegisteredInventory(0);
    // }
    function showUnregistered(){
        setRegisteredInventoryColor("#00ff00");
        setUnRegisteredInventoryColor("#666");  
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#666");
        setshowRegisteredInventory(1);
    }
    function showUnregistered2(){
        setRegisteredInventoryColor("#00ff00");
        setUnRegisteredInventoryColor("#666");  
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#666");
        setshowRegisteredInventory(11);
    }
    function showDepositInventory(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#666"); 
        setDepositInventoryColor("#00ff00");  
        setManageSalesInventoryColor("#666"); 
        setshowRegisteredInventory(2);
    }
    function showDepositInventory2(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#666"); 
        setDepositInventoryColor("#00ff00");  
        setManageSalesInventoryColor("#666"); 
        setshowRegisteredInventory(22);
    }
    function showRegistered(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#666");  
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#00ff00");
        setshowRegisteredInventory(3);
    }

    
    const getSlotWinnerOffsets = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel,
        functionName: "getslotWinnerOffsets",
    });

    function refreshTheData() {
        setDisableRefreshButton(true);
        setrefreshRegisteredSlotData(true);
        gamePaused.runContractFunction();
    
        getAllRegisteredForSlot1.runContractFunction();
        getAllRegisteredForSlot2.runContractFunction();
        getAllRegisteredForSlot3.runContractFunction();
        getAllRegisteredForSlot4.runContractFunction();
        getAllRegisteredForSlot5.runContractFunction();
        getAllRegisteredForSlot6.runContractFunction();
        getAllRegisteredForSlot7.runContractFunction();
        getAllRegisteredForSlot8.runContractFunction();
        getAllRegisteredForSlot9.runContractFunction();
        getAllRegisteredForSlot10.runContractFunction();
    
        
    
        getErc721BalanceMCPC.runContractFunction();
        getErc721BalanceGTNT.runContractFunction();
    
        getSlotWinnerOffsets.runContractFunction({
          onError: (error) =>{
            console.log('getSlotWinnerOffsets ERROR: ',error);
          },
        });
        setTimeout(()=>{
            setDisableRefreshButton(false);
        },10000);
      }

      const getErc721BalanceGTNT = useWeb3Contract({
        abi: WheelABI,
        contractAddress: "0x70F49fe6495eC79CEaEF637fB81AC381c4530e8e",
        functionName: "balanceOf",
        params:{
          owner: account
        }
      });
    const getErc721BalanceMCPC = useWeb3Contract({
        abi: WheelABI,
        contractAddress: "0x1a7b2b6F7Ad590555CeE80E490EA730aFB4638C6",
        functionName: "balanceOf",
        params:{
          owner: account
        }
      });
      const gamePaused = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "isGamePaused",
      });
    
      const getAllRegisteredForSlot1 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 0
        }
      });
    const getAllRegisteredForSlot2 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 1
        }
      });
    const getAllRegisteredForSlot3 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 2
        }
      });
    const getAllRegisteredForSlot4 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 3
        }
      });
    const getAllRegisteredForSlot5 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 4
        }
      });
    const getAllRegisteredForSlot6 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 5
        }
      });
    const getAllRegisteredForSlot7 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 6
        }
      });
    const getAllRegisteredForSlot8 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 7
        }
      });
    const getAllRegisteredForSlot9 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 8
        }
      });
    const getAllRegisteredForSlot10 = useWeb3Contract({
        abi: WheelABI,
        contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
        functionName: "getAllRegisteredForSlot",
        params:{
          slotIndex: 9
        }
      });

      useEffect(()=>{
        // console.log('slot data: ',' 1:',getAllRegisteredForSlot1.data,' 2:', getAllRegisteredForSlot2.data,' 3:', getAllRegisteredForSlot3.data,' 4:',getAllRegisteredForSlot4.data, ' 5:',getAllRegisteredForSlot5.data,' 6:',getAllRegisteredForSlot6.data, ' 7:',getAllRegisteredForSlot7.data,' 8:', getAllRegisteredForSlot8.data,' 9:', getAllRegisteredForSlot9.data, ' 10:',getAllRegisteredForSlot10.data,)
        setAllRegisteredTokens([getAllRegisteredForSlot1.data, getAllRegisteredForSlot2.data, getAllRegisteredForSlot3.data, getAllRegisteredForSlot4.data, getAllRegisteredForSlot5.data, getAllRegisteredForSlot6.data, getAllRegisteredForSlot7.data, getAllRegisteredForSlot8.data, getAllRegisteredForSlot9.data, getAllRegisteredForSlot10.data]);
      
      },[getAllRegisteredForSlot1.data, getAllRegisteredForSlot2.data, getAllRegisteredForSlot3.data, getAllRegisteredForSlot4.data, getAllRegisteredForSlot5.data, getAllRegisteredForSlot6.data, getAllRegisteredForSlot7.data, getAllRegisteredForSlot8.data, getAllRegisteredForSlot9.data, getAllRegisteredForSlot10.data, ])
    

  return ( 
    <div style={{display:'flex', justifyContent:'center', gap:'5%',  zIndex:'0',position:'absolute',bottom:'0%',left:'0%',fontSize:'1vw',width:'100%',height:'100%',}}>
        <div className="adminButton" onClick={()=>{showDepositInventory()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: DepositInventoryColor }}>
        Deposit
        </div>
        <div className="adminButton" onClick={()=>{showDepositInventory2()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: DepositInventoryColor }}>
        D2
        </div>
        <div className="adminButton" onClick={()=>{showUnregistered()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: RegisteredInventoryColor }}>
        Register
        </div>
        <div className="adminButton" onClick={()=>{showUnregistered2()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: RegisteredInventoryColor }}>
        R2
        </div>
        {/* <div className="adminButton" onClick={()=>{showRegistered()}}  style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'15px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',cursor:'pointer',  color: UnRegisteredInventoryColor }}>
        Manage
        </div> */}
        <div className="adminButton" onClick={()=>{showRegistered()}} style={{width:'100%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'5px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: ManageSalesInventoryColor, paddingLeft:'0.1vw',paddingRight:'0.1vw',fontSize:'100%', }}>
        Manage
        </div>

        {/* <div onClick={()=>{ console.log(displayMetaData); setdisplayMetaData(!displayMetaData) }} style={{display:'flex', justifyContent:'right', alignItems:'center', backgroundColor:'rgba(255,255,255,0.1)',cursor:'pointer', color:displayMetaData?'#fff' : "#888",position:'fixed', top:'5vh',right:'20vw',height:'4vh',padding:'1vw',borderRadius:'25px', border:'0.5px solid #999'}}>
            {displayMetaData? <><i className="fa-solid fa-eye"></i>&nbsp; MetaData</> : <><i className="fa-solid fa-eye-slash"></i>&nbsp; MetaData</>}
        </div> */}
        {/* <div onClick={()=>{ console.log(displayDiagnosticPage); setdisplayDiagnosticPage(!displayDiagnosticPage) }} style={{display:'flex', justifyContent:'right', alignItems:'center', backgroundColor:'rgba(255,255,255,0.1)',cursor:'pointer', color:displayDiagnosticPage?'#fff' : "#888",position:'fixed', top:'5vh',right:'10vw',height:'4vh',padding:'1vw',borderRadius:'25px', border:'0.5px solid #999'}}>
            {displayDiagnosticPage? <><ConstructionIcon /> &nbsp; Diagnostics</> : <><ConstructionIcon />&nbsp; Diagnostics</>}
        </div> */}
        <div onClick={()=>{ DisableRefreshButton? <></> :refreshTheData() }} title={DisableRefreshButton?"fetching data...":"refresh chain data"} className={DisableRefreshButton? "disabledhoverRefreshIcon":"hoverRefreshIcon"} style={{ padding:'0.5vw',cursor:DisableRefreshButton? 'not-allowed':'pointer', position:'fixed', top:'3%', right:'5%',transform:'scale(3)', }}>
            <RefreshIcon />
        </div>

        <div style={{position:'fixed', right:'20%', top:'3%',color:'#fff', border:gamePaused.data?'1px solid #f00':'1px solid #0f0', width:'6%', display:'flex', justifyContent:'center'}}>
            <div style={{textAlign:'center'}}>
                Wheel:<br></br>
                <div style={{color:gamePaused.data?'#ff0000':'#00ff00'}}>{gamePaused.data?'Paused':'Active'}</div>
            </div>
        </div>
        

    </div>
  )
}

export default ManageInventoryViewControlDiv