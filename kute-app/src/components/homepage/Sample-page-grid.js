import * as React from 'react';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// import sampleAvatar from "../pictures/sampleAvatar.png";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import "./Sample-page-grid.css";

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

    const images = imgsLinks.map(link => {
        return (
            <LazyLoadImage
                alt="img"
                key={link}
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

    return (
        <div className="row">
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={6} columnSpacing={{ xs: 6, sm: 8, md: 10 }}>
                    {images.map(image =>
                        <div>
                            <Grid item xs={3}>
                                <div className="card">
                                    <Typography variant="h5"> <div className="buddies-username">Name</div> </Typography>

                                    <Typography variant="body2" color="text.secondary" className="buddies-gender"> <div>Gender</div> </Typography>
                                    <br />
                                    <div>{image}</div>
                                    <br />
                                    <Typography variant="body2" color="text.secondary">
                                        <ul className="buddies-interests-lists">
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
                                </div >
                            </Grid>
                        </div>
                    )}
                </Grid>
            </Box>
        </div>

    )
}