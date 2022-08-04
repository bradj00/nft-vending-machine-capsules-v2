import React, {useEffect, useState, useContext} from 'react';
import { NftMoreInfoContext } from '../../App';
import { OddsAndSlotAddys } from '../../App';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';

import { Textfit } from 'react-textfit';

const StandardMetaData = (props) => {
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setClickedSlotObj} = useContext(NftMoreInfoContext);
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);

    const {registeredFromOnChainBySlot, setregisteredFromOnChainBySlot}    = useContext(NftMoreInfoContext);
    const {WheelSlotWinnerOffsets, setWheelSlotWinnerOffsets}    = useContext(NftMoreInfoContext);
    const {WheelTokensHeldByAddress, setWheelTokensHeldByAddress} = useContext(NftMoreInfoContext);


    const [TokenObject, setTokenObject] = useState();
    const [displayedTokenId, setdisplayedTokenId] = useState();
    const [metadataObj, setmetadataObj] = useState();

    useEffect(()=>{
        // console.log('AUXILIARY DETERMINING TOKEN TO DISPLAY IN SLOT: ',props.slotIndex);
        determineTokenToDisplay();

    },[]);
    
    
        useEffect(()=>{
        if(registeredFromOnChainBySlot &&  WheelSlotWinnerOffsets && WheelTokensHeldByAddress){
            // console.log('DETERMINING TOKEN TO DISPLAY IN SLOT: ',props.slotIndex,'**',NftSlotContractAddresses[ props.slotIndex-1 ],"**", registeredFromOnChainBySlot, '**', WheelSlotWinnerOffsets, "***", WheelTokensHeldByAddress);
            determineTokenToDisplay();
        }
    },[registeredFromOnChainBySlot,WheelSlotWinnerOffsets,WheelTokensHeldByAddress])


    function determineTokenToDisplay(){
    
    // registeredFromOnChainBySlot[props.slotIndex]
    // WheelSlotWinnerOffsets[props.slotIndex]

        //take above to find tokenId based on offset from registeredFromOnChainBySlot
        // NftSlotContractAddresses[ props.slotIndex-1 ] lookup WheelTokensHeldByAddress[ NftSlotContractAddresses[ props.slotIndex-1 ] ]
        let displayTokenId;
        let displayedTokenObj = [];
        if (registeredFromOnChainBySlot && WheelSlotWinnerOffsets){
            if (registeredFromOnChainBySlot[props.slotIndex]){
                displayTokenId = registeredFromOnChainBySlot[props.slotIndex][ WheelSlotWinnerOffsets[props.slotIndex-1] ]
                // console.log('[ '+props.slotIndex+' ] want to display token: ',displayTokenId,' with offset of: ',WheelSlotWinnerOffsets[props.slotIndex-1]);
                if (WheelTokensHeldByAddress){
                    if (WheelTokensHeldByAddress[ NftSlotContractAddresses[ props.slotIndex-1 ] ]){
                        displayedTokenObj = WheelTokensHeldByAddress[ NftSlotContractAddresses[ props.slotIndex-1 ] ].result.filter(e => { return e.token_id == displayTokenId })
                    }
                }

            }
        }else {
            // console.log('baaaaad time')
        }
        
        displayedTokenObj? displayedTokenObj[0]?displayedTokenObj[0].metadata? typeof displayedTokenObj[0].metadata != 'object'? displayedTokenObj[0].metadata = JSON.parse(displayedTokenObj[0].metadata):<></>:<></>:<></>:<></>;
        setTokenObject(displayedTokenObj[0]);
        // console.log('[ '+props.slotIndex+' ] -----',registeredFromOnChainBySlot, WheelTokensHeldByAddress)
        if (displayedTokenObj.length > 0){
            // console.log('[ '+props.slotIndex+' ] displayedTokenObj: ',displayedTokenObj? displayedTokenObj[0]? (displayedTokenObj[0]): <></>: <></>);
            // console.log('[ '+props.slotIndex+' ] displayedTokenObj: ',displayedTokenObj? displayedTokenObj[0]? (displayedTokenObj[0].token_id+' '+displayedTokenObj[0].metadata.image): <></>: <></>);
        }else {
            // console.log('empty')
        }
    }




    function clickedThisImage(imageUrl, slotNumber){
        console.log('#################### ',imageUrl, slotNumber);
        setclickedNftImage(imageUrl);
        setselectedSlotAddress( NftSlotContractAddresses[ props.slotIndex-1 ] );
        setClickedSlotObj(TokenObject);
        setselectedSlotContractName(props.contractName);
        setselectedSlotContractSymbol(props.contractSymbol);
      }
    return (
        <>
        {NftSlotContractAddresses[props.slotIndex-1] != "0x0000000000000000000000000000000000000000"?
           <span className=" " style={props.thisStyle}>
               <img className="imgBorder" style={{objectFit:'scale-down'}} onClick={()=>{clickedThisImage(TokenObject? TokenObject.metadata.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com') : 0 , props.slotIndex)}}  src={TokenObject? TokenObject.metadata.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com') : "https://i.imgur.com/4lpxSNZ.png"}></img>
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
                           {/* {props.tokenId? JSON.stringify(props.tokenId):<>xxx</>} */}
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