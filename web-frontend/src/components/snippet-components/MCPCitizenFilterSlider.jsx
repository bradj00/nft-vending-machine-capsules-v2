import React, {useState, useContext} from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactSlider from 'react-slider';
import "../../styles/grid.css";
import { NftMoreInfoContext } from '../../App';

const MCPCitizenFilterSlider = (props) => {
    const {mcpcIfilterSlot1, setmcpcIfilterSlot1} = useContext(NftMoreInfoContext);
    const {mcpcSfilterSlot1, setmcpcSfilterSlot1} = useContext(NftMoreInfoContext);
    const {mcpcCfilterSlot1, setmcpcCfilterSlot1} = useContext(NftMoreInfoContext);
    const {mcpcAfilterSlot1, setmcpcAfilterSlot1} = useContext(NftMoreInfoContext);
    const {mcpcLfilterSlot1, setmcpcLfilterSlot1} = useContext(NftMoreInfoContext);
    const {mcpcEfilterSlot1, setmcpcEfilterSlot1} = useContext(NftMoreInfoContext);

    

    return (
        <ReactSlider
            onSliderClick={()=>{}}
            value={props.sliderValue}
            min={0}
            max={10}
            className="horizontal-slider-mcpcFilter"
            thumbClassName="thumb"
            trackClassName="track"
            renderThumb={(props, thisValue) =>

                    <div {...props}>
                        {props.filterStat == 0 ? "-" : props.filterStat  }
                    </div>
            }
            onChange={(value, index) => {props.setFilterStat(value)}}
         />
    )
}

export default MCPCitizenFilterSlider