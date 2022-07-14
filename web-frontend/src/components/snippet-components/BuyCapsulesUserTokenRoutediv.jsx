import React, {useContext} from 'react'
import { NftMoreInfoContext } from '../../App';
import Cancel from '@mui/icons-material/Cancel';

const BuyCapsulesUserTokenRoutediv = () => {
    const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter}         = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
    const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
    const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
    const {userErc20TokenBalance, setuserErc20TokenBalance}                           = useContext(NftMoreInfoContext);
    const {showTokenSelector, setshowTokenSelector}                                   = useContext(NftMoreInfoContext);

    return (
    <div style={{ display:'flex',justifyContent:'left',color:'#fff',overflowY:'scroll',height:'100%', width:'99%',backgroundColor:ActiveNetworkThemeColorOpaque? ActiveNetworkThemeColorOpaque:'rgba(100,100,100,1)', borderRadius:'10px'}}>
            <div onClick={()=>{setshowTokenSelector(!showTokenSelector)}} className="clearFilterIcon" style={{position:'absolute',right:'1.2vw', top:'0.5vh'}}>
              <Cancel /> 
            </div>

        <div style={{marginTop:'5%',}}>
            <div style={{position:'relative',top:'-2vh',fontSize:'2vh',left:'1vw',fontWeight:'bolder',}}>
                Select from your wallet <br></br>(feature coming soon!)
            </div>
            {userErc20TokenBalance? 
                userErc20TokenBalance.map((item, index)=>{
                    return(
                        <div key={index} className="selectATokenEntry" onClick={()=>{}} style={{cursor:'pointer',display:'flex', alignItems:'center', fontSize:'1vw',position:'relative',width:'100%',height:'6vh',marginTop:'1vh',marginBottom:'0.5vh',left:'0.5vw'}}>
                            <div  style={{position:'absolute',left:'1vw',paddingTop:'0.5vh'}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5vw" height="5vh" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  ><circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line></svg>
                            </div>
                            <div  style={{position:'absolute',left:'4vw', }}>
                                {item.symbol}
                            </div>
                        </div>
                    )
                })

            :<></>}
        </div>

    </div>
    )
    }

export default BuyCapsulesUserTokenRoutediv