import React, {useEffect, useState, useContext} from 'react';
import { NftMoreInfoContext } from '../App';
import { OddsAndSlotAddys } from '../App';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import VerifiedIcon from '@mui/icons-material/Verified';
import DepositNftToMachine from './Admin Panels/Deposit Panel/DepositNftToMachineSlot';
import MegaWorldCitizen from './metadata-views/MegaWorldCitizen';
import MegaWorldBuilding from './metadata-views/MegaWorldBuilding';
import StandardMetaData from './metadata-views/StandardMetaData';
import MegaWorldAppliance from './metadata-views/MegaWorldAppliance';

const CarouselNftSlot = (props) => {

    const {clickedNftImage, setclickedNftImage}     = useContext(NftMoreInfoContext);
    const {selectedSlotAddress, setselectedSlotAddress}    = useContext(NftMoreInfoContext);
    const {clickedSlotObj, setclickedSlotObj} = useContext(NftMoreInfoContext);
    const {selectedSlotContractName, setselectedSlotContractName} = useContext(NftMoreInfoContext);
    const {selectedSlotContractSymbol, setselectedSlotContractSymbol} = useContext(NftMoreInfoContext);
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);

    const [displayedTokenId, setdisplayedTokenId] = useState();
    const [metadataObj, setmetadataObj] = useState();




    //   useEffect(()=>{
    //     if (metadataObj){
    //         console.log(props.slotIndex,'  metadata object: ',metadataObj);
    //     }
    //   },[metadataObj]);


    //loads metadata for area above carousel slot
      useEffect(()=>{
        if (props.metadata){
            // console.log(props.slotIndex,'  metadata: ',props.metadata);
            fetch( props.metadata.tokenURI )
            .then(response => response.json())
            .then(data => {
                setmetadataObj(data);
            })
        }
      },[props.metadata]);

      useEffect(()=>{
        if (props.tokenId){
            //pick the tokenId of (the lowest index that is not zero AND matches the props.slotIndex)
            //setdisplayedTokenId()

            let temp = props.tokenId.map((item)=>{
                if (item.slotIndex != props.slotIndex){ //if this isn't the slot we are operating on
                    return
                }

                if ((item.index != 0) && (item.slotIndex == props.slotIndex)){
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

    if (props.slotContractAddress == '0x4886E559A143b323b0D230457136524cb9C045C5'){ //MCP citizen
        return (
            <MegaWorldCitizen metadataObj={metadataObj} displayedTokenId={displayedTokenId} contractAddress={props.slotContractAddress} slotContractAddress={props.slotContractAddress} slotObj={props.slotObj} contractName={props.contractName} contractSymbol={props.contractSymbol} tokenId={props.tokenId} thisStyle={props.thisStyle} slotIndex={props.slotIndex} slotImageUrl={props.slotImageUrl} NftSlotOdds={props.NftSlotOdds} slotStock={props.slotStock}  styleEmpty={props.styleEmpty}/> 
        )
    }
    else if (props.slotContractAddress == '0x75E1817c8B16F29995eD9De9cAe2bD08A9244fC2'){ //MCPL contract
        return (
            <MegaWorldBuilding metadataObj={metadataObj} displayedTokenId={displayedTokenId} contractAddress={props.slotContractAddress} slotContractAddress={props.slotContractAddress} slotObj={props.slotObj} contractName={props.contractName} contractSymbol={props.contractSymbol} tokenId={props.tokenId} thisStyle={props.thisStyle} slotIndex={props.slotIndex} slotImageUrl={props.slotImageUrl} NftSlotOdds={props.NftSlotOdds} slotStock={props.slotStock}  styleEmpty={props.styleEmpty}/> 
        )
    }
    else if (props.slotContractAddress == '0x775752df06Df60a3Bb4FA32A12B3fd592328CA71'){ //MCPA contract
        return (
            <MegaWorldAppliance metadataObj={metadataObj} displayedTokenId={displayedTokenId} contractAddress={props.slotContractAddress} slotContractAddress={props.slotContractAddress} slotObj={props.slotObj} contractName={props.contractName} contractSymbol={props.contractSymbol} tokenId={props.tokenId} thisStyle={props.thisStyle} slotIndex={props.slotIndex} slotImageUrl={props.slotImageUrl} NftSlotOdds={props.NftSlotOdds} slotStock={props.slotStock}  styleEmpty={props.styleEmpty}/> 
        )
    }
    else {
        return(
            <StandardMetaData metadataObj={metadataObj} displayedTokenId={displayedTokenId} contractAddress={props.slotContractAddress} slotContractAddress={props.slotContractAddress} slotObj={props.slotObj} contractName={props.contractName} contractSymbol={props.contractSymbol} tokenId={props.tokenId} thisStyle={props.thisStyle} slotIndex={props.slotIndex} slotImageUrl={props.slotImageUrl} NftSlotOdds={props.NftSlotOdds} slotStock={props.slotStock}  styleEmpty={props.styleEmpty} />
        )
    }
}

export default CarouselNftSlot







// theObj["0x00001"] = [12,15,25,30]; //each time one is clicked, add to this array in theObj
//                                    //when rendering, always check against this array and if the tokenId is there, disable clicking it 


// const theObj = {
//  0x000001: [],
//  0x000002: [],
//  0x000003: [],
//  0x000004: [],
//  0x000005: [],
//  0x000006: [],
//  0x000007: [],
//  0x000008: [],
//  0x000009: [],
//  0x000010: [],

// }