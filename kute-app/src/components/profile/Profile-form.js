import * as React from 'react';
import './Profile-form.css';

//accordian imports
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Chip from "@mui/material/Chip";
//textfield import
import TextField from '@mui/material/TextField';

//chips array import
import Chips from "./Chips";


export default function SimpleAccordion() {

    const [value, setValue] = React.useState('Controlled'); //Introduction textfield hook

    //Introduction textfield event handler
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="profile-form">
            <div className="profile-form-header"><Chip label="Make a Profile" variant="outlined" style={{ backgroundColor: '#FFFFFF' }} /></div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Introduction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <TextField
                        id="outlined-multiline-static"
                        label="Write about yourself!"
                        multiline
                        rows={4}
                        defaultValue="I'm looking for..."
                    />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Self-Description</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Chips />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Types of Interests</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Chips />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Types of Events</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Chips />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Why I'm using [K]ute</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Chips />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}