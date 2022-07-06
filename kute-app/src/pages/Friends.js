import React from "react";
import FriendsGrid from "../components/friends/Friends-grid";
import ResponsiveAppBar from "../components/navigation/Nav-bar";
import "./Friends.css";

export default function Friends() {
    return (
        <div>
            <div><ResponsiveAppBar /></div>
            <div className="grid">
                <FriendsGrid />
            </div>
        </div>
    )
}