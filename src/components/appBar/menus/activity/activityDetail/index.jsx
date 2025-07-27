import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Chip,
    Container,
    Grid,
    Card,
    CardContent,
    Avatar,
    Divider,
    IconButton,
    Tooltip,
    LinearProgress,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import {
    ArrowBack,
    LocationOn,
    Favorite,
    Share,
    Phone,
    Email,
    CheckCircle,
    Schedule,
    DirectionsWalk,
    EmojiEvents,
    Facebook,
    WhatsApp,
    ContentCopy,
    VolunteerActivism,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '../../../index.jsx';

const ActivityDetail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [isLiked, setIsLiked] = useState(false);
    const [isJoined] = useState(false);
    const [showShareDialog, setShowShareDialog] = useState(false);

    const activity = {
        id: 1,
        title: 'Hành trình yêu thương – Đến với vùng cao',
        slogan: 'Một bước chân – Ngàn yêu thương',
        date: '15/01/2024 - 20/01/2024',
        time: '08:00 - 17:00 hàng ngày',
        participants: {
            current: 17,
            max: 20,
            percentage: 85
        },
        location: 'Xã Đắk Nông, Huyện Đắk Glong, Tỉnh Đắk Nông',
        address: 'Thôn 5, Xã Đắk Nông, Huyện Đắk Glong, Tỉnh Đắk Nông',
        description: `Chương trình "Hành trình yêu thương – Đến với vùng cao" là một sự kiện tình nguyện đặc biệt, mang đến cơ hội cho các tình nguyện viên được trực tiếp tham gia vào việc hỗ trợ cộng đồng người dân tộc thiểu số tại vùng cao Tây Nguyên.

Mục đích chương trình:
• Xây dựng sân chơi cho trẻ em vùng cao
• Tổ chức lớp học tình thương cho các em nhỏ
• Trao tặng quà và nhu yếu phẩm cho gia đình khó khăn
• Tổ chức các hoạt động văn hóa, thể thao
• Khám sức khỏe miễn phí cho người dân

Đây không chỉ là một chuyến đi tình nguyện thông thường, mà là một hành trình đầy ý nghĩa, nơi mỗi bước chân của bạn sẽ mang lại niềm vui và hy vọng cho những người dân vùng cao.`,
        image: 'https://homepage.momocdn.net/blogscontents/momo-upload-api-240129140308-638421337889338088.jpg',
        tags: ['#VùngCao', '#TrẻEm', '#GiáoDục', '#Y tế', '#VănHóa'],
        badgeColor: '#ff4757',
        countdown: '5 ngày',
        likes: 128,
        shares: 89,
        requirements: [
            'Tuổi từ 18 trở lên',
            'Có sức khỏe tốt, thích nghi với khí hậu vùng cao',
            'Có tinh thần tình nguyện và sẵn sàng hỗ trợ cộng đồng',
            'Có thể làm việc theo nhóm và thích nghi với điều kiện cơ bản',
            'Có kinh nghiệm chăm sóc trẻ em hoặc y tế (ưu tiên)'
        ],
        timeline: [
            { day: 'Ngày 1', time: '08:00', activity: 'Tập trung tại điểm hẹn, di chuyển đến địa điểm' },
            { day: 'Ngày 1', time: '14:00', activity: 'Làm quen với cộng đồng, chuẩn bị công việc' },
            { day: 'Ngày 2-3', time: '08:00-17:00', activity: 'Xây dựng sân chơi, tổ chức lớp học' },
            { day: 'Ngày 4', time: '08:00-17:00', activity: 'Khám sức khỏe, trao quà cho người dân' },
            { day: 'Ngày 5', time: '08:00-12:00', activity: 'Tổ chức lễ hội văn hóa, tổng kết chương trình' }
        ],
        benefits: [
            'Được cấp chứng chỉ tình nguyện có giá trị ',
            'Trải nghiệm văn hóa độc đáo của người dân tộc ',
            'Phát triển kỹ năng làm việc nhóm ,kỹ năng giao tiếp và lãnh đạo ',
            'Được hỗ trợ chi phí ăn uống và di chuyển',
            'Cơ hội kết nối với cộng đồng tình nguyện viên'
        ],
        organizer: {
            name: 'Tổ chức Tình nguyện Vùng cao',
            avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            phone: '0123 456 789',
            email: 'info@tinhnguyenvungcao.vn',
            website: 'www.tinhnguyenvungcao.vn',
            zalo: 'zalo.me/tinhnguyenvungcao',
            telegram: 't.me/tinhnguyenvungcao'
        },
        tasks: [
            'Dựng sân chơi cho trẻ em',
            'Tổ chức lớp học tình thương ',
            'Phát quà và nhu yếu phẩm',
            'Tổ chức hoạt động văn hóa',
            'Hỗ trợ khám sức khỏe'
        ]
    };

    const handleJoin = () => {
        // Chuyển hướng trực tiếp đến trang đăng ký
        console.log('Navigating to registration page with ID:', id);
        navigate(`/dang-ky-hoat-dong/${id}`);
    };

    const handleShare = (platform) => {
        const url = window.location.href;
        const text = `Tham gia cùng tôi trong hoạt động: ${activity.title}`;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
                break;
            case 'zalo':
                window.open(`https://zalo.me/share?u=${encodeURIComponent(url)}&t=${encodeURIComponent(text)}`);
                break;
            case 'copy':
                navigator.clipboard.writeText(url);
                alert('Đã copy link vào clipboard!');
                break;
            default:
                break;
        }
        setShowShareDialog(false);
    };

    return (
        <>
            <AppBar />
            <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
                {/* Hero Banner */}
                <Box sx={{ position: 'relative', height: '500px', overflow: 'hidden' }}>
                    <img
                        src={activity.image}
                        alt={activity.title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Container maxWidth="lg">
                            <Box sx={{ textAlign: 'center', color: 'white' }}>

                                <Typography variant="h2" sx={{
                                    fontWeight: 800,
                                    mb: 2,
                                    fontSize: { xs: '32px', md: '48px' },
                                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                                }}>
                                    {activity.title}
                                </Typography>
                                <Typography variant="h5" sx={{
                                    fontWeight: 300,
                                    mb: 3,
                                    fontSize: { xs: '18px', md: '24px' },
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                }}>
                                    {activity.slogan}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                                    {activity.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                color: '#1a237e',
                                                fontSize: '12px',
                                                height: 28,
                                                fontWeight: 500
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                </Box>

                {/* Navigation Header */}
                <Box sx={{ bgcolor: '#fff', borderBottom: 1, borderColor: '#e9ecef' }}>
                    <Container maxWidth="lg">
                        <Box sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                            <IconButton onClick={() => navigate('/hoat-dong')} sx={{ mr: 2 }}>
                                <ArrowBack />
                            </IconButton>
                            <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a237e' }}>
                                Chi Tiết Hoạt Động
                            </Typography>
                        </Box>
                    </Container>
                </Box>

                <Container maxWidth="lg" sx={{ py: 4 }}>
                    <Grid container spacing={4}>
                        {/* Main Content */}
                        <Grid item xs={12} lg={8}>
                            {/* Quick Info Card */}
                            <Card sx={{ mb: 4, bgcolor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                <Box>
                                                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                                                        Thời gian
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                        {activity.date}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box>
                                                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                                                        Giờ hoạt động
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                        {activity.time}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>

                                        <Box sx={{
                                            width: '1px',
                                            bgcolor: '#e9ecef',
                                            mx: 3,
                                            display: { xs: 'none', sm: 'block' }
                                        }} />

                                        <Box sx={{ flex: 1 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                <Box>
                                                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                                                        Địa điểm
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                        {activity.location}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                <Box>
                                                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                                                        Cần tuyển
                                                    </Typography>
                                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                        {activity.participants.max} TNV
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>

                                    <Divider sx={{ my: 3 }} />

                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ color: '#6c757d', mb: 1 }}>
                                            Tiến độ đăng ký
                                        </Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={activity.participants.percentage}
                                            sx={{
                                                height: 12,
                                                borderRadius: 6,
                                                bgcolor: '#e9ecef',
                                                '& .MuiLinearProgress-bar': {
                                                    bgcolor: '#ffd700'
                                                }
                                            }}
                                        />
                                        <Typography variant="body2" sx={{ color: '#6c757d', mt: 1 }}>
                                            Đã có {activity.participants.current} TNV đăng ký ({activity.participants.percentage}%)
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                        <Button
                                            variant={isJoined ? "outlined" : "contained"}
                                            size="large"
                                            onClick={handleJoin}
                                            startIcon={<VolunteerActivism />}
                                            sx={{
                                                bgcolor: isJoined ? 'transparent' : '#ffd700',
                                                color: isJoined ? '#ffd700' : '#1a237e',
                                                borderColor: '#ffd700',
                                                fontWeight: 700,
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 3,
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                '&:hover': {
                                                    bgcolor: isJoined ? '#ffd700' : '#ffed4e',
                                                    color: isJoined ? '#1a237e' : '#1a237e'
                                                }
                                            }}
                                        >
                                            {isJoined ? 'Đã Tham Gia' : 'Tôi muốn đồng hành'}
                                        </Button>

                                        <IconButton
                                            onClick={() => setIsLiked(!isLiked)}
                                            sx={{
                                                color: isLiked ? '#e91e63' : '#6c757d',
                                                border: 1,
                                                borderColor: isLiked ? '#e91e63' : '#dee2e6',
                                                '&:hover': {
                                                    bgcolor: isLiked ? '#fce4ec' : '#f8f9fa'
                                                }
                                            }}
                                        >
                                            <Favorite />
                                        </IconButton>

                                        <IconButton
                                            onClick={() => setShowShareDialog(true)}
                                            sx={{
                                                color: '#6c757d',
                                                border: 1,
                                                borderColor: '#dee2e6',
                                                '&:hover': {
                                                    bgcolor: '#f8f9fa'
                                                }
                                            }}
                                        >
                                            <Share />
                                        </IconButton>
                                    </Box>
                                </CardContent>
                            </Card>

                            {/* Description */}
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                        Mô Tả Chi Tiết
                                    </Typography>
                                    <Typography variant="body1" sx={{
                                        lineHeight: 1.8,
                                        color: '#495057',
                                        fontSize: '16px'
                                    }}>
                                        {activity.description}
                                    </Typography>
                                </CardContent>
                            </Card>

                            {/* Tasks */}
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                        Công Việc Cụ Thể
                                    </Typography>
                                    <Grid container spacing={2}>
                                        {activity.tasks.map((task, index) => (
                                            <Grid item xs={12} sm={6} key={index}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2 }}>
                                                    <CheckCircle sx={{ color: '#2ed573', fontSize: 20 }} />
                                                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                        {task}
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </CardContent>
                            </Card>



                            {/* Timeline */}
                            <Card sx={{ mb: 4 }}>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                        Lịch Trình Chi Tiết
                                    </Typography>
                                    <List>
                                        {activity.timeline.map((item, index) => (
                                            <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                                <ListItemIcon>
                                                    <Schedule sx={{ color: '#ffd700', fontSize: 24 }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Box>
                                                            <Typography variant="h6" sx={{
                                                                fontWeight: 600,
                                                                color: '#1a237e',
                                                                mb: 0.5
                                                            }}>
                                                                {item.day} - {item.time}
                                                            </Typography>
                                                            <Typography variant="body1" sx={{ color: '#495057' }}>
                                                                {item.activity}
                                                            </Typography>
                                                        </Box>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                            {/* Organizer & Location Row */}
                            <Box sx={{ display: 'flex', gap: 3, mb: 4, flexWrap: 'nowrap' }}>
                                <Card sx={{ flex: 1, minWidth: 0 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                            Tổ Chức
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                            <Avatar
                                                src={activity.organizer.avatar}
                                                sx={{ width: 60, height: 60, mr: 2 }}
                                            />
                                            <Box>
                                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                                    {activity.organizer.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ color: '#6c757d' }}>
                                                    Tổ chức tình nguyện
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Stack spacing={2}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Phone sx={{ fontSize: 18, color: '#4ecdc4' }} />
                                                <Typography variant="body2">
                                                    {activity.organizer.phone}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Email sx={{ fontSize: 18, color: '#ff6b6b' }} />
                                                <Typography variant="body2">
                                                    {activity.organizer.email}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>

                                <Card sx={{ flex: 1, minWidth: 0 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                            Địa Điểm
                                        </Typography>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                                            <LocationOn sx={{ color: '#45b7d1' }} />
                                            <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                                {activity.location}
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" sx={{ color: '#6c757d', mb: 3 }}>
                                            {activity.address}
                                        </Typography>
                                        <Button
                                            variant="outlined"
                                            startIcon={<DirectionsWalk />}
                                            fullWidth
                                            sx={{
                                                borderColor: '#ffd700',
                                                color: '#1a237e',
                                                '&:hover': {
                                                    borderColor: '#ffed4e',
                                                    bgcolor: '#fff9c4'
                                                }
                                            }}
                                        >
                                            Chỉ Đường
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>

                            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'nowrap' }}>
                                <Card sx={{ flex: 1, minWidth: 0 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                            Yêu Cầu Tham Gia
                                        </Typography>
                                        <List>
                                            {activity.requirements.map((req, index) => (
                                                <ListItem key={index} sx={{ px: 0 }}>
                                                    <ListItemIcon>
                                                        <CheckCircle sx={{ color: '#2ed573', fontSize: 20 }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={req}
                                                        sx={{
                                                            '& .MuiListItemText-primary': {
                                                                fontSize: '14px',
                                                                lineHeight: 1.4,
                                                                wordBreak: 'break-word'
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>

                                <Card sx={{ flex: 1, minWidth: 0 }}>
                                    <CardContent sx={{ p: 4 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#1a237e' }}>
                                            Quyền Lợi
                                        </Typography>
                                        <List>
                                            {activity.benefits.map((benefit, index) => (
                                                <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                                    <ListItemIcon>
                                                        <EmojiEvents sx={{ color: '#ffd700', fontSize: 24 }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={benefit}
                                                        sx={{
                                                            '& .MuiListItemText-primary': {
                                                                fontSize: '14px',
                                                                lineHeight: 1.4,
                                                                fontWeight: 500,
                                                                wordBreak: 'break-word'
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>

                        {/* Sidebar */}

                    </Grid>
                </Container>

                {/* Floating Action Button */}
                <Fab
                    color="primary"
                    aria-label="Tham gia"
                    onClick={handleJoin}
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        right: 24,
                        bgcolor: '#ffd700',
                        color: '#1a237e',
                        '&:hover': {
                            bgcolor: '#ffed4e'
                        }
                    }}
                >
                    <VolunteerActivism />
                </Fab>

                {/* Share Dialog */}
                <Dialog open={showShareDialog} onClose={() => setShowShareDialog(false)}>
                    <DialogTitle>Lan tỏa hoạt động đến bạn bè!</DialogTitle>
                    <DialogContent>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', py: 2 }}>
                            <IconButton
                                onClick={() => handleShare('facebook')}
                                sx={{
                                    bgcolor: '#1877f2',
                                    color: 'white',
                                    '&:hover': { bgcolor: '#166fe5' }
                                }}
                            >
                                <Facebook />
                            </IconButton>
                            <IconButton
                                onClick={() => handleShare('zalo')}
                                sx={{
                                    bgcolor: '#0068ff',
                                    color: 'white',
                                    '&:hover': { bgcolor: '#0056cc' }
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                            <IconButton
                                onClick={() => handleShare('copy')}
                                sx={{
                                    bgcolor: '#6c757d',
                                    color: 'white',
                                    '&:hover': { bgcolor: '#5a6268' }
                                }}
                            >
                                <ContentCopy />
                            </IconButton>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setShowShareDialog(false)}>Đóng</Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </>
    );
};

export default ActivityDetail; 