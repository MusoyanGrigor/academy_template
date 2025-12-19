import React, { useState, useMemo } from 'react';
import { Tabs, Tab, Box, Grid, Typography } from '@mui/material';
import { LectureLabels } from "../../constants/lecture-labels.js";
import { videos } from '../../constants/videos.js';
import { VideoCard } from "../video/VideoCard.jsx";
import { VideoSearch } from "../video/VideoSearch.jsx";
import { VideoPlayerModal } from "../video/VideoPlayerModal.jsx";

export const TabPanel = () => {
    const [value, setValue] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [openPlayer, setOpenPlayer] = useState(false);
    const [activeVideoId, setActiveVideoId] = useState(null);

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    const lectureEntries = Object.entries(LectureLabels);
    const allTabs = [['all', 'Բոլորը'], ...lectureEntries];
    const selectedLabel = allTabs[value][1];

    const filteredVideos = useMemo(() => {
        return selectedLabel === 'Բոլորը'
            ? videos
            : videos.filter(video => video.type === selectedLabel);
    }, [selectedLabel]);

    const searchedVideos = useMemo(() => {
        return filteredVideos.filter(video =>
            video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            video.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [filteredVideos, searchTerm]);

    const getVideoId = (url) => {
        return url.split("v=")[1]?.split("&")[0];
    };

    const handleVideoClick = (link) => {
        setActiveVideoId(getVideoId(link));
        setOpenPlayer(true);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <VideoSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                    '& .MuiTabs-scrollButtons': { color: '#4ea1ff' },
                }}
            >
                {allTabs.map(([key, label]) => (
                    <Tab key={key} label={label} />
                ))}
            </Tabs>

            <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
                {searchedVideos.length > 0 ? (
                    <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1200px' }}>
                        {searchedVideos.map(video => (
                            <Grid
                                item
                                key={video.id}
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}
                                display="flex"
                                justifyContent="center"
                            >
                                <VideoCard
                                    {...video}
                                    onClick={() => handleVideoClick(video.link)}
                                />
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

            <VideoPlayerModal
                open={openPlayer}
                onClose={() => setOpenPlayer(false)}
                videoId={activeVideoId}
            />
        </Box>
    );
};
