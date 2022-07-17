import React, {useEffect, useState, useContext} from 'react';
import { NftMoreInfoContext } from '../../App';
import { OddsAndSlotAddys } from '../../App';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import VerifiedIcon from '@mui/icons-material/Verified';

const MegaWorldBuilding = (props) => {

const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
const {clickedSlotObj, setclickedSlotObj} = useContext(NftMoreInfoContext);
const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);


function clickedThisImage(imageUrl, slotNumber){
    console.log('#################### ',imageUrl, slotNumber);
    setclickedNftImage(imageUrl);
    setselectedSlotAddress( props.slotContractAddress );
    setclickedSlotObj(props.slotObj);
    setselectedSlotContractName(props.contractName);
    setselectedSlotContractSymbol(props.contractSymbol);
  }
//   useEffect(()=>{
//         if (props.metadataObj){
//             console.log('SOME NEW METADATA: ',props.metadataObj); 
//         }
//     },[props.metadataObj]);

    return (
    <>
     {NftSlotContractAddresses[props.slotIndex-1] != "0x0000000000000000000000000000000000000000"?
        <span className=" " style={props.thisStyle}>
            <img className="imgBorder" style={{objectFit:'scale-down'}} onClick={()=>{clickedThisImage(props.slotImageUrl, props.slotIndex)}}  src={props.slotImageUrl? props.slotImageUrl : "https://i.imgur.com/4lpxSNZ.png"}></img>
            <br></br>
            <div style={{display:'flex', fontFamily:'Roboto',justifyContent:'center', color:'#fff', fontSize:'2vh', zIndex:'-1',position:'absolute',borderRadius:'10px', width:'100%', height:'150%', backgroundColor:'rgba(100,100,150,0.1)', top:'-50%'}}>
                <div style={{position:'absolute', display:'flex', justifyContent:'center', paddingTop:'5%', backgroundColor:'rgba(255,255,255,0.05)',width:'95%',height:'30%',top:'2%', borderRadius:'10px',}}>
                    <div style={{position:'absolute',top:'0',left:'15%'}}>
                    {props.metadataObj? props.metadataObj.attributes[1].value=='male'?<MaleIcon />:<></>:<></>}
                    {props.metadataObj? props.metadataObj.attributes[1].value=='female'?<FemaleIcon />:<></>:<></>}
                    </div>

                    <div style={{position:'absolute',top:'5%',left:'30%', color:'#ffffff',fontSize:'1.5vh',}}>
                        {props.metadataObj? props.metadataObj.name? props.metadataObj.name:<></>:<></>}
                    </div>

                    <div style={{position:'absolute',top:'-40%',left:'0%', color:'#00ff00'}}>
                        <VerifiedIcon />
                    </div>
                    




                    <div style={{width:'100%', position:'absolute',height:'100%', left:'20%',  top:'35%', border:'0px solid #ff00ff' }}>

                        <div style={{position:'relative', margin:'1%', width:'40%', height:'10%', backgroundColor:'#222', border:'1px solid #999'}}>
                            <div style={{ position:'absolute',float:'left', width:props.metadataObj? (props.metadataObj.attributes[1].value/7*100)+'%' :0, height:'8%', backgroundColor:'#0077ff', height:'100%',}}>
                            
                            </div>

                            <div style={{position:'absolute',top:'-40%',left:'-45%',float:'right', fontSize:'1vh'}}>
                            Level
                            </div>
                            
                            <div style={{position:'absolute',top:'-40%',right:'-25%',float:'right', fontSize:'1vh'}}>
                                {props.metadataObj? props.metadataObj.attributes[1].value:<>0</>}
                            </div>

                        </div>
                        
                        <div style={{position:'relative', margin:'1%', width:'40%', height:'10%', backgroundColor:'#222', border:'1px solid #999'}}>
                            <div style={{ position:'absolute',float:'left', width:props.metadataObj? (props.metadataObj.attributes[0].value/10*100)+'%' :0, height:'8%', backgroundColor:'#0077ff', height:'100%',}}>
                            
                            </div>

                            <div style={{position:'absolute',top:'-40%',left:'-45%',float:'right', fontSize:'1vh'}}>
                            Res.
                            </div>
                            
                            <div style={{position:'absolute',top:'-40%',right:'-25%',float:'right', fontSize:'1vh'}}>
                                {props.metadataObj? props.metadataObj.attributes[0].value:<>0</>}
                            </div>

                        </div>
                        
                        <div style={{position:'absolute', bottom:'25%',left:'-15%',  margin:'1%', width:'100%', fontSize:'1vh', height:'40%', }}>
                           X: 400<br></br>
                           Y: 200
                        </div>
                        <div style={{position:'absolute', top:'-33%',left:'-18%',  margin:'1%', width:'100%', color:'gold',fontSize:'1.3vh', height:'40%', }}>
                            #141
                        </div>
                        
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

export default MegaWorldBuilding