import React, {useEffect, useState, useContext} from 'react';
import { NftMoreInfoContext } from '../App';
import { OddsAndSlotAddys } from '../App';

const CarouselNftSlot = (props) => {

    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setclickedSlotObj} = useContext(NftMoreInfoContext);
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);

    const [displayedTokenId, setdisplayedTokenId] = useState();

    function clickedThisImage(imageUrl, slotNumber){
        console.log('#################### ',imageUrl, slotNumber);
        setclickedNftImage(imageUrl);
        setselectedSlotAddress( props.slotContractAddress );
        setclickedSlotObj(props.slotObj);
        setselectedSlotContractName(props.contractName);
        setselectedSlotContractSymbol(props.contractSymbol);
      }

      useEffect(()=>{ 
        if (props.tokenId){
            //pick the tokenId of (the lowest index that is not zero AND matches the props.slotIndex)
            //setdisplayedTokenId() 
            
            let temp = props.tokenId.map((item)=>{
                if (item.slotIndex != props.slotIndex){ //if this isn't the slot we are operating on
                    return
                }
                
                if ((item.tokenId != 0) && (item.slotIndex == props.slotIndex)){
                    // return(parseInt(item.tokenId._hex));
                    return({
                        index:   parseInt(item.index._hex),
                        tokenId: parseInt(item.tokenId._hex)
                    });
                }
            })
            temp = temp.filter(function(x) { 
                return x !== undefined;
            });
 
            temp = temp.sort((a, b) => a.index - b.index)

            
            if (temp[0]){
                console.log("displayed token in slot:",props.slotIndex,"\t",temp[0],);
            
                if (temp[0].tokenId){
                    setdisplayedTokenId(temp[0].tokenId)
                }
            }
            else{
                setdisplayedTokenId(0)
            }
        
        } 
      },[props.tokenId])

    return (
        <>
            {NftSlotContractAddresses[props.slotIndex-1] != "0x0000000000000000000000000000000000000000"? 
                <span className=" " style={props.thisStyle}>  
                    <img className="imgBorder" onClick={()=>{clickedThisImage(props.slotImageUrl, props.slotIndex)}}  src={props.slotImageUrl? props.slotImageUrl : "https://i.imgur.com/4lpxSNZ.png"}></img>
                    <br></br>

                    <div className="unformatted" style={{color:'gold', border:'1px solid gold',display:'flex', justifyContent:'center', fontSize:'2vw', position:'absolute', width:'40%', height:"20%",  top:'-40%', left: '27%', backgroundColor:'rgba(120,120,120,0.2)', borderRadius:'10px', padding:'5px', }}>
                        {props.NftSlotOdds? <>{props.NftSlotOdds[props.slotIndex-1]>=1?parseInt(props.NftSlotOdds[props.slotIndex-1]): 1} <div style={{fontSize:"1.5vw"}}>%</div></>: "0%"} <br></br>
                    </div>
                    
                    {displayedTokenId?<>
                    <div className="unformatted" style={{color:'cyan', border:'1px solid cyan',display:'flex', justifyContent:'center', fontSize:'1vw', position:'absolute', width:'15%', height:"8%",  top:'-68%', left: '27%', backgroundColor:'rgba(120,120,120,0.2)', borderRadius:'10px', padding:'5px', }}>
                    <div style={{position:'absolute', fontSize:'0.8vh', top:'0'}}>Slot</div>
                        {props.slotIndex? props.slotIndex:<></>} <br></br>
                    </div>
                    <div className="unformatted" style={{color:'magenta', border:'1px solid magenta',display:'flex', justifyContent:'center', fontSize:'1vw', position:'absolute', width:'15%', height:"8%",  top:'-68%', left: '50%', backgroundColor:'rgba(120,120,120,0.2)', borderRadius:'10px', padding:'5px', }}>
                        <div style={{position:'absolute', fontSize:'0.8vh', top:'0'}}>Token ID</div>
                        {displayedTokenId? displayedTokenId:<></>} <br></br>
                    </div>
                    </>
                    :<></>
                    }

                    <div style={{position:'absolute', top:'-40%',right:'-3%',color:'#fff',fontSize:'1.5vw'}}>
                    <div style={{position:'absolute', fontSize:'0.8vw', left:'-40%',}}>x</div>{props.slotStock? props.slotStock : "..."}
                    </div> 

                </span>
                : <span className="emptyGlass" style={props.styleEmpty} ><br></br> </span>}
        </>
    )
}

export default CarouselNftSlot