import React from "react";
import "./intro.css";
import Me from "../../img/Eric.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, My name is</h2>
                <h2 className="i-name">Eric Wargin</h2>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Chef</div>
                        <div className="i-title-item">Business Manager</div>
                    </div>
                </div>
                <div className="i-desc">
                    I am a recent UNC Coding Bootcamp Graduate with a background in restaurant management. 
                </div>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img"/>
        </div>
    </div>
  )
};

export default Intro;