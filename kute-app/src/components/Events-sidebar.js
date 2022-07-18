import React from "react";
import { ProSidebar, SidebarHeader, SidebarContent, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import './Events-sidebar.css';

export default function Sidebar() {
    const [events, showEvents] = React.useState(true);
    const [expand, collapse] = React.useState(true);
    const [list, setList] = React.useState(false);
    const [listByDate, listByAlphabet] = React.useState(true);

    const openSidebar = () => {
        showEvents(!events);
        collapse(!expand);
        setList(!list);
    }

    const toggleGrid = () => {
        listByAlphabet(!listByDate);
    }

    return (
        <ProSidebar className="sidebar" width="900px" collapsedWidth="72px" collapsed={events}>
            {list ?
                <div className="sidebar-expanded">
                    <div className="sidebar-collapsed-view">
                        <button className="sidebar-button-expanded" onClick={openSidebar}> {expand ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}</button>
                        <span className="sidebar-label-expanded">Kampnagel Events</span>
                    </div>

                    <div className="sidebar-expanded-content">

                        <div className="search-container">
                            <TextField
                                className="search"
                                id="outlined-multiline-static"
                                multiline
                                rows={1}
                                defaultValue="Search.."
                            />
                        </div>

                        <div className="toggle-buttons">
                            <button className="list-by-alphabet" onClick={toggleGrid} >
                                <div><i>LIST BY
                                    <br />
                                    ALPHABET</i></div>
                            </button>
                            <button className="list-by-date" onClick={toggleGrid}>
                                <div><i>LIST
                                    <br />
                                    BY DATE</i>
                                </div>
                            </button>
                        </div>

                        <br />

                        {listByDate ?
                            <div className="listings-row">
                                <Grid className="grid-container" container >
                                    <Grid xs={2}>
                                        <div className="event">date</div>
                                    </Grid>
                                    <Grid xs={6}>
                                        <div className="event">event</div>
                                    </Grid>
                                    <Grid xs={4}>
                                        <div className="event">artist</div>
                                    </Grid>
                                </Grid>
                            </div>
                            :
                            <div className="listings-row">
                                <Grid className="grid-container" container >
                                    <Grid xs={2}>
                                        <div className="event">event</div>
                                    </Grid>
                                    <Grid xs={6}>
                                        <div className="event">date</div>
                                    </Grid>
                                    <Grid xs={4}>
                                        <div className="event">artist</div>
                                    </Grid>
                                </Grid>
                            </div>
                        }
                    </div>
                    <div>
                    </div>
                </div>
                :
                <div className="sidebar-collapsed-view">
                    <button className="sidebar-button-collapsed" onClick={openSidebar}> {expand ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}</button>
                    <span className="sidebar-label-collapsed">Kampnagel Events</span>
                    <br />
                </div>


            }

        </ProSidebar >
    )

};