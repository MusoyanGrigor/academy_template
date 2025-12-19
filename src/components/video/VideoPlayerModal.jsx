import { Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const VideoPlayerModal = ({ open, onClose, videoId }) => {
    if (!videoId) return null;

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <IconButton
                onClick={onClose}
                sx={{ position: 'absolute', right: 8, top: 8, zIndex: 1 }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
                <iframe
                    width="100%"
                    height="500"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </DialogContent>
        </Dialog>
    );
};
