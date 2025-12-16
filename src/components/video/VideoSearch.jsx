import React from 'react';
import { TextField, Box } from '@mui/material';

export const VideoSearch = ({ searchTerm, setSearchTerm }) => {
    const inputStyle = {
        backgroundColor: '#F3F4F6',
        borderRadius: 3,
        '& .MuiOutlinedInput-root': {
            borderRadius: 3,
            transition: '0.3s',
            '&.Mui-focused': {
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
                backgroundColor: '#FFFFFF',
            },
            '& fieldset': {
                borderColor: 'transparent',
            },
            '&:hover fieldset': {
                borderColor: '#3B82F6',
            },
        },
        '& input': {
            padding: '12px 14px',
            fontSize: '1rem',
        },
    }

    return (
        <Box sx={{ p: 3, maxWidth: 1200, margin: "0 auto" }}>
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Որոնել..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}

                sx={inputStyle}
            />
        </Box>
    );
};
