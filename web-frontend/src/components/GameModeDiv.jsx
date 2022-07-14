import React, {useContext} from 'react'
import { NftMoreInfoContext } from '../App';

const Styles ={
    GameModeDiv:{
        position:'absolute',
        width: '23vw',
        height: '20vh',
        color: "#fff",
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        // backgroundColor: 'rgba(50,50,50,0.6)',
        top:'7%',
        left:'1%',
        borderRadius:'10px',
        padding:'10px',
        cursor:'help', 

      },
}

const GameModeDiv = () => {
  const {machineLinkBalance, setmachineLinkBalance} = useContext(NftMoreInfoContext);
  const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
  const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
  const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
  const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
  const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
   
  return (
    <div style={Styles.GameModeDiv}>
        <div style={{fontSize: '1.1vw',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'2px solid rgba(100,100,100,.2)',paddingTop:'2%',paddingLeft:'2%', display:'flex', justifyContent:'center', alignContent:'center', position:'absolute',top:'30%', left:'10%', width:'35%', height:'55%', backgroundColor :ActiveNetworkThemeColor? ActiveNetworkThemeColor :'rgba(165, 221, 255 ,0.15)', borderRadius:'10px'}}>
            Game Mode &nbsp;<div className='hoverTip' style={{position:'absolute',right:'1%',top:'1%',cursor:'help', color:'#00aa00',fontSize: '0.7vw',}}>(❔)</div><br></br>
            <div style={{fontSize: '1vw', position:'absolute', top:'40%', color:'#0099ff'}}>
                Fixed-Percent
            </div>
        </div>
        <div title="Machine Address must hold LINK token to power this machine. If it drops too low, capsule opening will be disabled until more LINK is added." style={{fontSize: '1.1vw',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'2px solid rgba(100,100,100,.2)',paddingTop:'2%',display:'flex', justifyContent:'center', alignContent:'center', position:'absolute',top:'30%', right:'10%', width:'35%', height:'55%', backgroundColor :ActiveNetworkThemeColor? ActiveNetworkThemeColor:'rgba(165, 221, 255 ,0.15)', borderRadius:'10px'}}>
            LINK fuel &nbsp;&nbsp;<div className='hoverTip' style={{position:'absolute',right:'1%',top:'1%',fontSize: '0.7vw',cursor:'help', color:'#00aa00'}}>(❔)</div><br></br>
            <div style={{fontSize: '1.5vw', color:'#555', position:'absolute', top:'40%'}}>
                
                {       machineLinkBalance == 0?
                        <span style={{color:'#ff0022'}}>{machineLinkBalance}</span> 
                        : 
                        <span style={{color:'#00ff00'}}>{machineLinkBalance}</span> 
                 
                 }
            </div>
        </div>
    </div>
  )
}

export default GameModeDiv