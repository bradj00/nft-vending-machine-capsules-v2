import React, {useCallback, useContext, useState, useEffect} from 'react'
import "../styles/grid.css"
import {useNavigate, useLocation} from 'react-router-dom'
import {useChain} from 'react-moralis';
import { NftMoreInfoContext } from '../App'
import { MachineFactoryContractAddress } from '../ContractInfo/ContractInfo';
import {getEllipsisTxt} from "../helpers/formatters";

const TopNavBar = () => {
  const navigate = useNavigate();
  const goToManagementPage = useCallback(() => 
      navigate('/manage/'+location.pathname.replace('/machine/', ''), {replace: true}), [navigate]
      
    );
  const location = useLocation();

  const { switchNetwork, chainId, chain, account } = useChain();   

  const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque}           = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter}         = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}           = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
  const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
    //
    // ON NETWORK CHANGE, ZERO OUT ALL VALUES !!!!!!!!!!!!!!! ADD THIS OR IT WILL BE BAD !!!!!!!!!!!!!!
    //
  const {displayNetworkSwitchPrompt,setdisplayNetworkSwitchPrompt} = useContext(NftMoreInfoContext);

  useEffect(()=>{
    if (chainId ){
        console.log('network changed: ',chainId);
        if (displayNetworkSwitchPrompt==true){window.location.reload(false)} // we have shown user network switch prompt. They have changed network. We reload the page now.
        setActiveNetworkFriendlyName( chainId );
        friendlyNameChainId(chainId)
        //set all our global variables related to network dependencies here

        if (chainId == '0x13881'){
          setdisplayNetworkSwitchPrompt(false);
        }
        if (chainId != '0x13881'){
          console.log('PLEASE SWITCH TO RINKEBY! Current chain:', chainId)
          setdisplayNetworkSwitchPrompt(true);
        }
    }
  },[chainId]);
  
  function friendlyNameChainId(chainId){
    
    switch(chainId){
        case '0x1': 
            
            setActiveNetworkFriendlyName( "Eth Main" );
            setActiveNetworkThemeColor("rgba(40,40,120,0.2)");
            setActiveNetworkThemeColorOpaque("rgba(40,40,120,1)");
            setActiveNetworkThemeBoxShadow("inset 0px 0px 0px 0px #000022");
            setActiveNetworkMachineFactoryAddress(MachineFactoryContractAddress.ethmain);
            setActiveNetworkBorderColor("1px solid #0000ff");
            break;
            
        case '0x4': 
            
            setActiveNetworkFriendlyName( "Rinkeby" );
            setActiveNetworkThemeColor("rgba(100,100,250,0.1)");
            setActiveNetworkThemeColorOpaque("rgba(30,30,90,1)");

            setActiveNetworkThemeColorLighter("rgba(130,130,250,0.2)");
            setActiveNetworkThemeColorDarker("rgba(80,80,250,0.1)");

            setActiveNetworkThemeBoxShadow("inset 0px 0px 0px 0px #000011");
            setActiveNetworkMachineFactoryAddress(MachineFactoryContractAddress.rinkeby);
            setActiveNetworkBorderColor("1px solid #ffcc00");
            break;
        case '0x13881': 
          setActiveNetworkFriendlyName( "Mumbai" );    
          setActiveNetworkThemeColor("rgba(100,100,250,0.1)");
          setActiveNetworkThemeColorOpaque("rgba(30,30,90,1)");

          setActiveNetworkThemeColorLighter("rgba(130,130,250,0.2)");
          setActiveNetworkThemeColorDarker("rgba(80,80,250,0.1)");

          setActiveNetworkThemeBoxShadow("inset 0px 0px 0px 0px #000011");
          setActiveNetworkMachineFactoryAddress(MachineFactoryContractAddress.mumbai);
          setActiveNetworkBorderColor("1px solid #ffcc00");

          break;
        default:
            return chainId;
            break;
    }
  }


  return (
    <div style={{display:'flex', justifyContent:'center', zIndex:'10000', cursor:'pointer'}}>
        <div>
            <div   onClick={()=>{}} style={{fontSize:'0.8vw',position:'absolute', top:'-15%', left:'-7%',}}>🔗</div>
            <div style={{border:ActiveNetworkBorderColor? ActiveNetworkBorderColor: <></>, fontSize:'0.9vw',position:'absolute', top:'-25%',left:'-0.8vw',width:'60%',height:'75%', background:'#222', borderRadius:'10px',zIndex:'-1',display:'flex', justifyContent:'center', paddingBottom:'13%'}} >
              {ActiveNetworkFriendlyName? ActiveNetworkFriendlyName : <></>}
            </div>
        </div>
        

        <div>
            <div    style={{fontSize:'0.8vw',position:'absolute', top:'-15%', left:'-7%',}}>🔗</div>
            <div onClick={() => {navigator.clipboard.writeText(account)}} style={{fontSize:'0.9vw',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor: <></>, display:'flex', justifyContent:'center',position:'absolute', top:'90%',left:'-8%',width:'65%',height:'75%', background:'#222', borderRadius:'10px',zIndex:'-1',paddingBottom:'12%', color:"#fff"}} >
              <div style={{fontSize:'0.7vw', position:'absolute',top:'5%',left:'0vw',}}>
              👋&nbsp;
              </div>
              {account? getEllipsisTxt(account, 4) : <>sign in</>}
            
            </div>
            <div onClick={() => {navigator.clipboard.writeText(account)}} style={{fontSize:'0.9vw',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor: <></>, display:'flex', justifyContent:'center',position:'absolute', top:'200%',left:'-8%',width:'75%',height:'75%', background:'#222', borderRadius:'10px',zIndex:'-1',paddingBottom:'12%', color:"#fff"}} >
              <div style={{fontSize:'0.5vw', position:'absolute',top:'25%',left:'0.2vw',}}>
              🟢&nbsp;
              </div>
              &nbsp; Service Status
            
            </div>
        </div> 

    </div>
  )
}

export default TopNavBar