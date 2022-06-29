import React from "react";
import sampleAvatar from "../pictures/sampleAvatar.png"

export default function InvitesSide() {
    return (
        <div>
            <img src={sampleAvatar} className="invite-avatar" />
            <br />
            <img src={sampleAvatar} className="invite-avatar" />
            <br />
            <img src={sampleAvatar} className="invite-avatar" />
        </div>
    )
}