import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sampleAvatar from "../pictures/sampleAvatar.png";
import "./Friends-card.css";

export default function ActionAreaCard() {
    return (
        <div className="card">
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Gender
                        </Typography>

                        <CardMedia
                            component="img"
                            height="100"
                            image={sampleAvatar}
                            alt="sample"
                        />
                        <Typography variant="body2" color="text.secondary">
                            Interest 1
                            <br />
                            Interest 2
                            <br />
                            Interest 3
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}