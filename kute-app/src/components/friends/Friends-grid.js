import * as React from 'react';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Chips from "./Friends-chips";
import Collapse from '@mui/material/Collapse';

import "./Friends-grid.css";


const imgsLinks = [
    "https://loremflickr.com/320/240?random=1",
    "https://loremflickr.com/320/240?random=2",
    "https://loremflickr.com/320/240?random=3",
    "https://loremflickr.com/320/240?random=4",
    "https://loremflickr.com/320/240?random=5",
    "https://loremflickr.com/320/240?random=6",
    "https://loremflickr.com/320/240?random=7",
    "https://loremflickr.com/320/240?random=8",
    "https://loremflickr.com/320/240?random=9",
    "https://loremflickr.com/320/240?random=10",
    "https://loremflickr.com/320/240?random=11",
    "https://loremflickr.com/320/240?random=12",
    "https://loremflickr.com/320/240?random=13"
];

export default function BuddiesProfileCard() {
    const [expanded, showExpanded] = React.useState(false);
    const [collapsed, showCollapsed] = React.useState(true);


    const images = imgsLinks.map((link, index) => {

        return (
            <LazyLoadImage
                alt="img"
                key={index}
                src={link}
                height="150px"
                width="150px"
                effect="blur"
                threshold={100}
                className="avatar"
            />

        )
    }
    );


    const expandCard = (event, key) => {
        console.log(event.target);
        console.log('key index:', key);
        showExpanded(!expanded);
        showCollapsed(!collapsed);
    }



    return (

        <div className="row">

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={6} columnSpacing={{ xs: 6, sm: 8, md: 12 }}>
                    {images.map((image, key) =>
                        <div>

                            <Grid item xs={3}>
                                {collapsed &&
                                    <div className="collapsed-card">
                                        <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                                        <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                                        <br />
                                        <div className="avatar-container-collapsed" onClick={event => expandCard(event, key)} key={key}>
                                            {image}
                                        </div>
                                        <br />
                                        <Typography variant="body2" color="text.secondary">
                                            <ul className="buddies-interests-lists">
                                                <li>
                                                    Interest 1
                                                </li>

                                                <li>
                                                    Interest 2
                                                </li>

                                                <li>
                                                    Interest 3
                                                </li>
                                            </ul>
                                        </Typography>
                                    </div >
                                }

                                <Collapse in={expanded} timeout="auto" unmountOnExit>
                                    <div className="expanded-card">
                                        <Box>
                                            <section>
                                                <div className="expanded-header">
                                                    <div className="username">
                                                        Paloma
                                                    </div>
                                                    <div className="gender">
                                                        she/her
                                                    </div>
                                                    <div className="age">
                                                        Age: 36
                                                    </div>
                                                </div>

                                                <div className="avatar-container-expanded" onClick={event => expandCard(event, key)} key={key} >
                                                    {image}
                                                </div>

                                                <div className="intro"> <Typography>Tickle my curiosity!</Typography></div>
                                                <br />
                                                <div className="connect-button-container"> <button className="connect-button"> CONNECT</button></div>
                                            </section>
                                            <section className="expanded-scroll-group">

                                                <div className="friends-scroll-category">
                                                    <Typography>INTERESTS</Typography>
                                                </div>
                                                <div>
                                                    <Chips />
                                                </div>
                                                <br />
                                                <div className="friends-scroll-category">
                                                    <Typography>EVENTS</Typography>
                                                </div>
                                                <div>
                                                    <Chips />
                                                </div>
                                                <br />
                                                <div className="friends-scroll-category">
                                                    <Typography>WHY I'M HERE</Typography>
                                                </div>
                                                <div>
                                                    <Chips />
                                                </div>
                                            </section>

                                        </Box>
                                    </div>
                                </Collapse>

                            </Grid>

                        </div>
                    )}
                </Grid>
            </Box>

        </div>

    )
}