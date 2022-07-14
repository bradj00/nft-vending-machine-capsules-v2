import React, {useContext,useState} from 'react'
import "../../styles/grid.css";
import { NftMoreInfoContext } from '../../App';

const CapsuleIcon = () => {
  const {capsuleIconAnimated, setcapsuleIconAnimated} = useContext(NftMoreInfoContext);
  const[expandedCapsule, setExpandedCapsule] = useState(false);


function expandCapsule(){
  setExpandedCapsule(true);
}

function unExpandCapsule(){
  setExpandedCapsule(false);
}

  return (
    <div onMouseEnter={()=>{expandCapsule()}} onMouseLeave={()=>{unExpandCapsule()}} style={{border:'0px solid #ff0000',position:'fixed', top:'5vh', right:'40vw', width:'10vw', height:'10vw', fontSize:'7vw'}}>
            {/* top */}
            {/* <img  className="animatedTop" style={{zIndex:'1',  position:'fixed',top:'-2%',left:'52.8%',border:'0px solid #00ff00'}} src="https://i.imgur.com/OAVm8Zj.png"></img> */}
         {expandedCapsule || capsuleIconAnimated ? 
         <div style={{position:'absolute', filter:'blur(50px)', borderRadius:'50%', boxShadow: '0 0 0 3px #00FFFF', width:'10vw',height:'20vh',display:'flex',justifyContent:'center',marginTop:'5vh',animation:'dance 1.5s infinite'}}></div>
         : <></>}

         {capsuleIconAnimated==false?
          expandedCapsule ? 
         <div style={{position:'absolute', right:'0vw', top:'0%',width:'100%'}}>
            <img  width="100%" className="expandTopAtRest" style={{opacity:'1',zIndex:'1',        position:'absolute',top:'-3vh',left:'0',border:'0px solid #00ff00'}} src="https://i.imgur.com/OAVm8Zj.png"></img>
            <img  width="100%" className="expandBottomAtRest" style={{opacity:'0.6', zIndex:'3',  position:'absolute',top:'0vh',left:'0',border:'0px solid #00ffff'}} src="https://i.imgur.com/0taisc0.png"></img>
            <div  width="100%" className="expandQAtRest" style={{opacity:'0.9', textShadow:'3px 5px #135050', zIndex:'2', position:'absolute', left:'3vw',top:'4vh', fontSize:'100%',color:'#31DCDC',}}>?</div>
        </div>:
        <div style={{position:'absolute', right:'0vw', top:'0%',width:'100%'}}>
            <img  width="100%" className="closedTopAtRest" style={{opacity:'1',zIndex:'1',        position:'absolute',top:'-3vh',left:'0',border:'0px solid #00ff00'}} src="https://i.imgur.com/OAVm8Zj.png"></img>
            <img  width="100%" className="closedBottomAtRest" style={{opacity:'0.6', zIndex:'3',  position:'absolute',top:'0vh',left:'0.1vw',border:'0px solid #00ffff'}} src="https://i.imgur.com/0taisc0.png"></img>
            <div  width="100%" className="closedQAtRest" style={{opacity:'0.9', textShadow:'3px 5px #135050', zIndex:'2', position:'absolute', left:'3vw',top:'4vh', fontSize:'100%',color:'#31DCDC',}}>?</div>
        </div>
            : 
            <>
            <img width="10%" className="animatedTop" style={{opacity:'1', zIndex:'1',  position:'fixed',top:'-2%',left:'52.8%',border:'0px solid #00ff00'}} src="https://i.imgur.com/OAVm8Zj.png"></img>
            <img width="100%" className="animatedBottom" style={{opacity:'0.6', zIndex:'2',  position:'absolute',left:'100%',border:'0px solid #00ffff'}} src="https://i.imgur.com/0taisc0.png"></img>
            <div width="100%" className="animatedQ" style={{opacity:'0.9', textShadow:'3px 5px #135050', zIndex:'1', position:'fixed', left:'57%',top:'5%', fontSize:'100%',color:'#31DCDC',}}>?</div>
            </>
         }
            
    </div>
  )
}

export default CapsuleIcon