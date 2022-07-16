import React, {useState, useEffect, useContext} from 'react'
import { OddsAndSlotAddys } from '../../App';
import { MachineABI, MachineFactoryContractAddress} from '../../ContractInfo/ContractInfo';
import {useMoralis, useWeb3Contract} from 'react-moralis';
import { NftMoreInfoContext } from '../../App';

const LoadTokenUriAndImage = (props) => {
    const {Moralis, enableWeb3, web3, isWeb3Enabled, authenticate, isAuthenticated, user, logout} = useMoralis();   
    const {NftSlotContractAddresses, setNftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
    const {ContractErrorMessage, setContractErrorMessage}     = useContext(NftMoreInfoContext);
    
    const [imageObj, setimageObj] = useState();

    const fetchTokenUri = useWeb3Contract({
        abi: MachineABI, //ERC721 ABI   
        contractAddress: NftSlotContractAddresses[props.winningSlot],
        functionName: "tokenURI",
        params: {
            tokenId: props.tokenId
        }
      });



    useEffect(()=>{
    if (!isWeb3Enabled) {
        // console.log('enabling web3...'); 
        enableWeb3();
        }
    if (isWeb3Enabled && NftSlotContractAddresses[props.winningSlot]){
        setTimeout(function(){
            fetchTokenUri.runContractFunction({ 
                onError: (error) =>{
                // console.log('QQQQQ big ERROR: ',error); 
                }
            });
        },400);
    }
    },[isWeb3Enabled, NftSlotContractAddresses]);

    useEffect(()=>{
        if (fetchTokenUri.data){
            let temp = fetchTokenUri.data.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com')
            console.log('\t\t\t*********** token URI is: ',temp)
            LoadImageWithFetch(temp);
        }
    },[fetchTokenUri.data]); 


    function LoadImageWithFetch(thisUrl) {    
        const accountInfoReq = fetch(thisUrl).then(res => res.json() );
        accountInfoReq.then(accountInfo => {                                
          let temp = accountInfo.image.replace(/gateway.pinata.cloud/, 'gateway.moralisipfs.com')
          const second = fetch(temp)
          const third = second.then(res => res.blob())
          third.then(actualImage =>{
            const imageObjectURL = URL.createObjectURL(actualImage);
            setimageObj(imageObjectURL);
          })
        })
    }



    return (

        <img width="100%" src={imageObj? imageObj: 'https://i.imgur.com/qfPvRxj.png'}></img>

    )
}

export default LoadTokenUriAndImage