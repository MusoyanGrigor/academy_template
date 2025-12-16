import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid, Typography } from '@mui/material';
import { LectureLabels } from "../../constants/lecture-labels.js";
import { videos } from '../../constants/videos.js';
import { VideoCard } from "../video/VideoCard.jsx";

export const TabPanel = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const lectureEntries = Object.entries(LectureLabels);

    // Add an "All" tab at the beginning
    const allTabs = [['all', 'Բոլորը'], ...lectureEntries];

    // Get the label of the selected tab
    const selectedLabel = allTabs[value][1];

    // Filter videos
    const filteredVideos =
        selectedLabel === 'Բոլորը'
            ? videos
            : videos.filter(video => video.type === selectedLabel);

    return (
        <Box sx={{ width: '100%' }}>
            {/* Tabs */}
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    '& .MuiTabs-scrollButtons': {
                        color: '#4ea1ff',
                    },
                }}
            >
                {allTabs.map(([key, label]) => (
                    <Tab key={key} label={label} />
                ))}
            </Tabs>


            {/* Tab content */}
            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
                {filteredVideos.length > 0 ? (
                    <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px' }}>
                        {filteredVideos.map((video, index) => (
                            <Grid
                                item
                                key={index}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                display="flex"
                                justifyContent="center"
                            >
                                <VideoCard {...video} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Typography
                        sx={{
                            mt: 4,
                            textAlign: 'center',
                            fontSize: { xs: '1.2rem', sm: '1.5rem' },
                            color: '#4a5568',
                            fontStyle: 'italic',
                        }}
                    >
                        Այս բաժնում տեսանյութեր չկան
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
