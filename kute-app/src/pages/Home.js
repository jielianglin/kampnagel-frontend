import React from "react";
// import Drawer from "../components/Events-drawer";
import SignUpDialog from "../components/homepage/Sign-up-modal";
import SignInDialog from "../components/homepage/Sign-in-modal";
import RulesDialog from "../components/homepage/Rules-of-conduct";
import SamplePageGrid from "../components/homepage/Sample-page-grid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

// import Sidebar from "../components/Events-sidebar";
import "./Home.css";


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

export default function Home() {

    return (
        <div className="sample-page-grid">

            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={6} columnSpacing={{ xs: 6, sm: 8, md: 10 }}>

                    <Grid item xs={3}>
                        <div className="welcome">
                            <h4>Welcome to </h4>
                            <h1 className="kute"> [K]ute! </h1>
                            <span>
                                A Kampnagel
                                <br />
                                Open Source App
                                <br />
                                for Meeting up!
                            </span>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[1]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>

                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[2]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={3}>

                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[3]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[4]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>
                        </div>

                    </Grid>

                    <Grid item xs={3}>
                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[5]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="sample-page-card">
                            <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>
                            <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                            <img src={imgsLinks[6]} className="sample-avatar" />
                            <Typography variant="body2" color="text.secondary">
                                <ul className="sample-interests-lists">
                                    <li>
                                        purring
                                    </li>

                                    <li>
                                        hunting mice
                                    </li>

                                    <li>
                                        being lazy
                                    </li>
                                </ul>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className="home-buttons">
                            <RulesDialog />
                            <SignUpDialog />
                            <SignInDialog />
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}