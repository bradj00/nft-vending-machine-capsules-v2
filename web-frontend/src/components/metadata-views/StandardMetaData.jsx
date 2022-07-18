import React, {useEffect, useState, useContext} from 'react';
import { NftMoreInfoContext } from '../../App';
import { OddsAndSlotAddys } from '../../App';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

import { Textfit } from 'react-textfit';

const StandardMetaData = (props) => {
    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setclickedSlotObj} = useContext(NftMoreInfoContext);
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);

    const [displayedTokenId, setdisplayedTokenId] = useState();
    const [metadataObj, setmetadataObj] = useState();

    function clickedThisImage(imageUrl, slotNumber){
        console.log('#################### ',imageUrl, slotNumber);
        setclickedNftImage(imageUrl);
        setselectedSlotAddress( props.slotContractAddress );
        setclickedSlotObj(props.slotObj);
        setselectedSlotContractName(props.contractName);
        setselectedSlotContractSymbol(props.contractSymbol);
      }
    return (
        <>
        {NftSlotContractAddresses[props.slotIndex-1] != "0x0000000000000000000000000000000000000000"?
           <span className=" " style={props.thisStyle}>
               <img className="imgBorder" style={{objectFit:'scale-down'}} onClick={()=>{clickedThisImage(props.slotImageUrl, props.slotIndex)}}  src={props.slotImageUrl? props.slotImageUrl : "https://i.imgur.com/4lpxSNZ.png"}></img>
               <br></br>
               <div style={{display:'flex', fontFamily:'Roboto',justifyContent:'center', color:'#fff',  zIndex:'-1',position:'absolute',borderRadius:'10px', width:'100%', height:'150%', backgroundColor:'rgba(100,100,150,0.1)', top:'-50%'}}>
                <div style={{position:'absolute', display:'flex', justifyContent:'center', paddingTop:'5%', backgroundColor:'rgba(255,255,255,0.05)',width:'95%',height:'30%',top:'2%', borderRadius:'10px',}}>


                    <div style={{position:'absolute',top:'5%',left:'0%', display:'flex', justifyContent:'center', width:'100%', color:'#ffffff',fontSize:'100%',}}>
                    <Textfit mode="single">{props.metadataObj? props.metadataObj.name? props.metadataObj.name:<></>:<></>} </Textfit>
                    </div>

                    <div style={{position:'absolute',top:'-40%',left:'0%', color:'#ffff00'}}>
                        <GppMaybeIcon />
                    </div>
   
   
   
                       <div style={{width:'100%', position:'absolute',height:'100%', left:'20%',  top:'35%', border:'0px solid #ff00ff' }}>
   
                           
                       </div>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
                       <div style={{position:'absolute', width:'15%', height:"15%", fontSize:'1vh', bottom:'23%', right: '3.5%', textAlign:'center' }}>
                           ID
                       </div>
                       <div className="unformatted" style={{color:'#fff', border:'0.5px solid #fff',padding:'0.3vh', display:'flex', justifyContent:'center', alignItems:'center', fontSize:'1vw', position:'absolute', width:'15%', height:"15%",  bottom:'1%', right: '1%',  borderRadius:'10px',}}>
                           {props.displayedTokenId? props.displayedTokenId:<>xxx</>}
                       </div>
   
                       
                       <div className="unformatted" style={{color:'gold', border:'1px solid gold',display:'flex', justifyContent:'center',alignItems:'center', fontSize:'1.5vw', position:'absolute', width:'35%', height:"20%",  top:'-45%', left: '27%', backgroundColor:'rgba(120,120,120,0.2)', borderRadius:'10px', padding:'5px', }}>
                           {props.NftSlotOdds? <>{props.NftSlotOdds[props.slotIndex-1]>=1?parseInt(props.NftSlotOdds[props.slotIndex-1]): 1} <div style={{fontSize:"1vw"}}>%</div></>: "0%"} <br></br>
                       </div>
                       
                       
                       
                       <div style={{width:'100%',paddingLeft:'5%', position:'absolute',height:'100%',  top:'35%', border:'0px solid #ff00ff' }}>
   
                       </div>
                       
   
                   </div>
               </div>
   
               {/* <div style={{position:'absolute', top:'-40%',right:'-3%',color:'#fff',fontSize:'1.5vw'}}>
               <div style={{position:'absolute', fontSize:'0.8vw', left:'-40%',}}>x</div>{props.slotStock? props.slotStock : "..."}
               </div>  */}
   
           </span>
           : <span className="emptyGlass" style={props.styleEmpty} ><br></br> </span>}
       </>
    )
}

export default StandardMetaData