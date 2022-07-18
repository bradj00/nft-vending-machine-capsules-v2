import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import RevenueChart from './Admin Panels/Revenue Panel/RevenueChart.jsx';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from 'react';
import { WheelFactoryContractAddress, WheelFactoryABI } from '../ContractInfo/ContractInfo';

const RevenueStats = () => {
  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  const {capsuleTokenPaymentContract, setcapsuleTokenPaymentContract} = useContext(NftMoreInfoContext)
  const {Moralis} = useMoralis();
  
  const [BuyCapsuleContractBalance , setBuyCapsuleContractBalance] = useState();

  const {isWeb3Enabled, account} = useMoralis();
  function returnToMachineView(){
    setmanagingInventory(!managingInventory);
  }


 
  useEffect(()=>{
    if (data){
      console.log('user ERC20 balances: ',data)
      for (let i = 0; i < data.length; i++){
        if (data[i].token_address.toUpperCase() == capsuleTokenPaymentContract.toUpperCase()){
          console.log(data[i].name+'\t'+Moralis.Units.FromWei(data[i].balance));
          setBuyCapsuleContractBalance( Moralis.Units.FromWei(data[i].balance) );
        }
      }
    }
  },[data]);
  
  // useEffect(()=>{
  //   if (BuyCapsuleContract != 'asdf'){
  //     console.log ('fetching with value: ',BuyCapsuleContract);
  //     fetchERC20Balances({ params: { address: BuyCapsuleContract } })
  //   }
  // },[BuyCapsuleContract]) 

  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '80%',marginBottom:'10vh', position:'absolute',display:'flex',justifyContent:'center', width:'100%'}}>
    <div style={{fontSize:'1.5vw',marginLeft:'1.2vw', marginTop:'-0.3vw', color:"#ffff00"}}>
      Analytics coming soon
    </div>
    <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Wheel</button>
    
    <div style={{width:'58vw',left:'1%', position:'absolute',top:'3%',padding:'10px'}}>
      <RevenueChart />
    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'90%', width:'40.5vw',right:'1%', position:'absolute',top:'3%',padding:'10px'}}>
      <div style={{display:'flex', justifyContent:'center',alignItems:'center', fontSize:'3vh', position:'absolute', height:'85%', width:'95%',backgroundColor: 'rgba(0,0,0,0.1)'}}>
        
      <button onClick={() => fetchERC20Balances({ params: { address: BuyCapsuleContract } }) }>Refetch</button><br></br>

        <div>
          {BuyCapsuleContractBalance? BuyCapsuleContractBalance: <></>}
        </div>
      </div>
    </div>
  </div>
  )
}

export default RevenueStats