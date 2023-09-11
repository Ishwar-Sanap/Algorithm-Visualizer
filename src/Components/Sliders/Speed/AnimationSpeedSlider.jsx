import React, { useState, useEffect } from "react";
import "./SpeedSlider.css";

export default function AnimationSpeedSlider(props) {
    
    const animationSpeed = props.animationSpeed;
    const setAnimationSpeed = props.setAnimationSpeed;

    return (
        <div className="slider-container">

            <label>Delay {animationSpeed} </label>

            <input type="range" id="delayRange" min="5" max="150" step={5} value={animationSpeed}
                onChange={({ target: { value: radius } }) => {
                    setAnimationSpeed(radius);
                }}
            />
           

        </div>
    );
}