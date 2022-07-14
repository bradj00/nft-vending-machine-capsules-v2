import React from 'react'
import "../../styles/grid.css";


const CapsuleIconInventory = () => {
  return (
    <div style={{position:'absolute',width:'100vw'}}>
            {/* top */}
            <img  className="closedTopAtRest" width="5%" style={{zIndex:'1',  position:'absolute',top:'0vh',left:'13vw',border:'0px solid #00ff00'}} src="https://i.imgur.com/OAVm8Zj.png"></img>
        
            {/* bottom  */}
            <img className="closedBottomAtRest" width="5%" style={{opacity:'0.9', zIndex:'2',  position:'absolute',top:'5vh',left:'13vw',border:'0px solid #00ffff'}} src="https://i.imgur.com/0taisc0.png"></img>
        
            {/* ? */}
            <div className="closedQAtRest" width="5%" style={{opacity:'0.9', textShadow:'3px 5px #135050', zIndex:'2', position:'absolute',top:'8vh',left:'14.5vw', fontSize:'3vw',color:'#31DCDC',}}>
                ?
            </div>

    </div>
  )
}

export default CapsuleIconInventory