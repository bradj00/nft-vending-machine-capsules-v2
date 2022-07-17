import React, {useEffect} from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
const MIMegaWorldCitizen = (props) => {

    useEffect(()=>{
        if (props.metadataObj){
            console.log('----- ',props.metadataObj)
        }
    },[props.metadataObj])

    return (
    <div style={{display:'flex', justifyContent:'center',}}>
        
        <div style={{ width:'100%',paddingLeft:'5%', position:'absolute',height:'85%',  top:'49%', border:'0px solid #ff00ff' }}>

        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[6].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-5%',float:'right', fontSize:'2vh'}}>
            I
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[6].value:<>0</>}
            </div>

        </div>
        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[3].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-6%',float:'right', fontSize:'2vh'}}>
            S
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[3].value :<>0</>}
            </div>
        </div>
        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[5].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-6%',float:'right', fontSize:'2vh'}}>
            C
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[5].value :<>0</>}
            </div>
        </div>
        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[7].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-6%',float:'right', fontSize:'2vh'}}>
            A
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[7].value :<>0</>}
            </div>
        </div>
        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[8].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-6%',float:'right', fontSize:'2vh'}}>
            L
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[8].value :<>0</>}
            </div>
        </div>
        <div style={{position:'relative', margin:'1%', width:'60%', height:'8%', backgroundColor:'#222', border:'1px solid #004400'}}>
            <div style={{ position:'absolute',float:'left', width:props.metadataObj? props.metadataObj.attributes[4].value*10+'%' :0, height:'8%', backgroundColor:'#00ff00', height:'100%',border:'1px solid #00ff00'}}>
            </div>
            <div style={{position:'absolute',top:'-20%',left:'-6%',float:'right', fontSize:'2vh'}}>
            E
            </div>
            <div style={{position:'absolute',top:'-20%',right:'-12%',float:'right', fontSize:'2vh'}}>
            {props.metadataObj? props.metadataObj.attributes[4].value :<>0</>}
            </div>
        </div>
        </div>

        <div style={{position:'absolute', top:'2%', fontSize:'3vh'}}>
        {props.metadataObj? props.metadataObj.name:<></>}
        </div>
        <div style={{position:'absolute', top:'18%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        Chance to Pull: <div style={{float:'right', color:'gold'}}>{props.clickedNftSlotOdds? props.clickedNftSlotOdds: <>0%</>}</div>
        </div>
        <div style={{position:'absolute', top:'28%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        Contract: <div style={{float:'right', color:'gold'}}>{props.metadataObj? props.contractAddress:<></>}</div>
        </div>
        <div style={{position:'absolute', top:'38%', left:'2%',width:'48%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        Token ID: <div style={{float:'right', color:'gold'}}>{props.tokenId? props.tokenId:<></>}</div>
        </div>

        <div style={{position:'absolute', top:'18%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        Gen: <div style={{float:'right', color:'gold'}}>{props.clickedNftSlotOdds? props.clickedNftSlotOdds: <>0%</>}</div>
        </div>
        <div style={{position:'absolute', top:'28%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        asdf: <div style={{float:'right', color:'gold'}}>{props.metadataObj? props.contractAddress:<></>}</div>
        </div>
        <div style={{position:'absolute', top:'38%', right:'2%',width:'43%', fontSize:'2vh', backgroundColor:'rgba(0,0,0,0.4)',padding:'0 0.3vw 0 0.3vw'}}>
        asdf: <div style={{float:'right', color:'gold'}}>{props.tokenId? props.tokenId:<></>}</div>
        </div>


        <div style={{position:'absolute',display:'flex', top:'5%',right:'1%', color:'#00ff00'}} title="This token contract is on our whitelist and we recognize the project. Still it is up to you to verify before making any purchase!">
        <div style={{}}>Verified</div>
        <div style={{}}><VerifiedIcon /> </div>
            
            
        </div>

    </div>
    )
}

export default MIMegaWorldCitizen