import React, {useState, useContext} from 'react'
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactSlider from 'react-slider';
import "../../styles/grid.css";
import { NftMoreInfoContext } from '../../App';

const MCPCitizenFilterSliderGen = (props) => {
    const {mcpcGenfilterSlot1, setmcpcGenfilterSlot1} = useContext(NftMoreInfoContext);

    function convertValueToGen(value){
        switch(value){
            case 0:
                return 0;
            case 1:
                return "A";
            case 2:
                return "B";
            case 3:
                return "C";
            case 4:
                return "D";
            case 5:
                return "E";
            case 6:
                return "F";
            case 7:
                return "G";
            case 8:
                return "H";
            case 9:
                return "I";
            case 10:
                return "J";

        }
    }
    return (
        <ReactSlider
            onSliderClick={()=>{}}
            value={props.sliderValue}
            min={0}
            max={10}
            className="horizontal-slider-mcpcFilterGen"
            thumbClassName="thumb"
            trackClassName="track"
            renderThumb={(props, thisValue) =>

                    <div {...props}>
                            
                    </div>
            }
            onChange={(value, index) => {setmcpcGenfilterSlot1(convertValueToGen(value)) } }
         />
    )
}

export default MCPCitizenFilterSliderGen