import React, {useEffect, useContext} from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import { getEllipsisTxt } from '../../../helpers/formatters';
import { NftMoreInfoContext } from '../../../App';
import { Textfit } from 'react-textfit';
import "../../../styles/tempStyles.css";
const MIMegaWorldCitizen = (props) => {

    const {clickedSlotObj, setClickedSlotObj} = useContext(NftMoreInfoContext);


    useEffect(()=>{
        if (clickedSlotObj.metadata){
            console.log('----- ',clickedSlotObj.metadata)
        }
    },[clickedSlotObj.metadata])

    return (
    <div style={{display:'flex', justifyContent:'center',}}>
         {/* clickedSlotObj.metadata.attributes */}
        <div className="hideScrollbar" style={{ width:'100%',left:'1%', display:'flex',justifyContent:'center', position:'absolute',height:'55%', overflow:'scroll', top:'45%', border:'0px solid #ff00ff' }}>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gridTemplateRows:'repeat(3, 1fr)',gridColumnGap: '1%', gridRowGap:'3%',width:'90%',   height:'85%',position:'absolute',  top:'8%', border:'0px solid #ff00ff',  }}>
            {
                clickedSlotObj.metadata.attributes.map((item, index)=>{
                    return(
                        item.max_value? 
                        <div style={{  backgroundColor:'rgba(50,100,250,0.3)', border:'1px solid #2277cc',   width:'100%', display:'flex', justifyContent:'center', padding:'0.5vh', borderRadius:'10px'}}>
                            <div style={{width:'100%'}}>
                                <div style={{borderRadius:'5px 5px 5px 5px', width:'100%', display:'flex', justifyContent:'center',color:'rgba(200,200,255,1)', backgroundColor:'rgba(50,100,250,0.7)', }}>
                                    <Textfit mode="multi">{item.trait_type} </Textfit>
                                </div>
                                <div style={{display:'flex',alignItems:'center',  justifyContent:'center',}}>
                                <Textfit mode="multi">{item.value} / {item.max_value} </Textfit>
                                </div>
                            </div>
                        </div>
                        : 
                        <div style={{backgroundColor:'rgba(60,30,50,0.6)', border:'1px solid #662255',  width:'100%',  display:'flex', justifyContent:'center', padding:'0.5vh', borderRadius:'10px'}}>
                            <div style={{}}>
                            <div style={{borderRadius:'5px 5px 5px 5px', width:'100%', display:'flex', justifyContent:'center', backgroundColor:'rgba(150,120,150,0.7)', }}>
                                    <Textfit mode="multi">{item.trait_type} </Textfit>
                                </div>
                                <div style={{display:'flex', alignItems:'center', justifyContent:'center',}}>
                                <Textfit mode="multi">{item.value} </Textfit>
                                </div>
                            </div>
                        </div>
                    )
                })



            }

        </div>
        </div>

        <div style={{position:'absolute', top:'2%', fontSize:'3vh'}}>
        {clickedSlotObj.metadata? clickedSlotObj.metadata.name:<></>}
        </div>

        <div style={{position:'absolute', top:'18%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Chance to Pull: <div style={{float:'right', color:'gold'}}>{props.clickedNftSlotOdds? props.clickedNftSlotOdds: <>0%</>}</div>
        </div>
        <div style={{position:'absolute', top:'28%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Contract: <div style={{float:'right', color:'gold'}}> <a href={props.contractAddress?("https://rinkeby.etherscan.io/token/"+props.contractAddress):<></>} target="...blank">{props.contractAddress? <>ES</> :<></>}</a> / <a href={props.contractAddress?("https://rinkeby.etherscan.io/token/"+props.contractAddress):<></>} target="...blank">{props.contractAddress? <>OS</> :<></>}</a></div>
        </div>
        <div style={{position:'absolute', top:'38%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Token ID: <div style={{float:'right', color:'gold'}}>{props.tokenId? props.tokenId:<></>}</div>
        </div>

        <div style={{position:'absolute', top:'18%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Gen: <div style={{float:'right', color:'gold'}}>{props.clickedNftSlotOdds? props.clickedNftSlotOdds: <>...</>}</div>
        </div>
        <div style={{position:'absolute', top:'28%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Slot#: <div style={{float:'right', color:'gold'}}>{props.slotIndex? props.slotIndex:<></>}</div>
        </div>
        <div style={{position:'absolute', top:'38%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
            Type: <div style={{float:'right', color:'gold'}}>ERC-721</div>
        </div>


        <div style={{position:'absolute',display:'flex', top:'5%',right:'1%', color:'#00ffff', fontSize:'1.5vh'}} title="This token contract is on our whitelist and the contract source is published on Etherscan. Still it is up to you to carefully verify before making any purchase!">
        <div style={{}}>V+P&nbsp;</div>
        <div style={{}}><VerifiedIcon /> </div>
            
            
        </div>

    </div>
    )
}

export default MIMegaWorldCitizen