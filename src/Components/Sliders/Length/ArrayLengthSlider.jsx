import React, { useState, useEffect } from "react";
import "./LengthSlider.css";

export default function ArrayLengthSlider(props) {
    
    const arrayLength = props.arrayLength;
    const setArrayLength = props.setArrayLength;


    return (
        <div className="slider-container">

            <div className="box">
                <label>Array Size   {arrayLength}</label>
            </div>

            <div className="box">
            <input type="range" id="LengthRang" min="4" max="40" value={arrayLength}
                onChange={({ target: { value: radius } }) => {
                    setArrayLength(radius);
                }}
            />
            </div>
           
        </div>
    );
}