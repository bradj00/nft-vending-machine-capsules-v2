import React, {useContext} from 'react'
import { useEffect } from 'react';
import { NftMoreInfoContext } from '../../App'
import { OddsAndSlotAddys } from '../../App';
const ActiveSlotCount = () => {
  const {activeSlotCounter, setActiveSlotCounter} = useContext(NftMoreInfoContext);
  const {NftSlotContractAddresses}    = useContext(OddsAndSlotAddys);
  
  
  function countActiveSlots(){
    let activeCount = 0;
    for (let i =0; i < NftSlotContractAddresses.length; i++){
        if (NftSlotContractAddresses[i] == '0x0000000000000000000000000000000000000000') {
            console.log(i,' disabled')
        }else {
            console.log(i,' enabled');
            activeCount++;
        }
    }
    setActiveSlotCounter(activeCount);
  }

  useEffect(()=>{
    if ((NftSlotContractAddresses.length > 1) && ( NftSlotContractAddresses[0] != '0x0000000000000000000000000000000000000000' )){
        countActiveSlots();
    }
  },[NftSlotContractAddresses]);

  return (
    <div style={{position:'absolute',top:'38%',left:'50%',zIndex:'9999',color:'#fff',}}>
        {activeSlotCounter? activeSlotCounter: '...'} / 10 active slots
    </div>
  )
}

export default ActiveSlotCount