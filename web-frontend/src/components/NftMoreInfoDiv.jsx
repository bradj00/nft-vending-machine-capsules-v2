import React, {useContext, useEffect, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import {getEllipsisTxt} from "../helpers/formatters";
import useGoogleFonts from 'use-google-fonts'
import MegaWorldCitizen from './metadata-views/MegaWorldCitizen';
import CarouselNftSlot from './CarouselNftSlot';
import { JSONTree } from 'react-json-tree';
import MIMegaWorldCitizen from './metadata-views/more-info-views/MIMegaWorldCitizen';

const NftMoreInfoDiv = () => {
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(NftMoreInfoContext);
    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);

    const {clickedmetadataObj,        setClickedmetadataObj}        = useContext(NftMoreInfoContext);
    const {clickedDisplayedTokenId, setClickedDisplayedTokenId} = useContext(NftMoreInfoContext);
    const {clickedSlotContractAddress, setClickedSlotContractAddress} = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setClickedSlotObj} = useContext(NftMoreInfoContext);
    const {clickedSlotIndex, setClickedSlotIndex} = useContext(NftMoreInfoContext);
    const {clickedSlotImageUrl, setClickedSlotImageUrl} = useContext(NftMoreInfoContext);
    const {clickedNftSlotOdds, setClickedNftSlotOdds} = useContext(NftMoreInfoContext);
    const {clickedSlotStock, setClickedSlotStock} = useContext(NftMoreInfoContext);
    

    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    const {selectedSlotBorderColor, setselectedSlotBorderColor}    = useContext(NftMoreInfoContext);
    const {selectedSlotBackgroundColor, setselectedSlotBackgroundColor}    = useContext(NftMoreInfoContext);
    const {selectedFontColor, setselectedFontColor}    = useContext(NftMoreInfoContext);
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
    
    const {ActiveNetworkChainlinkVRFAddress, setActiveNetworkChainlinkVRFAddress}     = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColor, setActiveNetworkThemeColor}                       = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeBoxShadow, setActiveNetworkThemeBoxShadow}               = useContext(NftMoreInfoContext);
    const {ActiveNetworkFriendlyName, setActiveNetworkFriendlyName}                   = useContext(NftMoreInfoContext);
    const {ActiveNetworkMachineFactoryAddress, setActiveNetworkMachineFactoryAddress} = useContext(NftMoreInfoContext);
    const {ActiveNetworkBorderColor, setActiveNetworkBorderColor}                     = useContext(NftMoreInfoContext);
     
    const {ActiveNetworkThemeColorOpaque, setActiveNetworkThemeColorOpaque}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorLighter, setActiveNetworkThemeColorLighter}           = useContext(NftMoreInfoContext);
    const {ActiveNetworkThemeColorDarker, setActiveNetworkThemeColorDarker}           = useContext(NftMoreInfoContext);

    
    const [selectedContractEtherscanLink, setselectedContractEtherscanLink] = useState();

    useGoogleFonts([
        ['Spirax'],
        ['Roboto'],
    ]);

    useEffect(()=>{
        if(selectedSlotAddress){
            setselectedContractEtherscanLink("https://rinkeby.etherscan.io/address/"+selectedSlotAddress)
        }
    },[selectedSlotAddress])

    useEffect(()=>{
        if(clickedSlotObj){
            // console.log('TUBULAR DUDE: ',clickedSlotObj);
            setselectedSlotBorderColor(ActiveNetworkBorderColor); //HARD CODED
            setselectedSlotBackgroundColor(ActiveNetworkThemeColorDarker);
            setselectedFontColor("#fff");


        }
    },[clickedSlotObj])
    // return (
    //     <div style={{boxShadow: 'inset 0px 0px 2px 2px #333',display:'flex',justifyContent:'center',alignItems:'center', fontSize:clickedSlotObj?'default':'1.2vw', position:'absolute',top:'35%', left:'1%', width:'20%', height:'60%', color:"#fff", backgroundColor :selectedSlotBackgroundColor? selectedSlotBackgroundColor: ActiveNetworkThemeColor? ActiveNetworkThemeColor:'rgba(165, 221, 255 ,0.15)', borderRadius:'10px', border: selectedSlotBorderColor? selectedSlotBorderColor: ActiveNetworkBorderColor? ActiveNetworkBorderColor: '1px solid #FFF', padding:'2%',display:'flex',justifyContent:'center',}}>
    //         {clickedSlotObj||clickedNftImage?<>
    //         <div style={{position:'absolute', top:'2%',width:'100%',display:'flex', justifyContent:'center', fontSize:'120%'}}>
    //             {clickedSlotObj? clickedSlotObj.data.name : <></>}
    //         </div>
    //         <div style={{display:'flex', justifyContent:'center',position:'absolute', width: '80%', height:'50%', top:'15%',}}>
    //             {clickedNftImage? <img style={{objectFit:'scale-down', height:'100%', width:'100%', border: ActiveNetworkBorderColor? ActiveNetworkBorderColor:'1px solid #bbb', borderRadius:'3px',padding:'0.5vh',}} src={clickedNftImage? clickedNftImage: ''}></img>: <img style={{height:'100%', width:'100%', border: selectedSlotBorderColor? selectedSlotBorderColor: ActiveNetworkBorderColor? ActiveNetworkBorderColor: '1px solid #ccc',}}></img>}
    //         </div>

    //         <div style={{position:'absolute', top:'65%', left:'18%', width:'65%', }}>
    //             <ul>   
    //             {  managingInventory?
    //             <>

    //             <div style={{position:'fixed',bottom:'12vh',left:'3vw', width:'16vw',border:'1px solid #aaa'}}>
    //                 <div style={{position:'absolute', bottom:'8%', left:'5%'}}>
    //                     Set Buy Price: <input type="text" id="fname" name="fname"></input> MARBLES
    //                 </div>
    //                 <div style={{position:'absolute', bottom:'2%', left:'5%', width:'50%' }}>
    //                     <button style={{padding:'2% 5% 2% 5%',}}>Eject From Machine </button>
    //                 </div>
    //             </div> 

    //             <div style={{color:selectedFontColor? selectedFontColor: "#fff",fontSize:'100%',}}>
    //                 {selectedSlotContractName? selectedSlotContractName: <></>}
    //             </div>
                
    //             {clickedSlotObj?
    //                 <>
    //                     <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed', top:'41.5%',left:'8%',fontStyle:'italic',fontSize:'70%',}}>
    //                         {clickedSlotObj? parseFloat(clickedSlotObj.slotOdds).toFixed(2) : "..."}% chance to pull
    //                     </div>

    //                     <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'4%',fontSize:'70%',}}>
    //                         <div title="verified" style={{position:'absolute',left:'-33%'}}>✅</div> 
    //                         {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> {getEllipsisTxt(selectedSlotAddress,4)}</a> : "..."}
                            
    //                     </div>
    //                 </>
    //             : <></>}
                
    //             <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'13%',fontSize:'70%',}}>
    //                 {selectedSlotAddress&&clickedSlotObj? <a href={'https://testnets.opensea.io/assets/'+selectedSlotAddress+'/'+clickedSlotObj.id} target='blank' style={{color: '#8ebf42'}}> View On OpenSea</a> : "..."}
    //             </div>

    //             <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  bottom:'6%',left:'5%',fontSize:'70%',}}>
    //                 External URL: {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> www.zombo.com</a> : "..."}
                    
    //             </div>
    //             <div title="Token ID" style={{width:'3vw',height:'4vh',display:'flex', justifyContent:'center',fontSize:'1vw',cursor:'help', color:selectedFontColor? selectedFontColor: "#8ebf42",position:'fixed', top:'35.5%',left:'17.7vw', fontStyle:'italic'}}>
    //                 <div style={{fontSize:'80%', position:'absolute',top:'0%',right:'0.4vw',}}>
    //                     ID
    //                 </div>
    //                 <div style={{color:'#8ebf42',fontSize:'60%', position:'absolute',bottom:'0%',right:'0.4vw',}}>
    //                     {clickedSlotObj? clickedSlotObj.id : "..."}
    //                 </div>
    //             </div>
    //         </>
    //             :
    //             <>
    //                 <div style={{backgroundColor :selectedSlotBackgroundColor? selectedSlotBackgroundColor: ActiveNetworkThemeColor? ActiveNetworkThemeColor: 'rgba(165, 221, 255 ,0.15)',display:'flex', justifyContent:'center', position:'fixed',width:'15%',height:'10%',borderRadius:'5px',left:'3.6%',bottom:'8%',}}>
    //                     <div onClick={()=>{console.log(selectedSlotContractName,selectedSlotContractSymbol)}}style={{color:selectedFontColor? selectedFontColor: "#fff",position:'absolute', top:'-80%',fontSize:'100%',}}>
    //                         {selectedSlotContractName? selectedSlotContractName: <></>}
    //                         {/* bb{selectedSlotContractSymbol? selectedSlotContractSymbol: <></>} */}
    //                     </div>
    //                     <div title="Description"  style={{fontSize:'1vw',color:selectedFontColor? selectedFontColor: "#fff",position:'absolute', width:'95%',height:'95%', overflowY:'scroll'}}>
    //                         <div style={{position:'fixed',left:'3%',bottom:'15%', fontSize:'100%',fontFamily: "'Spirax', sans-serif"}}>“</div> 
    //                         <div style={{fontFamily: "'Roboto', sans-serif"}}>{clickedSlotObj? clickedSlotObj.data.description : "..."}</div> 
    //                         <div style={{fontFamily: "'Spirax', sans-serif",fontSize:'100%',position:'fixed',bottom:'7%',left:'18.8%'}}>”</div>
    //                     </div>
    //                 </div>
                    
    //                 {clickedSlotObj?
    //                     <>
    //                         <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed', top:'41.5%',left:'8%',fontStyle:'italic',fontSize:'70%',}}>
    //                             {clickedSlotObj? parseFloat(clickedSlotObj.slotOdds).toFixed(2) : "..."}% chance to pull
    //                         </div>

    //                         <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'4%',fontSize:'70%',}}>
    //                             <div title="verified" style={{position:'absolute',left:'-33%'}}>✅</div> 
    //                             {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> {getEllipsisTxt(selectedSlotAddress,4)}</a> : "..."}
                                
    //                         </div>
    //                     </>
    //                 : <></>}
                    
    //                 <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'13%',fontSize:'70%',}}>
    //                     {selectedSlotAddress&&clickedSlotObj? <a href={'https://testnets.opensea.io/assets/'+selectedSlotAddress+'/'+clickedSlotObj.id} target='blank' style={{color: '#8ebf42'}}> View On OpenSea</a> : "..."}
    //                 </div>

    //                 <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  bottom:'6%',left:'5%',fontSize:'70%',}}>
    //                     External URL: {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> www.zombo.com</a> : "..."}
                        
    //                 </div>
    //                 <div title="Token ID" style={{width:'3vw',height:'4vh',display:'flex', justifyContent:'center',fontSize:'1vw',cursor:'help', color:selectedFontColor? selectedFontColor: "#8ebf42",position:'fixed', top:'35.5%',left:'17.7vw', fontStyle:'italic'}}>
    //                     <div style={{fontSize:'80%', position:'absolute',top:'0%',right:'0.4vw',}}>
    //                         ID
    //                     </div>
    //                     <div style={{color:'#8ebf42',fontSize:'60%', position:'absolute',bottom:'0%',right:'0.4vw',}}>
    //                         {clickedSlotObj? clickedSlotObj.id : "..."}
    //                     </div>
    //                 </div>
    //             </>
    //             } 
    //             </ul>
    //         </div>

    //         </>: <>click an NFT to see more info</>}
    //     </div>
    // )


    
    const theme = {
        scheme: 'monokai',
        author: 'wimer hazenberg (http://www.monokai.nl)',
        base00: '#272822',
        base01: '#383830',
        base02: '#49483e',
        base03: '#75715e',
        base04: '#a59f85',
        base05: '#f8f8f2',
        base06: '#f5f4f1',
        base07: '#f9f8f5',
        base08: '#f92672',
        base09: '#fd971f',
        base0A: '#f4bf75',
        base0B: '#a6e22e',
        base0C: '#a1efe4',
        base0D: '#66d9ef',
        base0E: '#ae81ff',
        base0F: '#cc6633',
      };
    return(
        <div style={{position:'absolute', width:'25vw',display:'flex',alignItems:'end', justifyContent:'center', height:'70vh',border: ActiveNetworkBorderColor? ActiveNetworkBorderColor: '0px solid #fff', borderRadius:'15px', backgroundColor:ActiveNetworkThemeColorDarker?ActiveNetworkThemeColorDarker:'rgba(255,255,255,0.15)', left:'1%', bottom:'1%',width:'25%',}}>
            <div style={{height:'50%', width:'60%', marginBottom:'1vh',}}>
                <img style={{maxHeight:'100%', objectFit:'scale-down', width:'100%'}} src={clickedNftImage?clickedNftImage:<></>}></img>
            </div>

            <div style={{color:'#fff', position:'absolute', width:'95%', height:'45%', top:'2%',borderRadius:'15px', backgroundColor:'rgba(50,50,50,0.2)'}}>
                {/* view token metadata:<br></br><JSONTree hideRoot={true} theme={theme} invertTheme={false} data={clickedmetadataObj}/> */}
                <div style={{position:'absolute', height:'100%',width:'100%',bottom:'2%'}}>
                    <MIMegaWorldCitizen tokenId={clickedDisplayedTokenId} slotIndex={clickedSlotIndex} NftSlotOdds={clickedNftSlotOdds} contractAddress={'MCPC contract'} metadataObj={clickedmetadataObj}/>
                </div>

            </div>


            {/* <div style={{color:'#fff', position:'absolute', width:'100%', height:'80%',}}>
                {JSON.stringify(clickedDisplayedTokenId)}
            </div> */}



        {/* <CarouselNftSlot metadata={clickedmetadataObj}
        contractAddress={'MCPA contract'}
        slotContractAddress={clickedSlotContractAddress}
     .   slotObj={clickedSlotObj}                        
        tokenId={clickedDisplayedTokenId}
        slotIndex={clickedSlotIndex} 
        slotImageUrl={clickedNftImage} 
        NftSlotOdds={clickedNftSlotOdds}
        slotStock={clickedSlotStock}  /> */}
            
        </div>
    )



}

export default NftMoreInfoDiv