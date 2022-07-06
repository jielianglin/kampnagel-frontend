import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import "./Rules-of-conduct.css";

export default function RulesDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                !
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Rules of Conduct</DialogTitle>
                <DialogContent>
                    <Typography> These are the rules of conduct.</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>I agree</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}