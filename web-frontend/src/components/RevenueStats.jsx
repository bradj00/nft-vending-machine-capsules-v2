import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import RevenueChart from './Admin Panels/Revenue Panel/RevenueChart.jsx';


const RevenueStats = () => {
  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);

  function returnToMachineView(){
    setmanagingInventory(!managingInventory);
  }

  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '80%',marginBottom:'10vh', position:'absolute',display:'flex',justifyContent:'center', width:'100%'}}>
    <div style={{fontSize:'1.5vw',marginLeft:'1.2vw', marginTop:'-0.3vw', color:"#ffff00"}}>
      Comprehensive Analytics coming soon
    </div>
    <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Machine</button>
    
    <div style={{width:'58vw',left:'1%', position:'absolute',top:'3%',padding:'10px'}}>
      <RevenueChart />
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'90%', width:'40.5vw',right:'1%', position:'absolute',top:'3%',padding:'10px'}}>
      *Add live balance of collected tokens
      <br></br>
      *Add collect button to transfer to machine owner's wallet
    </div>
  </div>
  )
}

export default RevenueStats