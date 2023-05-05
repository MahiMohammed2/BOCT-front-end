import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EditEmploye() {
    return (
        <div className='profile_container'>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined"  />
            </Box>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            </Box>
        </div>
    );
}