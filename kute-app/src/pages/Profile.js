import React from "react";
import SimpleAccordian from "../components/profile/Profile-form.js";
import ResponsiveAppBar from "../components/navigation/Nav-bar";

export default function Profile() {
    return (
        <div>
            <div>
                <ResponsiveAppBar />
            </div>
            <SimpleAccordian />
            <br />
            <button> FINISH </button>
        </div>
    )
}