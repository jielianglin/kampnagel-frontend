import React from "react";
import "./Chatbox.css";
import Chip from '@mui/material/Chip';

export default function ChatBox() {
    return (
        <div>
            <div className="chat-ui-header"><Chip label="Chat with a Buddy" variant="outlined" style={{ backgroundColor: '#FFFFFF' }} /></div>

            <div className="chat-box">

                <div className="messages">
                    <div className="messages-left">

                        <div className="message"><Chip label="hey" /></div>
                        <div className="timestamp">12:00</div>

                    </div>
                    < br />
                    <div className="messages-right">
                        <div className="message"><Chip label="hey" variant="outlined" /></div>
                        <div className="timestamp">12:05</div>
                    </div>
                    < br />
                </div>
                <hr className="horizontal-line" />
                <div className="chat-input-container">
                    <input className="chat-input" type="text" placeholder="Chat message..." />
                    <button className="submit-button"> Send </button>
                </div>

            </div>

        </div>
    )
}; 