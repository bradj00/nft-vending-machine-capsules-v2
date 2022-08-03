import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import RevenueChart from './Admin Panels/Revenue Panel/RevenueChart.jsx';
import { useERC20Balances, useMoralis, useWeb3Contract } from "react-moralis";
import { useEffect } from 'react';
import { WheelFactoryContractAddress, WheelFactoryABI, WheelABI } from '../ContractInfo/ContractInfo';
import '../styles/tempStyles.css';
import { OddsAndSlotAddys } from '../App';
import { getEllipsisTxt } from '../helpers/formatters';

const RegisterInventory2 = () => {
  const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);
  const {BuyCapsuleContract, setBuyCapsuleContract} = useContext(NftMoreInfoContext)
  const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();
  const {capsuleTokenPaymentContract, setcapsuleTokenPaymentContract} = useContext(NftMoreInfoContext)
  const {Moralis} = useMoralis();
  const {SlotAccountUnregisteredNFTs, setSlotAccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
  const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
  const [BuyCapsuleContractBalance , setBuyCapsuleContractBalance] = useState();
  const {WheelSlotWinnerOffsets, setWheelSlotWinnerOffsets} = useContext(NftMoreInfoContext);
  const {AllRegisteredTokens , setAllRegisteredTokens} = useContext(NftMoreInfoContext);
  const [MoreTokenInfo , setMoreTokenInfo] = useState();
  const {NftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
  const {NftSlotOdds, setNftSlotOdds}    = useContext(OddsAndSlotAddys);
  const {WheelTokensHeldByAddress, setWheelTokensHeldByAddress} = useContext(NftMoreInfoContext);
  const {uniqueRegistrationSelectionIds, setuniqueRegistrationSelectionIds}    = useContext(NftMoreInfoContext);
  const {SlotsSelectedArr, setSlotsSelectedArr}     = useContext(NftMoreInfoContext);
  const {SlotshowMenu, setSlotshowMenu}     = useContext(NftMoreInfoContext);
  const {refreshRegisteredSlotData, setrefreshRegisteredSlotData} = useContext(NftMoreInfoContext);
  const {registeredFromOnChainBySlot, setregisteredFromOnChainBySlot} = useContext(NftMoreInfoContext);
  const {clickedSlotObj, setClickedSlotObj} = useContext(NftMoreInfoContext);

  const [AllSlotsSelectedArr, setAllSlotsSelectedArr] = useState([]);
  
  
  
  const {isWeb3Enabled, account} = useMoralis();
  
  
  
  
  function returnToMachineView(){
    setmanagingInventory(!managingInventory);
  }

  useEffect(()=>{
    if (MoreTokenInfo){
      console.log('cached info for token: ', MoreTokenInfo);
    }
  },[MoreTokenInfo]);
 
  useEffect(()=>{
    if (SlotsSelectedArr){
      console.log('qqq SlotsSelectedArr: ', SlotsSelectedArr);
    }
  },[SlotsSelectedArr]);
 
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


  function registerTokens(){
    registerTokensForSlot.runContractFunction({
      onSuccess : async (tx)=>tx.wait().then(newTx => {
        console.log('SUCCESS! Check machine',tx)
        setregisteredFromOnChainBySlot({
          1:[],
          2:[],
          3:[],
          4:[],
          5:[],
          6:[],
          7:[],
          8:[],
          9:[],
          10:[],
        })
        setTimeout(()=>{
          setrefreshRegisteredSlotData(true); //ContractInfoGrabber picks this up and re-loads dapp data
        },10000);
      
      }),
      onComplete : (tx) => {
        console.log('Submitted to blockchain for confirmation ',tx)
        // setregisterTokensInfoButton('Awaiting chain confirmation...');
      },
      onError: (error) =>{
      console.log('register inventory:  big ERROR: ',error,"_____"); 
      },
    }); 
  
  }









  const registerTokensForSlot = useWeb3Contract({ 
    abi: WheelABI,
    contractAddress: contractAddressWheel,
    functionName: "RegisterListOfNftIds",
    params: {
        theList: AllSlotsSelectedArr? AllSlotsSelectedArr : 0,
    },
    chain: 'rinkeby'
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
  useEffect(()=>{
    if (clickedSlotObj){
      console.log('clickedSlotObj: ',clickedSlotObj);
      if (clickedSlotObj.metadata){
        if (typeof clickedSlotObj.metadata != "object"){
          //convert to json object so it will load properly in our panel
          setClickedSlotObj({...clickedSlotObj, metadata: JSON.parse(clickedSlotObj.metadata)})
        }
      }
    }
  },[clickedSlotObj])
  
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
  
  
  useEffect(()=>{
    console.log('HUP DATIN ',uniqueRegistrationSelectionIds)
    
    let temp1  = [];
    let temp2  = [];
    let temp3  = [];
    let temp4  = [];
    let temp5  = [];
    let temp6  = [];
    let temp7  = [];
    let temp8  = [];
    let temp9  = [];
    let temp10 = [];
    let tempAll = [];
    for (var key in uniqueRegistrationSelectionIds){
      //for each address, go through 

      for (var tokenId in uniqueRegistrationSelectionIds[key]){
          if (uniqueRegistrationSelectionIds[key][tokenId].clicked == true){
            switch(uniqueRegistrationSelectionIds[key][tokenId].slot){
              case 1:
                temp1.push(parseInt(tokenId))
                break;
              
              case 2:
                temp2.push(parseInt(tokenId))
                break;
              
              case 3:
                temp3.push(parseInt(tokenId))
                break;
              
              case 4:
                temp4.push(parseInt(tokenId))
                break;
              
              case 5:
                temp5.push(parseInt(tokenId))
                break;
              
              case 6:
                temp6.push(parseInt(tokenId))
                break;
              
              case 7:
                temp7.push(parseInt(tokenId))
                break;
              
              case 8:
                temp8.push(parseInt(tokenId))
                break;
              
              case 9:
                temp9.push(parseInt(tokenId))
                break;
              
              case 10:
                temp10.push(parseInt(tokenId))
                break;
              
            }
          }
      }
      tempAll.push(temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9, temp10)
    }
    tempAll = tempAll.slice(0,10);
    setAllSlotsSelectedArr(tempAll);
  },[uniqueRegistrationSelectionIds]);
  
useEffect(()=>{
  if (AllSlotsSelectedArr) {
    console.log('AllSlotsSelectedArr: ',AllSlotsSelectedArr);
  }
},[AllSlotsSelectedArr]);

  function updateClickedTokens(singleImage, slotIndex){
    // console.log('HUP DATIN ', uniqueRegistrationSelectionIds)
    // setSlotshowMenu({...SlotshowMenu, [singleImage.token_id]: !SlotshowMenu[singleImage.token_id]}); // is this even useful in the new format?

    // setuniqueRegistrationSelectionIds({ ...uniqueRegistrationSelectionIds, {uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]}  })
    
    uniqueRegistrationSelectionIds[singleImage.token_address]? 
    uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? 
    setuniqueRegistrationSelectionIds(prevStyle => ({
      ...prevStyle,
      [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: !prevStyle[singleImage.token_address][singleImage.token_id].clicked, slot: slotIndex} }
    }))
    :
    setuniqueRegistrationSelectionIds(prevStyle => ({
      ...prevStyle,
      [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: true, slot: slotIndex}   }
    }))
    :
    setuniqueRegistrationSelectionIds(prevStyle => ({
      ...prevStyle,
      [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: true, slot: slotIndex}   }
    }))
  }











  return (
  <div style={{overflowY:'scroll', backgroundColor :'rgba(165, 221, 255 ,0.15)',top:'9.9vh',alignContent:'center',color: "#fff",height: '90%',marginBottom:'10vh', position:'absolute',display:'flex',alignItems:'center', justifyContent:'center', width:'100%'}}>
    <button style={{zIndex:'555', position:'fixed',top:'2vh',left:'21vw', paddingLeft:'0.2vw',paddingRight:'0.2vw',height:'4vh',cursor:'pointer', fontSize:'0.9vw'}} onClick={()=>{returnToMachineView()}}>View Wheel</button>
    

    <div style={{position:'absolute', top:'3%',display:'flex', overflow:'scroll', maxHeight:'85vh',width:'75%', left:'1vw',}}>
    

    {thisArray.map((slot, index1)=>{
      // console.log('SlotAccountUnregisteredNFTs[ '+(slot+1)+' ]: ',SlotAccountUnregisteredNFTs[slot+1])
      return(
      <table key={index1} style={{ marginRight:'10px',}}>
        <thead>
          
        </thead>
        
        <tbody>
        <tr style={{zIndex:'2',position:'sticky', top:'0',width:'100%',}}>
          <th style={{ height:'1vh', fontSize:'4vh',}}>
            <div style={{position:'absolute', top:'5%', left:'5%',color:'#ffff00', fontSize:'1.5vh',}}> {NftSlotOdds? parseInt(NftSlotOdds[slot]):<>0</>}% </div>
            {slot+1}
          </th>      
        </tr>
        {/* <td style={{height:'5%', backgroundColor:'#333', color:'#00ff00',fontSize:'3vh',}}>
          + {WheelSlotWinnerOffsets[slot]}
        </td> */}

        {/* Slot Contract Symbol */}
        <tr style={{zIndex:'1',}}>
          <td style={{cursor:'pointer', display:'flex', justifyContent:'right', position:'sticky', top:'0',height:'5%',backgroundColor:'#111', color:'cyan', fontWeight:'bold', fontSize:'1.5vh',}}>
            <div style={{position:'absolute',  left:'7%',color:'#00ff00', fontSize:'1.5vh',}}> {AllSlotsSelectedArr? AllSlotsSelectedArr[slot]? AllSlotsSelectedArr[slot].length:<>0</>:<>0</>}</div>
            {WheelTokensHeldByAddress? WheelTokensHeldByAddress[ NftSlotContractAddresses[slot] ].result[0]? WheelTokensHeldByAddress[ NftSlotContractAddresses[slot] ].result[0].symbol : <></>: <></>}
          </td>
        </tr>
        
        {SlotAccountUnregisteredNFTs && SlotAccountUnregisteredNFTs[slot+1] ? 
          SlotAccountUnregisteredNFTs[slot+1].sort((a, b) => (a.token_id > b.token_id) ? 1 : -1).map((item, index)=>{
              // console.log('ITEMMMM: ',item);
              return(
              <tr key={index}  onClick={()=>{setClickedSlotObj(item) ;console.log(item);}}  style={{zIndex:'9999', filter: uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address][item.token_id]? uniqueRegistrationSelectionIds[item.token_address][item.token_id].clicked && uniqueRegistrationSelectionIds[item.token_address][item.token_id].slot!= slot+1? 'opacity(0.1)':'opacity(1.0)':'opacity(1.0)':'opacity(1.0)':'opacity(1.0)'}}>                
                <td   style={{display:'flex', alignItems:'center', justifyContent:'right',fontSize:'1.5vh', cursor:'pointer', backgroundColor: "rgba(0,0,50,0.4)"}}> 
                  <div className={uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address][item.token_id]? uniqueRegistrationSelectionIds[item.token_address][item.token_id].clicked && uniqueRegistrationSelectionIds[item.token_address][item.token_id].slot== slot+1? 'tickboxSelected':'tickboxHover':'tickboxHover':'tickboxHover':'tickboxHover'} onClick={()=>{ console.log(item); uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address]? uniqueRegistrationSelectionIds[item.token_address][item.token_id]? uniqueRegistrationSelectionIds[item.token_address][item.token_id].clicked && uniqueRegistrationSelectionIds[item.token_address][item.token_id].slot!= slot+1?<></>: updateClickedTokens(item, slot+1): updateClickedTokens(item, slot+1): updateClickedTokens(item, slot+1): updateClickedTokens(item, slot+1)} } style={{position:'absolute', left:'5%', width:'1vw',height:'2vh',border:'1px solid #fff',}}></div>
                  { parseInt(item.token_id )} 
                </td>
              </tr>
              )

          })
        : <></>
        }
      </tbody>
      </table>

      )
    })
    
    
    }
    


    </div>
    

    {/* More Token Info DIV */}
    {/* ------------------- */}
    <div style={{backgroundColor:'rgba(0,0,0,0.2)', border:'1px solid rgba(0,0,0,0.2)',borderRadius:'5px', position:'absolute', top:'3%',display:'flex', justifyContent:'center', alignItems:'center', width:'22vw', height:'85vh', right:'1vw',}}>
      <div style={{display:'flex', borderRadius:'5px',justifyContent:'center', alignItems:'center', width:'90%',backgroundColor:'rgba(0,0,0,0.5)', height:'40%', top:'2%',position:'absolute'}}>
        <img style={{maxHeight:'100%', objectFit:'scale-down'}} src={clickedSlotObj? clickedSlotObj.metadata? clickedSlotObj.metadata.image? clickedSlotObj.metadata.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'):<></>:<></>:<></>}></img>
      </div>
      
      <div style={{display:'flex',justifyContent:'center',fontSize:'1vw', backgroundColor:'rgba(0,0,0,0.5)',borderRadius:'5px', position:'absolute', width:'95%', height:'56%', bottom:'0.5%'}}>
        <div style={{position:'absolute', top:'3%', left:'4%',}}>
          View token: 
        </div>
        <div title="View On Etherscan" className="hoverIcon" style={{position:'absolute', top:'3%',height:'7%', left:'30%',}}>
          <a href={clickedSlotObj? "https://rinkeby.etherscan.io/token/"+clickedSlotObj.token_address+"?a="+clickedSlotObj.token_id : <></>} target="asdlfksdjf" >
            <img  style={{maxHeight:'100%',objectFit:'scale-down'}} src="https://etherscan.io/images/brandassets/etherscan-logo-light-circle.png"></img>
          </a>
        </div>
        <div title="View On OpenSea" className="hoverIcon" style={{position:'absolute', top:'3%', height:'7%', left:'40%',}}>
          <a href={clickedSlotObj? "https://testnets.opensea.io/assets/rinkeby/"+clickedSlotObj.token_address+"/"+clickedSlotObj.token_id : <></>} target="asdlfksdjf" >
            <img  style={{maxHeight:'100%',objectFit:'scale-down'}} src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Blue.png"></img>
          </a>
        </div>

        <div className="hoverViewMetadata" style={{border:'1px solid rgba(250,250,250,0.3)',padding:'0.5vh', position:'absolute', top:'2%', right:'3%',}}>
          Metadata 
        </div>

        
        
        <div style={{color:'magenta',fontWeight:'bold', position:'absolute', top:'15%', left:'4%', width:'65%', }}>
          {clickedSlotObj? clickedSlotObj.contract_type.replace(/ERC/, "ERC-"):<></>}
        </div>

        <div style={{ position:'absolute', top:'35%', width:'65%',}}>
          <div style={{position:'absolute',left:'0%'}}>Token Id:</div>  <div style={{position:'absolute', right:'0%', color:'cyan'}}> {clickedSlotObj? clickedSlotObj.token_id: <>...</>} </div>
        </div>

        <div style={{position:'absolute', top:'45%', width:'65%',}}>
          <div style={{position:'absolute', left:'0%'}}>Contract:</div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}> {clickedSlotObj? getEllipsisTxt(clickedSlotObj.token_address, 4): <>...</>} </div> 
        </div>

        <div style={{position:'absolute', top:'55%', width:'65%',}}>
          <div style={{position:'absolute', left:'0%'}}>Symbol:</div>  <div style={{position:'absolute', right:'0%',color:'cyan'}}>{clickedSlotObj? clickedSlotObj.symbol: <>...</>} </div>
        </div>

  
        
        
        <div className="hoverEjectToken" onClick={()=>{ registerTokens() }} style={{display:'flex',justifyContent:'center',border:'1px solid rgba(250,150,150,0.5)', padding:'0.5vh', fontSize:'3vh', position:'absolute',  bottom:'5%', }}>
          Register Tokens (...)
        </div>



      </div>

    </div>
    {/* ------------------- */}


  </div>
  )
}

export default RegisterInventory2