import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import RevenueChart from './Admin Panels/Revenue Panel/RevenueChart.jsx';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from 'react';
import { WheelFactoryContractAddress, WheelFactoryABI } from '../ContractInfo/ContractInfo';
import {WheelABI} from '../ContractInfo/ContractInfo.jsx';

import '../styles/tempStyles.css';
const RevenueStats = () => {
  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  const {capsuleTokenPaymentContract, setcapsuleTokenPaymentContract} = useContext(NftMoreInfoContext)
  const {Moralis} = useMoralis();
  const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
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

  const getErc721BalanceGTNT = useWeb3Contract({
      abi: WheelABI,
      contractAddress: "0x9B6ACf19D0773079A8260E5fdED2EDE22feaB5d1",
      functionName: "balanceOf",
      params:{
        owner: account
      }
    });
  const getErc721BalanceMCPC = useWeb3Contract({
      abi: WheelABI,
      contractAddress: "0x4886E559A143b323b0D230457136524cb9C045C5",
      functionName: "balanceOf",
      params:{
        owner: account
      }
    });
  
const openChest = useWeb3Contract({
    abi: WheelABI,
    contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
    functionName: "openChest",
    params:{
      chestId: 1
    }
  });

const getAllRegisteredForSlot = useWeb3Contract({
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


const gamePaused = useWeb3Contract({
    abi: WheelABI,
    contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
    functionName: "isGamePaused",
  });

  // useEffect(()=>{
  //   if (getAllRegisteredForSlot.data){
  //     console.log('getAllRegisteredForSlot.data: ',getAllRegisteredForSlot.data);
  //   }
  // },[getAllRegisteredForSlot.data])

  // useEffect(()=>{
  //     console.log('gamePaused.data: ',gamePaused.data);
  // },[gamePaused.data])

  function openTheChest() {
    openChest.runContractFunction(); 
  }
  
  const [totalTokenCount, settotalTokenCount] = useState(0);
  
  function refreshTheData() {

    gamePaused.runContractFunction();
    getAllRegisteredForSlot.runContractFunction(); 
    // getAllRegisteredForSlot2.runContractFunction();
    
    getErc721BalanceMCPC.runContractFunction();
    getErc721BalanceGTNT.runContractFunction();
  }


const thisArray = [1,2,3,4,5,6,7,8,9,10];


  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '80%',marginBottom:'10vh', position:'absolute',display:'flex',alignItems:'center', justifyContent:'center', width:'100%'}}>
    {/* <div style={{fontSize:'1.5vw',marginLeft:'1.2vw', marginTop:'-0.3vw', color:"#ffff00"}}>
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
    </div> */}

 
    <div onClick={()=>{ refreshTheData()}} style={{border:'1px solid #4444aa', padding:'0.5vw',cursor:'pointer', borderRadius:'15px',backgroundColor:'rgba(0,0,0,0.3)', position:'absolute', top:'5%', left:'3%',fontSize:'3vh'}}>
      refresh data
    </div>
   
    <div onClick={()=>{ openTheChest()}} style={{border:'1px solid #4444aa', padding:'0.5vw',cursor:'pointer', borderRadius:'15px',backgroundColor:'rgba(0,0,0,0.3)', position:'absolute', top:'5%', left:'15%',fontSize:'3vh'}}>
      open chest
    </div>
    
    <div  style={{padding:'0.5vw',cursor:'pointer', position:'absolute', top:'5%', left:'40%',fontSize:'3vh'}}>
      {/* token count: {getAllRegisteredForSlot.data && getAllRegisteredForSlot2.data? getAllRegisteredForSlot.data[0].length + getAllRegisteredForSlot2.data[0].length:'...'} */}
      token count: {getAllRegisteredForSlot.data ? getAllRegisteredForSlot.data[0].length:'...'}
    </div>
   
   <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'5%', left:'35%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:gamePaused.data?'#ff0000':'#00ff00' }}>{gamePaused.data?'Paused':'UnPaused'}</div>
    </div>

   <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'1%', right:'35%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:'#00ff00',  }}>MCPC: {getErc721BalanceMCPC.data? parseInt(getErc721BalanceMCPC.data._hex, 16):'...'}</div>
   </div>

   <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'1%', right:'15%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:'#ff0000',  }}>GTNT: {getErc721BalanceGTNT.data? parseInt(getErc721BalanceGTNT.data._hex, 16):'...'}</div>
    </div>


    <div style={{position:'absolute', top:'15%',display:'flex', width:'100%',}}>

    {thisArray.map((slot)=>{
      return(
      <table style={{marginRight:'10px',}}>
        <tr>
          <th style={{fontSize:'4vh',}}>{slot}</th>      
        </tr>
        {getAllRegisteredForSlot.data? 
          getAllRegisteredForSlot.data.map((item, index)=>{
            if (parseInt(item.slotIndex._hex, 16 ) == slot){
              return(
              <tr key={index}>
                {parseInt(item.index._hex, 16 ) == 0?<td style={{color:'#fff', backgroundColor:'#ff0000'}}>{ parseInt(item.index._hex, 16 )} </td> : <td style={{color:'cyan'}}>{parseInt(item.index._hex, 16 )}</td>}
                <td>{parseInt(item.tokenId._hex, 16 )} </td>
              </tr>
              )
            }else return <></>
          })
        : <></>
        }
        {getAllRegisteredForSlot2.data? 
          getAllRegisteredForSlot2.data[0].map((item, index)=>{
            if (parseInt(item.slotIndex._hex, 16 ) == slot){
              return(
              <tr key={index}>
                {parseInt(item.index._hex, 16 ) == 0?<td style={{color:'#fff', backgroundColor:'#ff0000'}}>{ parseInt(item.index._hex, 16 )} </td> : <td style={{color:'magenta'}}>{parseInt(item.index._hex, 16 )}</td>}
                <td>{ parseInt(item.tokenId._hex, 16 )} </td>
              </tr>
              )
            }else return <></>
          })
        : <></>
        }
      </table>

      )
    })
    
    
    }
    


    </div>




  </div>
  )
}

export default RevenueStats