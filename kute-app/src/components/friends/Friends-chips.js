import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TagFacesIcon from '@mui/icons-material/TagFaces';


const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Label 1' },
        { key: 1, label: 'Label 2' },
        { key: 2, label: 'Label 3' },
        { key: 3, label: 'Label 4' },
        { key: 4, label: 'Label 5' },
    ]);


    return (
        <Paper elevation={0}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                listStyle: 'none',
                p: 0.5,
                m: 0,

            }}
            component="ul"
        >
            {chipData.map((data) => {
                let icon;

                if (data.label === 'React') {
                    icon = <TagFacesIcon />;
                }

                return (
                    <ListItem key={data.key}>
                        <Chip
                            icon={icon}
                            label={data.label}
                        />
                    </ListItem>
                );
            })}
        </Paper>
    );
}