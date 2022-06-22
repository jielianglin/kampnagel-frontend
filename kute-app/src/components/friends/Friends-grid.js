import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from "./Friends-card";



export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '70%' }}>
            <Grid container rowSpacing={6} columnSpacing={{ xs: 6, sm: 8, md: 10 }}>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
                <Grid item xs={3}>
                    <Card />
                </Grid>
            </Grid>
        </Box>
    );
}