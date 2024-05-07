import React from "react";

function SubscriptionRow(props) {
    return (
        <div className="subscriptionRow">
            <div className="left">
                <img className="channelLogo" src={props.img}/>
                <p className="channelName">{props.name}</p>
            </div>
            <div className="right">
                {/* <img className="LiveImg" src={Live}/> */}
            </div>
        </div>
    )
}

export default SubscriptionRow;