import React from 'react'

const MCPCitizenStatBar = (props) => {


  return (
    <div style={{display:'flex',width:'100%',marginBottom:'0.5ch'}}>
        {props.statValue>0?<div style={{background:'rgba(0,88,9,1)', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>1?<div style={{background:'rgba(0,88,9,1)', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>2?<div style={{background:'rgba(0,88,9,1)', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>3?<div style={{background:'rgba(0,88,9,1)', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>4?<div style={{background:'rgba(0,88,9,1)', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>5?<div style={{background:'#00c709', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>6?<div style={{background:'#00c709', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>7?<div style={{background:'#00c709', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>8?<div style={{background:'#f5ff00', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}
        {props.statValue>9?<div style={{background:'#f5ff00', height:'2ch',width:'9%', marginRight:'1px',}}>
        </div>:<></>}


    </div>
  )
}

export default MCPCitizenStatBar