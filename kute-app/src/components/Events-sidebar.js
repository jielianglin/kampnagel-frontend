import React from "react";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './Events-sidebar.css';

export default function Sidebar() {
    const [events, showEvents] = React.useState(true);
    const [expand, collapse] = React.useState(true);
    const [list, setList] = React.useState(false);

    const openSidebar = () => {
        showEvents(!events);
        collapse(!expand);
        setList(!list);
    }

    return (
        <ProSidebar className="sidebar" width="800px" collapsedWidth="70px" collapsed={events} rtl="false" >
            <div classname="sidebarCollapsed">
                <button className="sidebarButton" onClick={openSidebar}> {expand ? <ArrowForwardIosIcon /> : <ArrowBackIosIcon />}</button>
                <span className="sidebarLabel">Kampnagel Events</span>
                <br />
            </div>
            {list && <div className="listings">
                <ul className="list">
                    <li>event</li>
                    <li>event</li>
                    <li>event</li>
                    <li>event</li>
                </ul>

            </div>
            }

        </ProSidebar>)
};