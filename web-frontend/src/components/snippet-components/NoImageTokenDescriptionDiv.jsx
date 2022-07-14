import React from 'react'

const NoImageTokenDescriptionDiv = (props) => {
  return (
    <div style={{display:'flex', justifyContent:'center', textAlign:'left',  alignItems:'center', width:'100%',borderRadius:'5px',border:'1px dotted rgba(255,0,255,0.6)',height:'17vh',}}>
        <div style={{}}>
            <div style={{margin:'1vw',}}>
                id: {props.tokenInfo.token_id}
            </div>
            <div style={{margin:'1vw',}}>
            {props.tokenInfo.name} 
            </div>
            <div style={{margin:'1vw',}}>
            {props.tokenInfo.symbol} 
            </div>
            {/* <div style={{margin:'1vw',}}>
            {props.tokenInfo.token_uri? props.tokenInfo.token_uri: <></>}  
            </div> */}
        </div>
    </div>
  )
}

export default NoImageTokenDescriptionDiv