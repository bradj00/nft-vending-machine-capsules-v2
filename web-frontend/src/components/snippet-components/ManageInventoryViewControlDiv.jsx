import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../../App';
import ConstructionIcon from '@mui/icons-material/Construction';
const ManageInventoryViewControlDiv = () => {
    const {ManageSalesInventoryColor, setManageSalesInventoryColor} = useContext(NftMoreInfoContext);
    const {DepositInventoryColor, setDepositInventoryColor} = useContext(NftMoreInfoContext);
    const {UnRegisteredInventoryColor, setUnRegisteredInventoryColor} = useContext(NftMoreInfoContext);
    const {RegisteredInventoryColor,   setRegisteredInventoryColor  } = useContext(NftMoreInfoContext);
    const {showRegisteredInventory,   setshowRegisteredInventory  } = useContext(NftMoreInfoContext);
    const {displayMetaData,   setdisplayMetaData  } = useContext(NftMoreInfoContext);
    const {displayDiagnosticPage,   setdisplayDiagnosticPage  } = useContext(NftMoreInfoContext);
  
    function showRegistered(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#00ff00");
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#666");
        setshowRegisteredInventory(0);
    }
    function showUnregistered(){
        setRegisteredInventoryColor("#00ff00");
        setUnRegisteredInventoryColor("#666");  
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#666");
        setshowRegisteredInventory(1);
    }
    function showDepositInventory(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#666"); 
        setDepositInventoryColor("#00ff00");  
        setManageSalesInventoryColor("#666"); 
        setshowRegisteredInventory(2);
    }
    function showRevenue(){
        setRegisteredInventoryColor("#666");
        setUnRegisteredInventoryColor("#666");  
        setDepositInventoryColor("#666");  
        setManageSalesInventoryColor("#00ff00");
        setshowRegisteredInventory(3);
    }


  return ( 
    <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'5%', justifyContent:'center', zIndex:'0',position:'absolute',bottom:'0%',left:'2%',fontSize:'1vw',width:'100%',height:'100%',}}>
        <div className="adminButton" onClick={()=>{showDepositInventory()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'15px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: DepositInventoryColor }}>
        Deposit
        </div>
        <div className="adminButton" onClick={()=>{showUnregistered()}} style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'15px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: RegisteredInventoryColor }}>
        Unregistered
        </div>
        <div className="adminButton" onClick={()=>{showRegistered()}}  style={{width:'95%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'15px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1',cursor:'pointer',  color: UnRegisteredInventoryColor }}>
        In-Service
        </div>
        <div className="adminButton" onClick={()=>{showRevenue()}} style={{width:'100%', height:'80%', backgroundColor:'rgba(255,255,255,0.1)',borderRadius:'15px', display:'flex', justifyContent:'center', alignItems:'center', zIndex:'1', cursor:'pointer', color: ManageSalesInventoryColor, paddingLeft:'0.1vw',paddingRight:'0.1vw',fontSize:'100%', }}>
        Revenue
        </div>

        <div onClick={()=>{ console.log(displayMetaData); setdisplayMetaData(!displayMetaData) }} style={{display:'flex', justifyContent:'right', alignItems:'center', backgroundColor:'rgba(255,255,255,0.1)',cursor:'pointer', color:displayMetaData?'#fff' : "#888",position:'fixed', top:'5vh',right:'20vw',height:'4vh',padding:'1vw',borderRadius:'25px', border:'0.5px solid #999'}}>
            {displayMetaData? <><i className="fa-solid fa-eye"></i>&nbsp; MetaData</> : <><i className="fa-solid fa-eye-slash"></i>&nbsp; MetaData</>}
        </div>
        {/* <div onClick={()=>{ console.log(displayDiagnosticPage); setdisplayDiagnosticPage(!displayDiagnosticPage) }} style={{display:'flex', justifyContent:'right', alignItems:'center', backgroundColor:'rgba(255,255,255,0.1)',cursor:'pointer', color:displayDiagnosticPage?'#fff' : "#888",position:'fixed', top:'5vh',right:'10vw',height:'4vh',padding:'1vw',borderRadius:'25px', border:'0.5px solid #999'}}>
            {displayDiagnosticPage? <><ConstructionIcon /> &nbsp; Diagnostics</> : <><ConstructionIcon />&nbsp; Diagnostics</>}
        </div> */}
    </div>
  )
}

export default ManageInventoryViewControlDiv