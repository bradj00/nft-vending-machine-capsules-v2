import React, {useContext, useEffect, useState} from 'react'
import { NftMoreInfoContext } from '../App';
import {getEllipsisTxt} from "../helpers/formatters";
import useGoogleFonts from 'use-google-fonts'


const NftMoreInfoDiv = () => {
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(NftMoreInfoContext);
    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setclickedSlotObj}       = useContext(NftMoreInfoContext);
    const {managingInventory, setmanagingInventory} = useContext(NftMoreInfoContext);



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


            // if (clickedSlotObj.slotOdds > 50){
            //     setselectedSlotBorderColor("2px solid #999"); //gray
            //     setselectedSlotBackgroundColor("rgba(80,80,80,0.2)");
            //     setselectedFontColor("gray");
            //     // console.log('\t\tgray');
            // }
            // else if (clickedSlotObj.slotOdds <= 50){
            //     setselectedSlotBorderColor("2px solid #008800"); //uncommon green
            //     setselectedSlotBackgroundColor("rgba(0,255,0,0.1)");
            //     setselectedFontColor("green");
            //     // console.log('\t\tgreen');
            //     if (clickedSlotObj.slotOdds < 35){
            //         setselectedSlotBorderColor("2px solid #3333ff"); //rare blue
            //         setselectedSlotBackgroundColor("rgba(90,90,200,0.1)");
            //         setselectedFontColor("#8888ff");
            //         // console.log('\t\tblue');
            //         if (clickedSlotObj.slotOdds < 20){
            //             setselectedSlotBorderColor("2px solid #aa00aa"); //epic purple
            //             setselectedSlotBackgroundColor("rgba(159,90,253,0.2)");
            //             setselectedFontColor("purple");
            //             // console.log('\t\tpurple');
            //             if (clickedSlotObj.slotOdds <= 5){
            //                 setselectedSlotBorderColor("2px solid #FFC300"); //legendary gold
            //                 setselectedSlotBackgroundColor("rgba(255,189,0,0.2)");
            //                 setselectedFontColor("gold");
            //                 // console.log('\t\tgold');
                            
            //             }
            //         }
            //     }
            // }
        }
    },[clickedSlotObj])
    return (
        <div style={{boxShadow: 'inset 0px 0px 2px 2px #333',display:'flex',justifyContent:'center',alignItems:'center', fontSize:clickedSlotObj?'default':'1.2vw', position:'absolute',top:'35%', left:'1%', width:'20%', height:'60%', color:"#fff", backgroundColor :selectedSlotBackgroundColor? selectedSlotBackgroundColor: ActiveNetworkThemeColor? ActiveNetworkThemeColor:'rgba(165, 221, 255 ,0.15)', borderRadius:'10px', border: selectedSlotBorderColor? selectedSlotBorderColor: ActiveNetworkBorderColor? ActiveNetworkBorderColor: '1px solid #FFF', padding:'2%',display:'flex',justifyContent:'center',}}>
            {clickedSlotObj||clickedNftImage?<>
            <div style={{position:'absolute', top:'2%',width:'100%',display:'flex', justifyContent:'center', fontSize:'120%'}}>
                {clickedSlotObj? clickedSlotObj.data.name : <></>}
            </div>
            <div style={{display:'flex', justifyContent:'center',position:'absolute', width: '80%', height:'50%', top:'15%',}}>
                {clickedNftImage? <img style={{height:'100%', width:'100%', border: selectedSlotBorderColor? selectedSlotBorderColor: '3px solid #FFF',}} src={clickedNftImage? clickedNftImage: ''}></img>: <img style={{height:'100%', width:'100%', border: selectedSlotBorderColor? selectedSlotBorderColor: ActiveNetworkBorderColor? ActiveNetworkBorderColor: '1px solid #ccc',}}></img>}
            </div>

            <div style={{position:'absolute', top:'65%', left:'18%', width:'65%', }}>
                <ul>   
                {  managingInventory?
                <>

                <div style={{position:'fixed',bottom:'12vh',left:'3vw', width:'16vw',border:'1px solid #aaa'}}>
                    <div style={{position:'absolute', bottom:'8%', left:'5%'}}>
                        Set Buy Price: <input type="text" id="fname" name="fname"></input> MARBLES
                    </div>
                    <div style={{position:'absolute', bottom:'2%', left:'5%', width:'50%' }}>
                        <button style={{padding:'2% 5% 2% 5%',}}>Eject From Machine </button>
                    </div>
                </div> 

                <div style={{color:selectedFontColor? selectedFontColor: "#fff",fontSize:'100%',}}>
                    {selectedSlotContractName? selectedSlotContractName: <></>}
                </div>
                
                {clickedSlotObj?
                    <>
                        <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed', top:'41.5%',left:'8%',fontStyle:'italic',fontSize:'70%',}}>
                            {clickedSlotObj? parseFloat(clickedSlotObj.slotOdds).toFixed(2) : "..."}% chance to pull
                        </div>

                        <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'4%',fontSize:'70%',}}>
                            <div title="verified" style={{position:'absolute',left:'-33%'}}>✅</div> 
                            {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> {getEllipsisTxt(selectedSlotAddress,4)}</a> : "..."}
                            
                        </div>
                    </>
                : <></>}
                
                <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'13%',fontSize:'70%',}}>
                    {selectedSlotAddress&&clickedSlotObj? <a href={'https://testnets.opensea.io/assets/'+selectedSlotAddress+'/'+clickedSlotObj.id} target='blank' style={{color: '#8ebf42'}}> View On OpenSea</a> : "..."}
                </div>

                <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  bottom:'6%',left:'5%',fontSize:'70%',}}>
                    External URL: {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> www.zombo.com</a> : "..."}
                    
                </div>
                <div title="Token ID" style={{width:'3vw',height:'4vh',display:'flex', justifyContent:'center',fontSize:'1vw',cursor:'help', color:selectedFontColor? selectedFontColor: "#8ebf42",position:'fixed', top:'35.5%',left:'17.7vw', fontStyle:'italic'}}>
                    <div style={{fontSize:'80%', position:'absolute',top:'0%',right:'0.4vw',}}>
                        ID
                    </div>
                    <div style={{color:'#8ebf42',fontSize:'60%', position:'absolute',bottom:'0%',right:'0.4vw',}}>
                        {clickedSlotObj? clickedSlotObj.id : "..."}
                    </div>
                </div>
            </>
                :
                <>
                    <div style={{backgroundColor :selectedSlotBackgroundColor? selectedSlotBackgroundColor: ActiveNetworkThemeColor? ActiveNetworkThemeColor: 'rgba(165, 221, 255 ,0.15)',display:'flex', justifyContent:'center', position:'fixed',width:'15%',height:'10%',borderRadius:'5px',left:'3.6%',bottom:'8%',}}>
                        <div onClick={()=>{console.log(selectedSlotContractName,selectedSlotContractSymbol)}}style={{color:selectedFontColor? selectedFontColor: "#fff",position:'absolute', top:'-80%',fontSize:'100%',}}>
                            {selectedSlotContractName? selectedSlotContractName: <></>}
                            {/* bb{selectedSlotContractSymbol? selectedSlotContractSymbol: <></>} */}
                        </div>
                        <div title="Description"  style={{fontSize:'1vw',color:selectedFontColor? selectedFontColor: "#fff",position:'absolute', width:'95%',height:'95%', overflowY:'scroll'}}>
                            <div style={{position:'fixed',left:'3%',bottom:'15%', fontSize:'100%',fontFamily: "'Spirax', sans-serif"}}>“</div> 
                            <div style={{fontFamily: "'Roboto', sans-serif"}}>{clickedSlotObj? clickedSlotObj.data.description : "..."}</div> 
                            <div style={{fontFamily: "'Spirax', sans-serif",fontSize:'100%',position:'fixed',bottom:'7%',left:'18.8%'}}>”</div>
                        </div>
                    </div>
                    
                    {clickedSlotObj?
                        <>
                            <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed', top:'41.5%',left:'8%',fontStyle:'italic',fontSize:'70%',}}>
                                {clickedSlotObj? parseFloat(clickedSlotObj.slotOdds).toFixed(2) : "..."}% chance to pull
                            </div>

                            <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'4%',fontSize:'70%',}}>
                                <div title="verified" style={{position:'absolute',left:'-33%'}}>✅</div> 
                                {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> {getEllipsisTxt(selectedSlotAddress,4)}</a> : "..."}
                                
                            </div>
                        </>
                    : <></>}
                    
                    <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  top:'78%',left:'13%',fontSize:'70%',}}>
                        {selectedSlotAddress&&clickedSlotObj? <a href={'https://testnets.opensea.io/assets/'+selectedSlotAddress+'/'+clickedSlotObj.id} target='blank' style={{color: '#8ebf42'}}> View On OpenSea</a> : "..."}
                    </div>

                    <div style={{color:selectedFontColor? selectedFontColor: "#fff",position:'fixed',  bottom:'6%',left:'5%',fontSize:'70%',}}>
                        External URL: {selectedSlotAddress? <a href={selectedContractEtherscanLink} target='blank' style={{color: '#8ebf42'}}> www.zombo.com</a> : "..."}
                        
                    </div>
                    <div title="Token ID" style={{width:'3vw',height:'4vh',display:'flex', justifyContent:'center',fontSize:'1vw',cursor:'help', color:selectedFontColor? selectedFontColor: "#8ebf42",position:'fixed', top:'35.5%',left:'17.7vw', fontStyle:'italic'}}>
                        <div style={{fontSize:'80%', position:'absolute',top:'0%',right:'0.4vw',}}>
                            ID
                        </div>
                        <div style={{color:'#8ebf42',fontSize:'60%', position:'absolute',bottom:'0%',right:'0.4vw',}}>
                            {clickedSlotObj? clickedSlotObj.id : "..."}
                        </div>
                    </div>
                </>
                } 
                </ul>
            </div>

            </>: <>click an NFT to see more info</>}
        </div>
    )
}

export default NftMoreInfoDiv