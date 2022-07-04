import React from "react";
import Grid from '@mui/material/Grid';
import ChatCarousel from "../components/chat/Chat-carousel";
import Chatbox from "../components/chat/Chatbox";
import InvitesCarousel from "../components/chat/Invites-carousel";
import InvitesSide from "../components/chat/Invites-side";
import ChatSide from "../components/chat/Chat-side";
import Chip from '@mui/material/Chip';
import "./Chat.css";

export default function Chat() {
    const [viewChatCarousel, viewInvitesCarousel] = React.useState(false);

    const switchView = () => {
        viewInvitesCarousel(!viewChatCarousel);
    }

    return (
        <div>

            <div className="chat-interface">

                {viewChatCarousel ?
                    <div className="chat-top">

                        <Grid container>
                            <Grid lg={1}>
                                <div className="invites-side">
                                    <button onClick={switchView}>Invites</button>
                                    <br />
                                    <InvitesSide />
                                </div>
                            </Grid>

                            <Grid lg={11}>
                                <div className="chat-ui-header"><Chip label="Chat with a Buddy" variant="outlined" style={{ backgroundColor: '#FFFFFF' }} /></div>
                                <div className="chat-carousel">
                                    <ChatCarousel />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    :

                    <div>
                        < Grid container>
                            <Grid lg={1}>
                                <div className="chat-side">
                                    <button onClick={switchView}>Chat</button>
                                    <br />
                                    <ChatSide />
                                </div>
                            </Grid>

                            <Grid lg={11}>
                                <div className="invites-carousel">
                                    <InvitesCarousel />
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                }
                <div>
                    <Chatbox />
                </div>
            </div>
        </div>

    )
}