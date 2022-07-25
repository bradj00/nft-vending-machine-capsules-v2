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
  const {WheelSlotWinnerOffsets, setWheelSlotWinnerOffsets} = useContext(NftMoreInfoContext);
  const [AllRegisteredTokens , setAllRegisteredTokens] = useState([]);


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
  
const openChest = useWeb3Contract({
    abi: WheelABI,
    contractAddress: contractAddressWheel? contractAddressWheel: "0x0000000000000000000000000000000000000000",
    functionName: "openChest",
    params:{
      chestId: 3
    }
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

  const getSlotWinnerOffsets = useWeb3Contract({
    abi: WheelABI,
    contractAddress: contractAddressWheel,
    functionName: "getslotWinnerOffsets",
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
  useEffect(()=>{
    // console.log('slot data: ',' 1:',getAllRegisteredForSlot1.data,' 2:', getAllRegisteredForSlot2.data,' 3:', getAllRegisteredForSlot3.data,' 4:',getAllRegisteredForSlot4.data, ' 5:',getAllRegisteredForSlot5.data,' 6:',getAllRegisteredForSlot6.data, ' 7:',getAllRegisteredForSlot7.data,' 8:', getAllRegisteredForSlot8.data,' 9:', getAllRegisteredForSlot9.data, ' 10:',getAllRegisteredForSlot10.data,)
    setAllRegisteredTokens([getAllRegisteredForSlot1.data, getAllRegisteredForSlot2.data, getAllRegisteredForSlot3.data, getAllRegisteredForSlot4.data, getAllRegisteredForSlot5.data, getAllRegisteredForSlot6.data, getAllRegisteredForSlot7.data, getAllRegisteredForSlot8.data, getAllRegisteredForSlot9.data, getAllRegisteredForSlot10.data]);
  
  },[getAllRegisteredForSlot1.data, getAllRegisteredForSlot2.data, getAllRegisteredForSlot3.data, getAllRegisteredForSlot4.data, getAllRegisteredForSlot5.data, getAllRegisteredForSlot6.data, getAllRegisteredForSlot7.data, getAllRegisteredForSlot8.data, getAllRegisteredForSlot9.data, getAllRegisteredForSlot10.data, ])

  function openTheChest() {
    openChest.runContractFunction(); 
  }
  
  const [totalTokenCount, settotalTokenCount] = useState(0);
  
  function refreshTheData() {

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

  }
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

const thisArray = [0,1,2,3,4,5,6,7,8,9];


  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '90%',marginBottom:'10vh', position:'absolute',display:'flex',alignItems:'center', justifyContent:'center', width:'100%'}}>
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
      {/* token count: {getAllRegisteredForSlot.data ? getAllRegisteredForSlot.data[0].length:'...'} */}
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


    <div style={{position:'absolute', top:'15%',display:'flex', overflow:'scroll', maxHeight:'75vh',width:'75%', left:'1vw',}}>
    

    {thisArray.map((slot)=>{
      return(
      <table style={{ marginRight:'10px',}}>
        <tr style={{position:'sticky', top:'0',width:'100%',}}>
          <th style={{height:'5%', fontSize:'4vh',}}>{slot+1}</th>      
        </tr>
        {/* <td style={{height:'5%', backgroundColor:'#333', color:'#00ff00',fontSize:'3vh',}}>
          + {WheelSlotWinnerOffsets[slot]}
        </td> */}

        {AllRegisteredTokens && AllRegisteredTokens[slot] ? 
          AllRegisteredTokens[slot].map((item, index)=>{

              return(
              <tr key={index}>                
                <td className="hoverTD" style={{cursor:'pointer', backgroundColor: WheelSlotWinnerOffsets[slot] == index? "#660000": WheelSlotWinnerOffsets[slot] < index? '#333':'#333', filter:WheelSlotWinnerOffsets[slot] > index? 'opacity(0.1)':'opacity(1)'}}>{ parseInt(item._hex, 16 )} </td>
              </tr>
              )

          })
        : <></>
        }
      </table>

      )
    })
    
    
    }
    


    </div>
    <div style={{border:'1px solid #00ff00', position:'absolute', top:'15%',display:'flex', justifyContent:'center', alignItems:'center', width:'22vw', height:'75vh', right:'1vw',}}>
      Clicked Token Picture and Info
    </div>



  </div>
  )
}

export default RevenueStats