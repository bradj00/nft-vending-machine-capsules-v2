import React, {useContext, useEffect, useState} from 'react'
import { NftMoreInfoContext } from '../App'

const WinnerImagePodium = () => {
    const {slotImageObj, setslotImageObj} = useContext(NftMoreInfoContext);
    const {winningSlotNumber, setwinningSlotNumber} = useContext(NftMoreInfoContext);
    const [final, setFinal] = useState();

    useEffect(()=>{
        if (winningSlotNumber){
        if (slotImageObj){
            slotImageObj[""+(winningSlotNumber+1)+""] ? setFinal(slotImageObj[""+(winningSlotNumber+1)+""]) : console.log('ignoring update because Object is null...'); 
        }
        }
    },[slotImageObj])

    useEffect(()=>{
        if (winningSlotNumber){
            console.log('updated winning slot number: ',winningSlotNumber);
            console.log(slotImageObj);
            if (slotImageObj != null){
                slotImageObj[""+(winningSlotNumber+1)+""] ? setFinal(slotImageObj[""+(winningSlotNumber+1)+""]) : console.log('ignoring update because Object is null') 
            }
        }
    },[winningSlotNumber]);

    return (
    <div>
        <img src = "https://i.imgur.com/Y6AORih.png"></img>
        <br></br>
        <div className="fadeInDelayed" style={{position:'absolute', top:'30%',left:'36%', width:'1%', color:'#fff',fontSize:'15px', }}>
            {final?
                <img width="300vw" src={final}></img>
                : "..."
             }
        </div>

    </div>
  )
}

export default WinnerImagePodium