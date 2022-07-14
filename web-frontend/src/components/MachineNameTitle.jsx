import React, {useEffect,useContext} from 'react'
import { NftMoreInfoContext } from '../App';

const MachineNameTitle = () => {
    const {machineNameString, setmachineNameString} = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter} = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor} = useContext(NftMoreInfoContext);

    return (
        <div style={{ top:'1vh', padding:'0.5vw', borderRadius:'10px', border:ActiveNetworkBorderColor? ActiveNetworkBorderColor: '1px solid rgba(50,50,50,0.6)', backgroundColor: ActiveNetworkThemeColorLighter? ActiveNetworkThemeColorLighter: "rgba(50,50,50,0.6)", position:'absolute',color:"#fff",fontSize:'2vw',}}>
            {machineNameString? machineNameString: '...loading title'}
            
        </div>
    )
}

export default MachineNameTitle