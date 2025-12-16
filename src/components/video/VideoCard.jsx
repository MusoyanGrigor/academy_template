import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { LectureLabels } from '../../constants/lecture-labels.js';

export const VideoCard = ({ title, description, duration, link, type }) => {
    const cardStyle = {
        width: 300,
        height: 400,
        borderRadius: 5,
        overflow: 'hidden',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 32px rgba(0, 0, 0, 0.3)',
        },
        background: `linear-gradient(135deg, #1E3A8A, #3B82F6)`,
        color: '#fff',
    };

    const videoId = link.split("v=")[1].split("&")[0];
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

    const typeColors = {
        [LectureLabels.LinearAlgebra]: "#F87171",
        [LectureLabels.MathAnalysis]: "#60A5FA",
        [LectureLabels.Probability]: "#34D399",
        [LectureLabels.Python]: "#FBBF24",
        [LectureLabels.MachineLearning]: "#A78BFA",
        [LectureLabels.DeepLearning]: "#F472B6"
    };

    return (
        <Card sx={cardStyle}>
            <CardActionArea
                component="a"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                <CardMedia
                    component="img"
                    height="140"
                    image={thumbnailUrl}
                    alt={title}
                    sx={{
                        transition: 'transform 0.3s',
                        '&:hover': { transform: 'scale(1.05)' },
                    }}
                />

                <CardContent
                    sx={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        padding: '16px',
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 600, marginBottom: 1, color: '#E0F2FE' }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            display: 'inline-block',
                            padding: '2px 8px',
                            borderRadius: '12px',
                            backgroundColor: typeColors[type] || '#CBD5E1',
                            color: '#1E293B',
                            fontWeight: 500,
                            marginBottom: 1,
                        }}
                    >
                        {type}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: '#DBEAFE', marginBottom: 1 }}
                    >
                        {description}
                    </Typography>

                    <Typography variant="body2" sx={{ color: '#BFDBFE', fontWeight: 500 }}>
                        {duration}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
