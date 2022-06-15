import React from "react";
import Drawer from "../components/Events-drawer";
import SignUpDialog from "../components/Sign-up-modal";
import SignInDialog from "../components/Sign-in-modal";

export default function Home() {
    return (
        <div>
            <h5>Welcome to </h5>
            <h1> [K]ute! </h1>
            <Drawer />
            <SignUpDialog />
            <SignInDialog />
        </div>
    )
}