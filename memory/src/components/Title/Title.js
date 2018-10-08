import React from "react";
import "./Title.css";

const Title = props => (
    <div className="titleBackground" >
        <h2 className="title">Click on an image to earn points, but don't click on any more than once!</h2>
        {props.children}
    </div>

)

export default Title;
