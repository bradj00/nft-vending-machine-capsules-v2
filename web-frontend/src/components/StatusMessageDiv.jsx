import React, {useContext, useEffect, useState} from 'react'
import { NftMoreInfoContext } from '../App'

const StatusMessageDiv = () => {
    const {ContractErrorMessage, setContractErrorMessage} = useContext(NftMoreInfoContext);
    useEffect(()=>{
        if (ContractErrorMessage){
            setTimeout(()=>{
                setContractErrorMessage();
            }, 10000)
        }
    },[ContractErrorMessage])
    return (
        <div className="spookyStatus" style={{ textAlign:'center', width:'45%',position:'absolute', padding:'0.1vw', left:'28vw', top:'32vh',color:'#ff2222', fontSize:'1.2vw',}}>
            {ContractErrorMessage? ContractErrorMessage : <></>}
        </div>
    )
}

export default StatusMessageDiv