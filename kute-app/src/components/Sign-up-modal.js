import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [forms, showForms] = React.useState(true);
    const [rules, showRules] = React.useState(false);
    const [next, showNext] = React.useState(true);
    const [submit, showSubmit] = React.useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const displayRules = () => {
        showForms(false);
        showRules(true);
        showNext(false);
        showSubmit(true);

    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create an Account
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Create an Account</DialogTitle>
                <DialogContent>
                    {forms &&
                        <div>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Email Address"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Password"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Re-Password"
                                type="text"
                                fullWidth
                                variant="standard"
                            />
                        </div>
                    }
                    {rules &&
                        <div> <Typography> Here are the Rules of Conduct </Typography></div>}

                </DialogContent>
                <DialogActions>
                    {next && <Button onClick={displayRules}>Next</Button>}
                    {submit && <Button>Submit</Button>}
                </DialogActions>
            </Dialog>
        </div>
    );
}