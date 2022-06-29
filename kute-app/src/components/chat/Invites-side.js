import React from "react";
import sampleAvatar2 from "../pictures/sampleAvatar2.png"

export default function InvitesSide() {
    return (
        <div>
            <img src={sampleAvatar2} className="invite-avatar" />
            <br />
            <img src={sampleAvatar2} className="invite-avatar" />
            <br />
            <img src={sampleAvatar2} className="invite-avatar" />
        </div>
    )
}