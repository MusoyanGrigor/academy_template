import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LectureLabels } from '../../constants/lecture-labels.js';

export const VideoCard = ({ title, description, duration, link, type, onClick }) => {
    const videoId = link.split("v=")[1]?.split("&")[0];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const typeColors = {
        [LectureLabels.LinearAlgebra]: "#F87171",
        [LectureLabels.MathAnalysis]: "#60A5FA",
        [LectureLabels.Probability]: "#34D399",
        [LectureLabels.Python]: "#FBBF24",
        [LectureLabels.MachineLearning]: "#A78BFA",
        [LectureLabels.DeepLearning]: "#F472B6"
    };

    const cardStyle = {
        width: 300,
        height: 400,
        borderRadius: 5,
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        background: 'linear-gradient(135deg, #1E3A8A, #3B82F6)',
        color: '#fff',
        transition: '0.3s',
        '&:hover': { transform: 'translateY(-6px)' },
    }

    return (
        <Card sx={cardStyle}>
            <CardActionArea onClick={onClick}>
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnailUrl}
                    alt={title}
                />

                <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            display: 'inline-block',
                            px: 1,
                            py: 0.3,
                            borderRadius: 2,
                            backgroundColor: typeColors[type],
                            color: '#1E293B',
                            fontWeight: 500,
                            mb: 1,
                        }}
                    >
                        {type}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            color: '#DBEAFE',
                            mb: 1,
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                        }}
                    >
                        {description}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#BFDBFE' }}>
                        ⏱ {duration}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
