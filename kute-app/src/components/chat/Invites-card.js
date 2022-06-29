import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import sampleAvatar2 from "../pictures/sampleAvatar2.png";
import "./Invites-card.css";

export default function ActionAreaCard() {
    return (
        <div className="invites-card">
            <Card sx={{ maxWidth: 150 }}>
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
                            height="120"
                            image={sampleAvatar2}
                            alt="sample"
                        />

                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}