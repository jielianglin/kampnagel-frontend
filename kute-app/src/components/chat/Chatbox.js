import React from "react";
import "./Chatbox.css";

export default function ChatBox() {
    return (
        <div className="chatbox">

            <div className="message-container">
                <div className="client">client id</div>
                <div className="message">Hey</div>
            </div>

            <div className="another-message-container">
                <div className="client">client id</div>
                <div className="message">Hey</div>
            </div>

            <hr />
            <div className="input-chat-container">
                <input className="input-chat" type="text" placeholder="Chat message..." />
                <button className="submit-chat"> Send </button>
            </div>

        </div>
    )
}; 