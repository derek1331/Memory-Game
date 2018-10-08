import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
    <img className="card" onClick={() => props.gamePlay(props.id)} alt={props.name} src={props.image}>
    </img>
    
);

export default FriendCard;
