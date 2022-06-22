import React from "react";
// import Drawer from "../components/Events-drawer";
import SignUpDialog from "../components/Sign-up-modal";
import SignInDialog from "../components/Sign-in-modal";
// import Sidebar from "../components/Events-sidebar";
import "./Home.css";


export default function Home() {
    return (
        <div>
            {/* <div className="sidebar">
                <Sidebar />
            </div> */}
            <h5>Welcome to </h5>
            <h1> [K]ute! </h1>
            {/* <Drawer /> */}

            <div className="home-buttons">
                <SignUpDialog />
                <SignInDialog />
            </div>

        </div>
    )
}