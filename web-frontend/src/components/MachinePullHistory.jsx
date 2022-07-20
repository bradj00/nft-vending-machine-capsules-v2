import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../App'
import { OddsAndSlotAddys } from '../App';
import { useMoralisQuery, useMoralis } from 'react-moralis';
import { useEffect } from 'react';
import '../styles/grid.css';
import { WheelABI } from '../ContractInfo/ContractInfo';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ReactTimeAgo from 'react-time-ago'
import LoadTokenUriAndImage from './snippet-components/LoadTokenUriAndImage.jsx';
import {getEllipsisTxt} from "../helpers/formatters";
import ActiveSlotCount from './snippet-components/ActiveSlotCount';



TimeAgo.addDefaultLocale(en)


const MachinePullHistory = () => {
 
  const {machineLinkBalance, setmachineLinkBalance}                                 = useContext(NftMoreInfoContext);
  const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
  const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
  
  const {PulledImageArray, setPulledImageArray}                     = useContext(NftMoreInfoContext);
   
  const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);

  
  const {winningSlotNumber, setwinningSlotNumber} = useContext(NftMoreInfoContext);
  const {winningTokenId, setwinningTokenId} = useContext(NftMoreInfoContext);

  const {contractAddressWheel, setcontractAddressWheel} = useContext(NftMoreInfoContext);
  const {contractAddressWheelLC, setcontractAddressWheelLC} = useContext(NftMoreInfoContext);
  const {isInitialized, account} = useMoralis();
  const [PullHistory, setPullHistory] = useState([]);
  const [PullRequestHistory, setPullRequestHistory] = useState([]);
  
  
  const [MachineEventsLoaded, setMachineEventsLoaded] = useState(false);








  const fetchMachinePullRequests = new useMoralisQuery( //WALRUS
    "cMachinePullRequestFromFactory",
    (query) =>
      query.equalTo("machineAddress", contractAddressWheelLC ), //the machine we are viewing
    [contractAddressWheelLC],
    {
      autoFetch: true, 
      live: true,
      onLiveEnter: (entity, all) =>  {
        console.log('onLiveEnter (pull request): ',entity,all)
        setPullRequestHistory([...PullRequestHistory, entity]);
       
      }, 
    },
  );

  const fetchMachinePulls = new useMoralisQuery(
    "cMachinePullSucceedFromFactory",
    (query) =>
      query.equalTo("machineAddress", contractAddressWheelLC ),
    [contractAddressWheelLC],
    {
      autoFetch: false, 
      live: true,
      onLiveEnter: (entity, all) =>  {
        console.log('onLiveEnter (pull success): ',entity,all)
        setPullHistory([...PullHistory, entity]);
        //trigger some cool animations here to draw attention to new recent pull from this machine
      }, //will trigger when data is entered to the table. (quickest response)
      // onLiveCreate: (entity, all) => {console.log('onLiveCreate: ',entity,all)},
      // onLiveDelete: (entity, all) => {console.log('onLiveDelete: ',entity,all)},
      // onLiveLeave: (entity, all) =>  {console.log('onLiveLeave: ',entity,all)},
      // onLiveUpdate: (entity, all) => {console.log('onLiveUpdate: ',entity,all)}, //will trigger when block becomes finalized
    },
  );



  useEffect(()=>{
    if (contractAddressWheelLC){
      // console.log('\t\t\t\t\tFetching machine pull history from Moralis DB',contractAddressWheelLC);
      fetchMachinePulls.fetch({
        onSuccess: async (thing) => {
          console.log('!!!!!!!!!!! Receieved machine pull history from Moralis DB ', thing);
          setPullHistory(thing);
          setMachineEventsLoaded(true);
        },
        onError: (err) => console.log('HUGE HUGE ERROR: ',err)
      });
      fetchMachinePullRequests.fetch({
        onSuccess: async (thing) => {
          // console.log('\t\t\t\t\tReceieved machine pull request from Moralis DB ', thing); //we dont care about this. Only new ones coming in. This is for testing.
          setPullRequestHistory(thing);
        },
        onError: (err) => console.log('HUGE HUGE ERROR: ',err)
      });
    }
  },[contractAddressWheelLC]) 



  useEffect(()=>{
    if (PullHistory){
      // console.log('PULL HISTORY: ',PullHistory);
      if (MachineEventsLoaded==true){window.location.reload(false)}
    }
  },[PullHistory]);

  useEffect(()=>{
    if (PullRequestHistory){
      // console.log('\t\t\tPULL REQUEST: ',PullRequestHistory);
    }
  },[PullRequestHistory]);



  
  return (
    <div style={{ position:'absolute',width: '20%',height: '60%',color: "#fff",right:'1%',top:'35%',backgroundColor :ActiveNetworkThemeColor? ActiveNetworkThemeColor :'rgba(165, 221, 255 ,0.15)',borderRadius:'10px',padding:'2%',display:'flex',justifyContent:'center',alignItems:'center',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'2px solid rgba(100,100,100,.2)',}}>
       <div style={{ position:'absolute', top:'1%',fontSize:'1.5vw'}}>Wheel Events</div>
       <div style={{position:'absolute',top:'10%',left:'1%',width:'98%',paddingRight:'5%',height:'89%', overflowY:'scroll'}}>
       
       {PullRequestHistory && PullHistory && account? 
        PullRequestHistory.slice(0).reverse().map((entry, index)=>{
          if (PullHistory.some(e => e.attributes.requestId === entry.attributes.requestId)) {
            // console.log('\t\t\t********** request id has been fulfilled: ',)
          }
          else {
            // console.log('\t\t\t********** fulfilled id has no matching reqeuest id', entry.attributes.requestId)

            if(entry.attributes.requesterAddress != account.toLowerCase()){ //if it's not ours
              return(
                <div key={index} className="recentPullDiv"  style={{ padding:'14px',marginBottom:'8px',position:'relative' }}>
                  <div style={{fontSize:'2vw',color:'lightblue'}}> <ReactTimeAgo date={entry.attributes.block_timestamp} locale="en-US"/> </div>
                  <div> Requester: {getEllipsisTxt(entry.attributes.requesterAddress, 5)} </div>
                  <div> TX hash: <a href={'https://rinkeby.etherscan.io/tx/'+entry.attributes.transaction_hash} target="blank" style={{color: '#8ebf42'}}>Etherscan..</a></div>
                </div>
              )
            }else {
              return(
                <div key={index} className="recentPullDivOurs"  style={{marginLeft:'0.5vw', padding:'6px',marginBottom:'8px',position:'relative' }}>
                  <div style={{ display:'flex',justifyContent:'center',fontStyle:'italic'}}>
                    <div> Awaiting Chainlink VRF to be included in block</div>
                  </div>
                  <div style={{fontSize:'1vw',color:'lightblue'}}> <ReactTimeAgo date={entry.attributes.block_timestamp} locale="en-US"/> </div>
                  <div> Requester: {getEllipsisTxt(entry.attributes.requesterAddress, 5)} </div>
                  <div> TX hash: <a href={'https://rinkeby.etherscan.io/tx/'+entry.attributes.transaction_hash} target="blank" style={{color: '#8ebf42'}}>Etherscan..</a></div>
                </div>
              )

            }
          }
          // return(
          //   <div key={index}>
            
          //   </div>
          // )
        })

        : <></>
       }
       
       

       {PullHistory? 
        PullHistory.slice(0).reverse().map((entry, index)=>{
          
          return(
            // <div key={index} className="recentPullDiv" onClick={()=>{window.open('https://opensea.io','mywindow');}} style={{cursor:'pointer', padding:'14px',marginBottom:'8px',position:'relative' }}>
              <div key={index} style={{marginLeft:'0.4vw', width:'97%',}}>
                <div  className="recentPullDiv"  style={{ padding:'14px',marginBottom:'8px',position:'relative',width:'100%',}}>
                  <div style={{fontSize:'1vw',color:'lightblue'}}> <ReactTimeAgo date={entry.attributes.block_timestamp} locale="en-US"/> </div>
                  <div style={{fontSize:'0.8vw',}}> ID: {entry.attributes.nftTokenId} </div>
                  <div style={{fontSize:'0.8vw',}}> Winning Slot: {entry.attributes.winningSlot} </div>
                  <div style={{fontSize:'0.8vw',}}> TX hash: <a href={'https://rinkeby.etherscan.io/tx/'+entry.attributes.transaction_hash} target="blank" style={{color: '#8ebf42'}}>Etherscan..</a></div>
                  <div style={{fontSize:'0.8vw',width:'30%',right:'2%',top:'0.5%',padding:'3px',position:'absolute',}}>
                    {/* <img width="100%" src="https://gateway.pinata.cloud/ipfs/QmdXXL4b3Pxx27AtPtf9CDC6Dj6dCudWe5E1vuGv8KrQgy/legendary/legendary-1057.png"></img> */}
                    <LoadTokenUriAndImage winningSlot={entry.attributes.winningSlot} tokenId={entry.attributes.nftTokenId}/>

                  </div>

                </div>
              </div>
          )
        })
        :<></>
      }
      </div>
     
       
    </div>
  )
}

export default MachinePullHistory