import React from "react";
import loc from "../images/location.svg";

export default function Announce(props) {
    return (
        <div className="announce--container">
            <img
                src={props.imageUrl}
                alt="announce image"
                className="announce--image"
            />
            <div className="announce-info">
                <div className="top--info">
                    <div className="announce--location">
                        <span>
                            <img src={loc} alt="location svg" />
                            {props.location}
                        </span>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                        <h1 className="title">{props.title}</h1>
                    </div>
                </div>
                <div className="bottom--info">
                    <span className="announce--date">
                        {props.startDate} - {props.endDate}
                    </span>
                    <p className="announce--description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}
