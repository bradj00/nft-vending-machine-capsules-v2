import React, {useContext, useState} from 'react'
import { NftMoreInfoContext } from '../../../App';
import '../../../styles/grid.css';
import {useERC20Balances, useWeb3Contract, useMoralisWeb3Api, useMoralis,useNFTBalances } from 'react-moralis';
import { useEffect } from 'react';
import {WheelABI} from '../../../ContractInfo/ContractInfo.jsx';
import { OddsAndSlotAddys } from '../../../App';
import { ReactQueryDevtools } from 'react-query/devtools';
import {
    useQuery,
    useQueryClient,
    useMutation,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import MCPCitizenStatBar from '../../snippet-components/MCPCitizenStatBar';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';
import Cancel from '@mui/icons-material/Cancel';
import MCPCitizenFilterSlider from '../../snippet-components/MCPCitizenFilterSlider';
import MCPCitizenFilterSliderGen from '../../snippet-components/MCPCitizenFilterSliderGen';
import NoImageTokenDescriptionDiv from '../../snippet-components/NoImageTokenDescriptionDiv';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';


const UnregisteredNftSlot = (props) => {

    const Web3Api = useMoralisWeb3Api();
    const {account, isInitialized} = useMoralis();
    const queryClient = useQueryClient()
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
    const {activeSlotCounter, setActiveSlotCounter}    = useContext(NftMoreInfoContext);
  
    const {MachineContractAddress, setMachineContractAddress,}    = useContext(NftMoreInfoContext);
    
    const {slotIdFilter, setslotIdFilter} = useContext(NftMoreInfoContext);
    const [slotIdFilterDelay, setslotIdFilterDelay] = useState({
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

    const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque} = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter} = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}   = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}             = useContext(NftMoreInfoContext);
  
    const {slotNameAndSymbol, setslotNameAndSymbol} = useContext(NftMoreInfoContext);
    // const {props.SlotAccountUnregisteredNFTs, setprops.SlotAccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot2AccountUnregisteredNFTs, setSlot2AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot3AccountUnregisteredNFTs, setSlot3AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot4AccountUnregisteredNFTs, setSlot4AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot5AccountUnregisteredNFTs, setSlot5AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot6AccountUnregisteredNFTs, setSlot6AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot7AccountUnregisteredNFTs, setSlot7AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot8AccountUnregisteredNFTs, setSlot8AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot9AccountUnregisteredNFTs, setSlot9AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    const {Slot10AccountUnregisteredNFTs, setSlot10AccountUnregisteredNFTs} = useContext(NftMoreInfoContext);
    
    const {slotInventory1tokenInfoArray, setslotInventory1tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory2tokenInfoArray, setslotInventory2tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory3tokenInfoArray, setslotInventory3tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory4tokenInfoArray, setslotInventory4tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory5tokenInfoArray, setslotInventory5tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory6tokenInfoArray, setslotInventory6tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory7tokenInfoArray, setslotInventory7tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory8tokenInfoArray, setslotInventory8tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory9tokenInfoArray, setslotInventory9tokenInfoArray}    = useContext(NftMoreInfoContext);
    const {slotInventory10tokenInfoArray, setslotInventory10tokenInfoArray}    = useContext(NftMoreInfoContext);
    
    const {uniqueRegistrationSelectionIds, setuniqueRegistrationSelectionIds}    = useContext(NftMoreInfoContext);
    
    const {displayMetaData, setdisplayMetaData}    = useContext(NftMoreInfoContext);
  
  
  
  
  
  
    const [displayedItems, setdisplayedItems] = useState({});
  
  
    const [TotalRegisterTokenCount, setTotalRegisterTokenCount] = useState(0);
  
  
    const [mcpStatGTLT, setmcpStatGTLT] = useState(true);
    const [displayFilterSlot, setdisplayFilterSlot] = useState(false);
  
  
    const [AllSlotsSelectedArr, setAllSlotsSelectedArr] = useState([]);
  
  const [mcpcIfilterSlot1, setmcpcIfilterSlot1] = useState(0);
  const [mcpcSfilterSlot1, setmcpcSfilterSlot1] = useState(0);
  const [mcpcCfilterSlot1, setmcpcCfilterSlot1] = useState(0);
  const [mcpcAfilterSlot1, setmcpcAfilterSlot1] = useState(0);
  const [mcpcLfilterSlot1, setmcpcLfilterSlot1] = useState(0);
  const [mcpcEfilterSlot1, setmcpcEfilterSlot1] = useState(0);
  const [mcpcGenfilterSlot1, setmcpcGenfilterSlot1] = useState(0);


  
    const [slot1MaxLoad, setslot1MaxLoad] = useState(3);
    const [slot2MaxLoad, setslot2MaxLoad] = useState(3);
    const [slot3MaxLoad, setslot3MaxLoad] = useState(3);
    const [slot4MaxLoad, setslot4MaxLoad] = useState(3);
    const [slot5MaxLoad, setslot5MaxLoad] = useState(3);
    const [slot6MaxLoad, setslot6MaxLoad] = useState(3);
    const [slot7MaxLoad, setslot7MaxLoad] = useState(3);
    const [slot8MaxLoad, setslot8MaxLoad] = useState(3);
    const [slot9MaxLoad, setslot9MaxLoad] = useState(3);
    const [slot10MaxLoad, setslot10MaxLoad] = useState(3);
  
  
    const [Slot1SelectedArr, setSlot1SelectedArr] = useState([]);
    const [Slot2SelectedArr, setSlot2SelectedArr] = useState([]);
    const [Slot3SelectedArr, setSlot3SelectedArr] = useState([]);
    const [Slot4SelectedArr, setSlot4SelectedArr] = useState([]);
    const [Slot5SelectedArr, setSlot5SelectedArr] = useState([]);
    const [Slot6SelectedArr, setSlot6SelectedArr] = useState([]);
    const [Slot7SelectedArr, setSlot7SelectedArr] = useState([]);
    const [Slot8SelectedArr, setSlot8SelectedArr] = useState([]);
    const [Slot9SelectedArr, setSlot9SelectedArr] = useState([]);
    const [Slot10SelectedArr, setSlot10SelectedArr] = useState([]);
  
    const {TimerOuter, setTimerOuter} = useContext(NftMoreInfoContext);
  
    // const {props.SlotshowMenu, props.setSlotshowMenu} = useContext(NftMoreInfoContext);
    const {Slot2showMenu, setSlot2showMenu} = useContext(NftMoreInfoContext);
    const {Slot3showMenu, setSlot3showMenu} = useContext(NftMoreInfoContext);
    const {Slot4showMenu, setSlot4showMenu} = useContext(NftMoreInfoContext);
    const {Slot5showMenu, setSlot5showMenu} = useContext(NftMoreInfoContext);
    const {Slot6showMenu, setSlot6showMenu} = useContext(NftMoreInfoContext);
    const {Slot7showMenu, setSlot7showMenu} = useContext(NftMoreInfoContext);
    const {Slot8showMenu, setSlot8showMenu} = useContext(NftMoreInfoContext);
    const {Slot9showMenu, setSlot9showMenu} = useContext(NftMoreInfoContext);
    const {Slot10showMenu, setSlot10showMenu} = useContext(NftMoreInfoContext);
    
    const {ToolTipTextSlot1, setToolTipTextSlot1} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot2, setToolTipTextSlot2} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot3, setToolTipTextSlot3} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot4, setToolTipTextSlot4} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot5, setToolTipTextSlot5} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot6, setToolTipTextSlot6} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot7, setToolTipTextSlot7} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot8, setToolTipTextSlot8} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot9, setToolTipTextSlot9} = useContext(NftMoreInfoContext);
    const {ToolTipTextSlot10, setToolTipTextSlot10} = useContext(NftMoreInfoContext);
  
    
    function filtersApplied(){
      if (mcpcIfilterSlot1 || mcpcSfilterSlot1 || mcpcCfilterSlot1 || mcpcAfilterSlot1 || mcpcLfilterSlot1 || mcpcEfilterSlot1){
        return true;
      }
        if ((slotIdFilter[props.slotIndex] != '-1') && (slotIdFilter[props.slotIndex] != '')){
          return true;
        }
        else return false;
        
      }
      function clearSlotFilters() {
        console.log(slotIdFilter);
        setmcpcIfilterSlot1(0);
        setmcpcSfilterSlot1(0);
        setmcpcCfilterSlot1(0);
        setmcpcAfilterSlot1(0);
        setmcpcLfilterSlot1(0);
        setmcpcEfilterSlot1(0);
        
        setslotIdFilter({...slotIdFilter, [props.slotIndex]:'-1'})
        setslotIdFilterDelay({...slotIdFilterDelay, [props.slotIndex]:'-1'})
        setdisplayFilterSlot(false);
      }

      function isObject(obj){
        return obj !== undefined && obj !== null && obj.constructor == Object;
      }

      useEffect(()=>{
            if (props.SlotAccountUnregisteredNFTs){
                  console.log(props.slotIndex, ' SlotAccountUnregisteredNFTs: ',props.SlotAccountUnregisteredNFTs);
              }
          },[props.SlotAccountUnregisteredNFTs])
          
          function isMCPcontract(address){
            // if (props.slotIndex == 1){
              //     return true;
              // }
              switch (address){
                case '0x726e1b4841968c0c3eebeef880e60875b745b3cx':
                  return true;
                  default:
                    return false;
                    
                  }
                }
                
                //   useEffect(()=>{
                  //     if (slotIdFilter){
                    //         console.log('token id filter changed: ',slotIdFilter);
                    //     }
                    //   },[slotIdFilter])
                    
                    useEffect(() => {
                      if(slotIdFilterDelay[props.slotIndex] != '-1'){
                        const timeOutId = setTimeout(() => setslotIdFilter(slotIdFilterDelay) , 400);
                        return () => clearTimeout(timeOutId);
                      }
                    }, [slotIdFilterDelay]);
                    
                    // useEffect(()=>{
                    //   console.log('updated: ',uniqueRegistrationSelectionIds);
                    // },[uniqueRegistrationSelectionIds])
                    
                    function updateClickedTokens(singleImage){
                      console.log('HUP DATIN ', uniqueRegistrationSelectionIds)
                      props.setSlotshowMenu({...props.SlotshowMenu, [singleImage.token_id]: !props.SlotshowMenu[singleImage.token_id]});
                      // setuniqueRegistrationSelectionIds({ ...uniqueRegistrationSelectionIds, {uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]}  })
                      
                      uniqueRegistrationSelectionIds[singleImage.token_address]? 
                      uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? 
                      setuniqueRegistrationSelectionIds(prevStyle => ({
                        ...prevStyle,
                        [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: !prevStyle[singleImage.token_address][singleImage.token_id].clicked, slot: props.slotIndex} }
                      }))
                      :
                      setuniqueRegistrationSelectionIds(prevStyle => ({
                        ...prevStyle,
                        [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: true, slot: props.slotIndex}   }
                      }))
                      :
                      setuniqueRegistrationSelectionIds(prevStyle => ({
                        ...prevStyle,
                        [singleImage.token_address]: { ...prevStyle[singleImage.token_address], [singleImage.token_id]: {clicked: true, slot: props.slotIndex}   }
                      }))
                    }

  return (
    <div>
        {slotNameAndSymbol[props.slotIndex]?<div  style={{fontSize:'0.85vw', zIndex:'2',position:'relative', display:'flex', justifyContent:'left',width:'100%',border:'0px solid #00ff00',  }}>
              <div onClick={()=>{setdisplayFilterSlot(!displayFilterSlot)}} className={filtersApplied() ? "filterIconActive" : "filterIcon"} style={{position:'absolute',top:'0%',right:'0%',}}>
              <FilterAltOffIcon /> 
              </div>
              <div onClick={()=>{clearSlotFilters()}} className="clearFilterIcon" style={{position:'absolute',right:'1.2vw',}}>
              <Cancel /> 
              </div>

            <div style={{color:'#fff', zIndex:'999',display:'flex', justifyContent:'center',marginLeft:'0.5vw',  fontSize:'80%', zIndex:'2',position:'absolute',marginTop:'-80%', width:'65%', top:'13.5vh',backgroundColor:'rgba(0,0,0,0.7)', border:'0.5px solid #aaa', padding:'0.4vw', borderRadius:'10px',}}>
              <div style={{position:'absolute', top:'-3vh'}}>
                Slot {parseInt(props.slotIndex)}
              </div>
              <div style={{position:'relative',}}>
                {
                  slotNameAndSymbol[props.slotIndex]? slotNameAndSymbol[props.slotIndex].name :<></>
                }  
              </div>
              
              {displayFilterSlot?
              isMCPcontract(NftSlotContractAddresses[props.slotIndex])?
              <div style={{cursor:'pointer',position:'absolute',top:'110%',width:'10vw',height:'26vh', backgroundColor: ActiveNetworkThemeColorOpaque? ActiveNetworkThemeColorOpaque: 'rgba(50,50,50,0.6)', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor : '1px solid rgba(0,0,0,0.6)', borderRadius:'10px',}}>
                  
                  <div onClick={()=>{setmcpStatGTLT(!mcpStatGTLT)}} style={{position:'absolute', top:'1vh', right:'0.0vw', width:'90%', textAlign:'right', fontSize:'0.8vw',}}>
                    <div style={{marginRight:'0.2vw',marginTop:'0.5vw',fontSize:'1.5vw'}}>
                      {mcpStatGTLT? <div style={{color:'#00dd00'}}>&#62;=</div>: <div style={{color:'#ff2222'}}>&#60;=</div>} 
                    </div>
                  </div>
                  <div className="maleIcon" style={{position:'absolute',fontSize:'1.5vw', top:'0%', left:'0.2vw', width:'1ch'}}>
                  👦
                  </div>
                  <div className="femaleIcon" style={{ position:'absolute',fontSize:'1.5vw', top:'0%', left:'2vw', width:'1ch'}}>
                  👩
                  </div>

                  <div style={{position:'absolute',bottom:'2%',width:'100%',}}>

                    <div style={{position:'absolute',fontSize:'1vw', marginLeft:'0.2vw',marginTop:'0.2vw',paddingRight:'1vw', width:'1ch'}}>
                        I
                        S
                        C
                        A
                        L
                        E
                        Gen
                    </div>

                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcIfilterSlot1} setFilterStat={setmcpcIfilterSlot1}/></div>
                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcSfilterSlot1} setFilterStat={setmcpcSfilterSlot1}/></div>
                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcCfilterSlot1} setFilterStat={setmcpcCfilterSlot1}/></div>
                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcAfilterSlot1} setFilterStat={setmcpcAfilterSlot1}/></div>
                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcLfilterSlot1} setFilterStat={setmcpcLfilterSlot1}/></div>
                    <div style={{marginTop:'0.4vw', marginLeft:'1vw',}}><MCPCitizenFilterSlider filterStat={mcpcEfilterSlot1} setFilterStat={setmcpcEfilterSlot1}/></div>
                    
                    
                    <div style={{marginTop:'0.4vw', marginLeft:'2.2vw',}}><MCPCitizenFilterSliderGen /></div>
                    
                    
                    <div style={{position:'absolute',color: mcpStatGTLT? '#00dd00': '#ff2222', top:'0%',right:'1vw', fontSize:'1vw',marginTop:'0.2vw', textAlign:'right',display:'flex', width:'1ch'}}>
                      {mcpcIfilterSlot1}<br></br>
                      {mcpcSfilterSlot1}<br></br>
                      {mcpcCfilterSlot1}<br></br>
                      {mcpcAfilterSlot1}<br></br>
                      {mcpcLfilterSlot1}<br></br>
                      {mcpcEfilterSlot1}<br></br>
                      
                      <div style={{color:'#fff', position:'absolute',bottom:'-17%',right:'-80%',}}>{mcpcGenfilterSlot1==0? "-": mcpcGenfilterSlot1}</div>
                    </div>
                  </div>
                 
                  
              </div>
              :
              <div style={{color:'#fff', marginLeft:'2.5vw',paddingLeft:'1vw', display:'flex',justifyContent:'center', cursor:'pointer',position:'absolute',top:'110%',width:'9vw',height:'5vh', backgroundColor: ActiveNetworkThemeColorOpaque? ActiveNetworkThemeColorOpaque: 'rgba(50,50,50,0.6)', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor : '1px solid rgba(0,0,0,0.6)', borderRadius:'10px',}}>
                  <input
                    type="text"
                    name={props.slotIndex}
                    placeholder="Filter By ID:"
                    style={{color:'#fff',}}
                    value={slotIdFilterDelay[props.slotIndex]=='-1'? '': slotIdFilterDelay[props.slotIndex]}
                    autoFocus 
                    onChange={(value, index) => {setslotIdFilterDelay({...slotIdFilterDelay, [props.slotIndex]:value.target.value}) } }
                  />
              </div>

              :<></>
              }

            </div>
                
  
            
            <div style={{textAlign:'center', border:'0px solid #00ff00', zIndex:'1',position:'absolute', top:'3vh', width:'100%',height:'80%',}}>

              {props.SlotAccountUnregisteredNFTs?props.SlotAccountUnregisteredNFTs.length>0 ?  props.SlotAccountUnregisteredNFTs.map((singleImage, index)=>{
                !isObject(singleImage.metadata) ? singleImage.metadata = JSON.parse(singleImage.metadata):<></>;
              

                // console.log(props.slotIndex,' SSSSSSSSS\t single image: ',singleImage.metadata.image);
                //replace pinata with moralis ipfs domain temporarily
                singleImage.metadata?singleImage.metadata.image? singleImage.metadata.image = singleImage.metadata.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com'):<></>:<></>;

                
                if ((index == slot1MaxLoad)&&(props.SlotAccountUnregisteredNFTs.length > index) && ((slotIdFilter[props.slotIndex] != '-1') || (slotIdFilter[props.slotIndex] != '')) && ( !singleImage.token_id.toString().includes(slotIdFilter[props.slotIndex])) )  {
                  return(
                  // <div style={{textAlign:'center', position:'fixed',bottom:'0vh',}} key={index}>
                    <div key={index} className="gradientCool" onClick={()=>{setslot1MaxLoad(slot1MaxLoad+3)}} style={{ marginLeft:'3.0vw', cursor:'pointer', position:'fixed',bottom:'1vh',}}>
                      {/* <div style={{marginTop:'5vh', fontSize:'0.8vw'}}>( {props.SlotAccountUnregisteredNFTs.length - slot1MaxLoad} )</div> */}
                      <div className="loadMoreImageAnimated " style={{fontSize:'13vh'}}>
                        {/* <ExpandCircleDownSharpIcon /> */}
                        ￬
                      </div>
                    </div>
                  // </div>
                  );
                }
                  if ((index+1 > slot1MaxLoad)&& (slotIdFilter[props.slotIndex] == '-1')){
                    return(
                      <div key={index}>
                      </div>
                    )
                  }
                  


                  if (isMCPcontract(NftSlotContractAddresses[props.slotIndex])){
                    if ((mcpcIfilterSlot1 > singleImage.metadata.attributes[3].value || mcpcSfilterSlot1 > singleImage.metadata.attributes[4].value|| mcpcCfilterSlot1 > singleImage.metadata.attributes[5].value|| mcpcAfilterSlot1 > singleImage.metadata.attributes[6].value || mcpcLfilterSlot1 > singleImage.metadata.attributes[7].value || mcpcEfilterSlot1 > singleImage.metadata.attributes[8].value || (mcpcGenfilterSlot1 &&(singleImage.metadata.attributes[2].value != mcpcGenfilterSlot1)) )){
                        return(<></>)}
                    else { 
                        return(
                        <div style={{border:'1px solid #00ff00',marginBottom:'0.2vw',borderRadius:'10px',border: ActiveNetworkBorderColor?ActiveNetworkBorderColor: '1px solid #666', backgroundColor: ActiveNetworkThemeColorDarker? ActiveNetworkThemeColorDarker: 'rgba(50,50,50,0.6)',}}>
                        <div key={index} style={{position:'relative', display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'4px', paddingLeft:'6px'}}>
                            {/* <img width="100%" className="imgBorder" onClick={()=>{clickedThisImage(singleImage, 1, index)}} src={singleImage}></img> */}
                            {singleImage.metadata?<img width="100%" className="imgBorder" onClick={()=>{props.setSlotshowMenu({...props.SlotshowMenu, [singleImage.token_id]: !props.SlotshowMenu[singleImage.token_id]})}} src={singleImage.metadata? singleImage.metadata.image : "https://i.imgur.com/8LIxN7y.png"}></img>
                            :<NoImageTokenDescriptionDiv tokenInfo={singleImage}/>}
                            {props.SlotshowMenu[singleImage.token_id]? 
                            
                                <div className="hoverTipNftManagerSelected" onClick={()=>{ props.setSlotshowMenu({...props.SlotshowMenu, [singleImage.token_id]: !props.SlotshowMenu[singleImage.token_id]})}} style={{cursor:'pointer', display:'flex', justifyContent:'center', position:'absolute',height:'100%',width:'100%',}}>
                                <div  style={{borderRadius:'10px', display:'flex',justifyContent:'center', alignItems:'center', position:'absolute',width:'95%',height:'30%',backgroundColor:'rgba(0,0,0,0.6)', color:'#fff',fontSize:'100%'}}>
                                    <span style={{fontSize:'100%'}} className="material-icons">cancel</span> &nbsp;( {singleImage.token_id} ) Unselect 
                                </div>
                                </div>
                            :
                            <div className="hoverTipNftManager"  onClick={()=>{ props.setSlotshowMenu({...props.SlotshowMenu, [singleImage.token_id]: !props.SlotshowMenu[singleImage.token_id]})}} style={{cursor:'pointer', display:'flex', justifyContent:'center', position:'absolute',height:'100%',width:'100%',}}>
                                <div  style={{borderRadius:'10px', display:'flex',justifyContent:'center', alignItems:'center', position:'absolute',width:'95%',height:'30%',backgroundColor:'rgba(0,0,0,0.6)', color:'#fff',fontSize:'100%'}}>
                                    <span style={{fontSize:'100%'}} className="material-icons">file_upload</span> &nbsp;( {singleImage.token_id} ) Select to Register 
                                </div>
                            </div>}
                            

                        </div>

                        {isMCPcontract(NftSlotContractAddresses[0]) && displayMetaData? 
                        <div style={{display:'flex', justifyContent:'center', width:'100%',backgroundColor: ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter: 'rgba(50,50,50,0.6)', borderRadius:'10px', border: ActiveNetworkBorderColor?ActiveNetworkBorderColor: '1px solid #666',padding:'0.1vw'}}>
                        
                        <div style={{position:'relative',display:'flex', justifyContent:'center', alignItems:'center',fontSize:'180%',height:'2vw', width:'2vw', backgroundColor: ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter: 'rgba(50,50,50,0.6)',borderRadius:'10px',marginTop:'-22vh',left:'1%',}}>
                            {singleImage.metadata.attributes[2].value}
                        </div>

                        <div style={{position:'relative', marginLeft:'-1.5vw',paddingRight:'1vw', width:'1ch'}}>
                            I
                            S
                            C
                            A
                            L
                            E
                        </div>
                        
                        
                        <div style={{width:'70%',}}>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[3].value}/>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[4].value}/>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[5].value}/>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[6].value}/>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[7].value}/>
                            <MCPCitizenStatBar statValue={singleImage.metadata.attributes[8].value}/>
                        </div>
                        

                        <div style={{position:'relative',paddingRight:'1.5vw',paddingLeft:'0.5vw',textAlign:'right',display:'flex', width:'1ch'}}>
                        
                        {singleImage.metadata.attributes[3].value}<br></br>
                        {singleImage.metadata.attributes[4].value}<br></br>
                        {singleImage.metadata.attributes[5].value}<br></br>
                        {singleImage.metadata.attributes[6].value}<br></br>
                        {singleImage.metadata.attributes[7].value}<br></br>
                        {singleImage.metadata.attributes[8].value}<br></br>
                        </div>

                        </div>
                        
                        :<></>
                        }
                        
                        </div>
                        
                        )
                    }
                  }else if ( ((singleImage.token_id.toString().includes(slotIdFilter[props.slotIndex].toString()) || (slotIdFilter[props.slotIndex] == '-1') )) ){
                      return(
                        <div key={index} style={{position:'relative', display:'flex',justifyContent:'center', alignItems:'center', marginBottom:'4px', paddingLeft:'6px', }}>
                        {/* <img width="100%" className="imgBorder" onClick={()=>{clickedThisImage(singleImage, 1, index)}} src={singleImage}></img> */}
                        {singleImage.metadata?<img  style={{filter: uniqueRegistrationSelectionIds[singleImage.token_address]? uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? (uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].clicked &&uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].slot != props.slotIndex) ? 'saturate(0) opacity(0.3)': 'saturate(1)': 'saturate(1)': 'saturate(1)'}} width="100%" className="imgBorder" onClick={()=>{ uniqueRegistrationSelectionIds[singleImage.token_address]? uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? (uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].clicked &&uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].slot != props.slotIndex) ? <></>: updateClickedTokens(singleImage): updateClickedTokens(singleImage): updateClickedTokens(singleImage)    }} src={singleImage.metadata? singleImage.metadata.image : "https://i.imgur.com/8LIxN7y.png"}></img>
                        : <NoImageTokenDescriptionDiv tokenInfo={singleImage}/>}
                        {props.SlotshowMenu[singleImage.token_id]? 
                        
                            <div className="hoverTipNftManagerSelected" onClick={()=>{ uniqueRegistrationSelectionIds[singleImage.token_address]? uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? (uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].clicked &&uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].slot != props.slotIndex) ? <></>: updateClickedTokens(singleImage): updateClickedTokens(singleImage): updateClickedTokens(singleImage)    }} style={{cursor:'pointer', display:'flex',  justifyContent:'center', position:'absolute',height:'100%',width:'100%',}}>
                                <div  style={{borderRadius:'10px', display:'flex',justifyContent:'center', alignItems:'center', position:'absolute',width:'95%',height:'30%',backgroundColor:'rgba(0,0,0,0.6)', color:'#fff',fontSize:'100%'}}>
                                    <span style={{fontSize:'100%'}} className="material-icons">cancel</span> &nbsp;({singleImage.token_id}) Unselect
                                </div>
                            </div>
                        :
                        <div className="hoverTipNftManager"  onClick={()=>{ uniqueRegistrationSelectionIds[singleImage.token_address]? uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id]? (uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].clicked &&uniqueRegistrationSelectionIds[singleImage.token_address][singleImage.token_id].slot != props.slotIndex) ? <></>: updateClickedTokens(singleImage): updateClickedTokens(singleImage): updateClickedTokens(singleImage)    }} style={{cursor:'pointer', display:'flex', justifyContent:'center', position:'absolute',height:'100%',width:'100%',}}>
                            <div  style={{borderRadius:'10px', display:'flex',justifyContent:'center', alignItems:'center', position:'absolute',width:'95%',height:'35%',backgroundColor:'rgba(0,0,0,0.6)', color:'#fff',fontSize:'100%'}}>
                                <span style={{fontSize:'100%'}} className="material-icons">file_upload</span> &nbsp;<div style={{ position:'absolute',top:'0%',left:'35%',}}>({singleImage.token_id})</div> Select to Register  
                            </div>
                        </div>}
                        

                        </div>
                      )
                  }
              })
              : <></>
              : <></>
              } 
              
              
            </div>
            </div>:<></>}

    </div>
  )
}

export default UnregisteredNftSlot