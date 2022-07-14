import React, {useState, useContext} from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactSlider from 'react-slider';
import "../../styles/grid.css";
import { NftMoreInfoContext } from '../../App';

const SlotProbabilitySlider = (props) => {

    return (
        <ReactSlider
            onSliderClick={()=>{props.setSliderExplicit? props.setSliderExplicit(true): <></>}}
            value={props.sliderValue}
            min={1}
            max={99}
            className="horizontal-slider"
            thumbClassName="thumb"
            trackClassName="track"
            renderThumb={(props, thisValue) =>

                    <div {...props}>
                        {thisValue.valueNow }
                    </div>
            }
            onChange={(value, index) => props.changeSliderValue(value)}
         />
    )
}

export default SlotProbabilitySlider