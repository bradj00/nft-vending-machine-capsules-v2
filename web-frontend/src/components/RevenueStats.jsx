import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import RevenueChart from './Admin Panels/Revenue Panel/RevenueChart.jsx';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from 'react';
import { WheelFactoryContractAddress, WheelFactoryABI, WheelABI } from '../ContractInfo/ContractInfo';
import '../styles/tempStyles.css';
import { OddsAndSlotAddys } from '../App';
import { getEllipsisTxt } from '../helpers/formatters';

const RevenueStats = () => {
  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  const {capsuleTokenPaymentContract, setcapsuleTokenPaymentContract} = useContext(NftMoreInfoContext)
  const {Moralis} = useMoralis();

  const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
  const [BuyCapsuleContractBalance , setBuyCapsuleContractBalance] = useState();
  const {WheelSlotWinnerOffsets, setWheelSlotWinnerOffsets} = useContext(NftMoreInfoContext);
  const {AllRegisteredTokens , setAllRegisteredTokens} = useContext(NftMoreInfoContext);
  const [MoreTokenInfo , setMoreTokenInfo] = useState();
  const {NftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
  const {WheelTokensHeldByAddress, setWheelTokensHeldByAddress} = useContext(NftMoreInfoContext);


  const {isWeb3Enabled, account} = useMoralis();
  function returnToMachineView(){
    setmanagingInventory(!managingInventory);
  }

  useEffect(()=>{
    if (MoreTokenInfo){
      console.log('cached info for token: ', MoreTokenInfo);
    }
  },[MoreTokenInfo]);
 
  function updateClickedToken (tokenId, slotNumber, indexInSlot){
    const isEjected = WheelTokensHeldByAddress[NftSlotContractAddresses[slotNumber - 1] ].result.filter((item)=>{ return tokenId == parseInt(item.token_id) });
    if (isEjected.length == 0){ setMoreTokenInfo('not in db') }
    else {
      let temp = WheelTokensHeldByAddress[NftSlotContractAddresses[slotNumber - 1] ].result.filter((item)=>{ return tokenId == parseInt(item.token_id) });
      temp = temp[0];
      console.log('TEMP: ',temp);
      if (temp["metadata"] && typeof temp.metadata != "object"){
        temp["metadata"] = JSON.parse(temp.metadata);
      }
      temp.indexInSlot = indexInSlot;
      temp.slotNumber = slotNumber;
      console.log(tokenId, slotNumber, NftSlotContractAddresses[slotNumber - 1], );
      setMoreTokenInfo( temp )
    }
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


  useEffect(()=>{
    console.log('WheelTokensHeldByAddress: ',WheelTokensHeldByAddress)
  },[WheelTokensHeldByAddress]);

  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '90%',marginBottom:'10vh', position:'absolute',display:'flex',alignItems:'center', justifyContent:'center', width:'100%'}}>
    <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Wheel</button>
    {/* <div style={{fontSize:'1.5vw',marginLeft:'1.2vw', marginTop:'-0.3vw', color:"#ffff00"}}>
      Analytics coming soon
    </div>
    
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

 
    {/* <div onClick={()=>{ refreshTheData()}} style={{border:'1px solid #4444aa', padding:'0.5vw',cursor:'pointer', borderRadius:'15px',backgroundColor:'rgba(0,0,0,0.3)', position:'absolute', top:'5%', left:'3%',fontSize:'3vh'}}>
      refresh data
    </div> */}
   
    {/* <div onClick={()=>{ openTheChest()}} style={{border:'1px solid #4444aa', padding:'0.5vw',cursor:'pointer', borderRadius:'15px',backgroundColor:'rgba(0,0,0,0.3)', position:'absolute', top:'5%', left:'15%',fontSize:'3vh'}}>
      open chest
    </div> */}
    
   
   
   {/* <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'5%', left:'35%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:gamePaused.data?'#ff0000':'#00ff00' }}>{gamePaused.data?'Paused':'UnPaused'}</div>
    </div> */}

   {/* <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'1%', right:'35%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:'#00ff00',  }}>MCPC: {getErc721BalanceMCPC.data? parseInt(getErc721BalanceMCPC.data._hex, 16):'...'}</div>
   </div>

   <div style={{ padding:'0.5vw',cursor:'pointer', position:'absolute', top:'1%', right:'15%',fontSize:'3vh'}}>
      <div style={{position:'absolute', right:'0', top:'0%',color:'#ff0000',  }}>GTNT: {getErc721BalanceGTNT.data? parseInt(getErc721BalanceGTNT.data._hex, 16):'...'}</div>
    </div> */}


    <div style={{position:'absolute', top:'3%',display:'flex', overflow:'scroll', maxHeight:'85vh',width:'75%', left:'1vw',}}>
    

    {thisArray.map((slot, index1)=>{
      return(
      <table key={index1} style={{ marginRight:'10px',}}>
        <tr style={{position:'sticky', top:'0',width:'100%',}}>
          <th style={{height:'5%', fontSize:'4vh',}}>{slot+1}</th>      
        </tr>
        {/* <td style={{height:'5%', backgroundColor:'#333', color:'#00ff00',fontSize:'3vh',}}>
          + {WheelSlotWinnerOffsets[slot]}
        </td> */}

        {/* Slot Contract Symbol */}
        <td style={{cursor:'pointer', position:'sticky', top:'9%',height:'5%',backgroundColor:'#111', color:'cyan', fontWeight:'bold', fontSize:'1.5vh',}}>
          {WheelTokensHeldByAddress? WheelTokensHeldByAddress[ NftSlotContractAddresses[slot] ].result[0].symbol : <></>}
        </td>

        {AllRegisteredTokens && AllRegisteredTokens[slot] ? 
          AllRegisteredTokens[slot].map((item, index)=>{
              // console.log('ITEMMMM: ',item);
              return(
              <tr key={index}  style={{zIndex:'9999'}}>                
                <td className="hoverTD"  onClick={ () => { updateClickedToken(parseInt(item._hex,16) , slot+1, index+1) } } style={{cursor:'pointer', backgroundColor: WheelSlotWinnerOffsets[slot] == index? "#660000": WheelSlotWinnerOffsets[slot] < index? '#333':'#333', filter:WheelSlotWinnerOffsets[slot] > index? 'opacity(0.1)':'opacity(1)'}}>{ parseInt(item._hex, 16 )} </td>
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


    {/* More Token Info DIV */}
    {/* ------------------- */}
    <div style={{backgroundColor:'rgba(0,0,0,0.2)', border:'1px solid rgba(0,0,0,0.2)',borderRadius:'5px', position:'absolute', top:'3%',display:'flex', justifyContent:'center', alignItems:'center', width:'22vw', height:'75vh', right:'1vw',}}>
      <div style={{display:'flex', borderRadius:'5px',justifyContent:'center', alignItems:'center', width:'90%',backgroundColor:'rgba(0,0,0,0.5)', height:'40%', top:'2%',position:'absolute'}}>
        {MoreTokenInfo == 'not in db'?<>ejected from contract</>:<img style={{maxHeight:'100%', objectFit:'scale-down'}} src={MoreTokenInfo? MoreTokenInfo != 'not in db'? MoreTokenInfo.metadata.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'):<></>:<></>}></img>}
      </div>
      
      <div style={{display:'flex',justifyContent:'center',fontSize:'1vw', backgroundColor:'rgba(0,0,0,0.5)',borderRadius:'5px', position:'absolute', width:'95%', height:'56%', bottom:'0.5%'}}>
        <div style={{position:'absolute', top:'3%', left:'4%',}}>
          View token: 
        </div>
        <div className="hoverIcon" style={{position:'absolute', top:'3%',height:'7%', left:'30%',}}>
          <img  style={{maxHeight:'100%',objectFit:'scale-down'}} src="https://etherscan.io/images/brandassets/etherscan-logo-light-circle.png"></img>
          
        </div>
        <div className="hoverIcon" style={{position:'absolute', top:'3%', height:'7%', left:'40%',}}>
          <img  style={{maxHeight:'100%',objectFit:'scale-down'}} src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png"></img>
        </div>

        <div className="hoverViewMetadata" style={{border:'1px solid rgba(250,250,250,0.3)',padding:'0.5vh', position:'absolute', top:'2%', right:'3%',}}>
          Metadata 
        </div>
        <div className="hoverViewMetadata" style={{border:'1px solid rgba(250,250,250,0.3)',padding:'0.5vh', position:'absolute', top:'15%', right:'3%',}}>
          Carousel View
        </div>
        
        
        <div style={{color:'magenta',fontWeight:'bold', position:'absolute', top:'15%', left:'4%', width:'55%', }}>
          ERC-721
        </div>

        <div style={{ position:'absolute', top:'29%', left:'4%',width:'55%',}}>
          <div style={{position:'absolute',left:'0%'}}>Token Id:</div>  <div style={{position:'absolute', right:'0%', color:'cyan'}}> {MoreTokenInfo? MoreTokenInfo != 'not in db'? MoreTokenInfo.token_id:<></>:<></>} </div>
        </div>

        <div style={{position:'absolute', top:'39%', left:'4%',width:'55%',}}>
          <div style={{position:'absolute', left:'0%'}}>Contract:</div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}> {MoreTokenInfo? MoreTokenInfo != 'not in db'? getEllipsisTxt(MoreTokenInfo.token_address, 4):<></>:<></>} </div> 
        </div>

        <div style={{position:'absolute', top:'49%', left:'4%',width:'55%',}}>
          <div style={{position:'absolute', left:'0%'}}>Symbol:</div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}>{MoreTokenInfo? MoreTokenInfo != 'not in db'? MoreTokenInfo.symbol:<></>:<></>} </div>
        </div>

        <div style={{position:'absolute', top:'59%', left:'4%',width:'55%', }}>
         <div style={{position:'absolute', left:'0%'}}> Slot: </div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}> {MoreTokenInfo? MoreTokenInfo != 'not in db'? MoreTokenInfo.slotNumber:<></>:<></>} </div>
        </div>
        <div style={{position:'absolute', top:'69%', left:'4%',width:'55%', }}>
         <div style={{position:'absolute', left:'0%'}}> Position: </div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}> {MoreTokenInfo? MoreTokenInfo != 'not in db'? MoreTokenInfo.indexInSlot - WheelSlotWinnerOffsets[MoreTokenInfo.slotNumber-1]:<></>:<></>} </div>
        </div>
        
        
        <div className="hoverEjectToken" style={{display:'flex',justifyContent:'center',border:'1px solid rgba(250,150,150,0.5)', padding:'0.5vh', position:'absolute', width:'35%', bottom:'5%', }}>
          Eject Token
        </div>



      </div>

    </div>
    {/* ------------------- */}


  </div>
  )
}

export default RevenueStats