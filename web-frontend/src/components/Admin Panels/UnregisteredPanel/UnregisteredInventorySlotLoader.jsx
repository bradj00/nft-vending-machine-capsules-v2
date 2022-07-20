import React, {useContext, useEffect} from 'react'

//this will take props
const UnregisteredInventorySlotLoader = (props) => {
    
    useEffect(()=>{
        //on load, check context object if address key exists
        //if it does, load data from that object

        //if not, request the data
        // console.log(props.slotIndex, ' prevLoaded changed: ',props.isPrevLoaded)
        if (props.isPrevLoaded){
            setTimeout(()=>{
                // console.log(props.slotIndex, ' has been loaded for 3 seconds!')
                props.setIsLoaded(true);
            }, 3000)
        }
    },[props.isPrevLoaded])


    return (
        <div>
            
        </div>
    )
}

export default UnregisteredInventorySlotLoader