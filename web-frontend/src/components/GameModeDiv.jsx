import React, {useContext} from 'react'
import { NftMoreInfoContext } from '../App';
import BatteryGauge from 'react-battery-gauge'

const Styles ={
    GameModeDiv:{
        position:'absolute',
        width: '23vw',
        height: '15vh',
        color: "#fff",
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
        // backgroundColor: 'rgba(50,50,50,0.6)',
        bottom:'0vh',
        left:'1%',

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
  const someNumber = .8
  return (
    <div style={Styles.GameModeDiv}>
        <div title="Percentages are fixed. If a slot is empty game is paused until wheel owner refills the slot." style={{fontSize: '1.1vw',border:ActiveNetworkBorderColor? ActiveNetworkBorderColor:'2px solid rgba(100,100,100,.2)',paddingTop:'2%',paddingLeft:'2%', display:'flex', justifyContent:'center', alignContent:'center', position:'absolute',top:'30%', left:'10%', width:'35%', height:'55%', backgroundColor :ActiveNetworkThemeColor? ActiveNetworkThemeColor :'rgba(165, 221, 255 ,0.15)', borderRadius:'10px'}}>
            Game Mode &nbsp;<div className='hoverTip' style={{position:'absolute',right:'1%',top:'1%',cursor:'help', color:'#00aa00',fontSize: '0.7vw',}}>(❔)</div><br></br>
            <div style={{fontSize: '1vw', position:'absolute', top:'40%', color:'#0099ff'}}>
                Fixed-Percent
            </div>
        </div>
        <div  style={{textAlign:'center', display:'flex', justifyContent:'center', fontSize: '1.1vw', position:'absolute',top:'20%', right:'0%', width:'35%', height:'55%', }}>
            <div title="BALANCE: ">
                <div title="This wheel needs LINK token to open capsules. If it drops too low, capsule opening will be disabled until more LINK is added." style={{paddingBottom:'1vh'}}>LINK fuel</div>
            {/* <div style={{fontSize: '1.5vw', color:'#555', position:'absolute', top:'40%'}}>
                
                {       machineLinkBalance == 0?
                        <span style={{color:'#ff0022'}}>{machineLinkBalance}</span> 
                        : 
                        <span style={{color:'#00ff00'}}>{machineLinkBalance}</span> 
                 
                 }
            </div> */}
            <BatteryGauge value={40} size={120} animated={true} charging={false} aspectRatio={0.4} customization={{
                batteryBody: {
                    strokeWidth: 2,
                    cornerRadius: 6,
                    fill: 'none',
                    strokeColor: '#fff'
                },
                batteryCap: {
                    fill: 'none',
                    strokeWidth: 4,
                    strokeColor: '#fff',
                    cornerRadius: 2,
                    capToBodyRatio: 0.4
                },
                batteryMeter: {
                    fill: '#00cc00',
                    lowBatteryValue: 1,
                    lowBatteryFill: 'red',
                    outerGap: 5,
                    noOfCells: 20, // more than 1, will create cell battery
                    interCellsGap: 1
                },
                readingText: {
                    lightContrastColor: '#fff',
                    darkContrastColor: '#fff',
                    lowBatteryColor: 'red',
                    fontFamily: 'Helvetica',
                    fontSize: 14,
                    showPercentage: false
                },
                chargingFlash: {
                    scale: undefined,
                    fill: 'orange',
                    animated: true,
                    animationDuration: 1000
                },
            }}/>
            </div>
        </div>
    </div>
  )
}

export default GameModeDiv