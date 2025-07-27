import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Container,
  Tabs,
  Tab,
  IconButton,
  Grid,
  Avatar,
  Badge,
  Tooltip,
  Fade
} from '@mui/material';
import {
  CalendarToday,
  Group,
  LocationOn,
  Favorite,
  Share,
  Search,
  Person,
  AccessTime,
  TrendingUp,
  Star,
  LocalFireDepartment
} from '@mui/icons-material';
import AppBar from '../../index.jsx';

const ActivityPage = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const tabs = [
    { label: 'Tất Cả (30)', count: 30 },
    { label: 'Chưa Tham Gia (30)', count: 30 },
    { label: 'Đã Tham Gia (0)', count: 0 },
    { label: 'Đã Yêu Thích (0)', count: 0 },
    { label: 'Dành Cho Bạn', count: null }
  ];
    const handleJoin = () => {
        // Chuyển hướng trực tiếp đến trang đăng ký
        console.log('Navigating to registration page with ID:', id);
        navigate(`/dang-ky-hoat-dong/${id}`);
    };
  const activities = [
    {
      id: 1,
      title: 'Tặng 80 nụ cười cho các em bé mang dị tật hàm mặt của Operation Smile',
      date: '10/01/2024',
      participants: '23/50',
      location: 'Tây Nguyên',
      description: 'Mỗi năm có khoảng 3.000 trẻ em sinh ra trên khắp Việt Nam mắc các dị tật hàm mặt. Các dị tật này khiến các em gặp nhiều khó khăn trong ăn uống và sinh hoạt. Khi lớn lên, các em còn phải chịu...',
      likes: 65,
      shares: 59,
      image: 'https://homepage.momocdn.net/blogscontents/momo-upload-api-240129140308-638421337889338088.jpg',
      tags: ['#TrẻEm', '#Y tế', '#MiềnNúi'],
      badge: 'HOT',
      badgeColor: '#ff4757',
      countdown: '3 ngày',
      isNew: false
    },
    {
      id: 2,
      title: 'Tặng 72.000 ly sữa cho các em học nghèo hiếu học tại Lạng Sơn',
      date: '05/03/2024',
      participants: '32/50',
      location: 'Lạng Sơn',
      description: 'Lạng Sơn - một trong những tỉnh miền núi phía Đông Bắc giàu truyền thống cách mạng, với địa hình khó khăn, hiểm trở, bị chia cắt bởi nhiều dãy núi cao và sông dài; có nhiều đồi núi và thung...',
      likes: 45,
      shares: 25,
      image: 'https://volunteer-management-django.onrender.com/media/event_covers/24.jpg',
      tags: ['#GiáoDục', '#MiềnNúi', '#TrẻEm'],
      badge: 'MỚI',
      badgeColor: '#2ed573',
      countdown: '1 tuần',
      isNew: true
    },
    {
      id: 3,
      title: 'Đóng góp "Một bữa sáng" vì động vật hoang dã có nguy cơ tuyệt chủng tại...',
      date: '06/03/2024',
      participants: '47/50',
      location: 'Hồ Chí Minh',
      description: 'Mỗi loài động thực vật là một mắt xích quan trọng trong thế giới tự nhiên và có vai trò đảm bảo sự đa dạng sinh học và cân bằng cho hệ sinh thái. Nếu chỉ bị thiếu đi một yếu tố cũng sẽ dẫn tới s...',
      likes: 39,
      shares: 42,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      tags: ['#MôiTrường', '#ĐộngVật', '#BảoTồn'],
      badge: 'GẦN ĐẦY',
      badgeColor: '#ffa502',
      countdown: '2 ngày',
      isNew: false
    }
  ];

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getBadgeIcon = (badge) => {
    switch (badge) {
      case 'HOT':
        return <LocalFireDepartment sx={{ fontSize: 16 }} />;
      case 'MỚI':
        return <Star sx={{ fontSize: 16 }} />;
      case 'GẦN ĐẦY':
        return <TrendingUp sx={{ fontSize: 16 }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <AppBar />
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Navigation Tabs */}
        <Box sx={{ 
          bgcolor: '#fff', 
          borderBottom: 1, 
          borderColor: '#e9ecef',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
        }}>
          <Container maxWidth="xl">
            <Tabs 
              value={activeTab} 
              onChange={handleTabChange}
              sx={{
                '& .MuiTab-root': {
                  color: '#6c757d',
                  fontWeight: 500,
                  fontSize: '14px',
                  textTransform: 'none',
                  minHeight: 56,
                  px: 3,
                  '&.Mui-selected': {
                    color: '#1a237e',
                    fontWeight: 600
                  }
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#ffd700',
                  height: 3,
                  borderRadius: '2px'
                }
              }}
            >
              {tabs.map((tab, index) => (
                <Tab 
                  key={index} 
                  label={tab.label}
                  sx={{ 
                    borderBottom: activeTab === index ? '3px solid #ffd700' : 'none',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 215, 0, 0.1)',
                      transition: 'all 0.3s ease'
                    }
                  }}
                />
              ))}
            </Tabs>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Grid container spacing={2}>
            {activities.map((activity) => (
              <Grid item xs={12} md={4} key={activity.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    borderRadius: 2,
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                      transform: 'translateY(-4px)',
                    }
                  }}
                  onMouseEnter={() => setHoveredCard(activity.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Left Side - Image */}
                  <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '160px', md: 'auto' },
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    {/* Badge */}
                    <Box sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      zIndex: 2
                    }}>
                      <Chip
                        icon={getBadgeIcon(activity.badge)}
                        label={activity.badge}
                        sx={{
                          bgcolor: activity.badgeColor,
                          color: 'white',
                          fontWeight: 600,
                          fontSize: '11px',
                          height: 24,
                          '& .MuiChip-icon': {
                            color: 'white'
                          }
                        }}
                      />
                    </Box>

                    {/* Countdown Badge */}
                    <Box sx={{
                      position: 'absolute',
                      top: 8,
                      right: 8,
                      zIndex: 2
                    }}>
                      <Chip
                        icon={<AccessTime sx={{ fontSize: 12 }} />}
                        label={activity.countdown}
                        sx={{
                          bgcolor: 'rgba(0,0,0,0.7)',
                          color: 'white',
                          fontWeight: 500,
                          fontSize: '10px',
                          height: 20,
                          '& .MuiChip-icon': {
                            color: 'white'
                          }
                        }}
                      />
                    </Box>

                    <CardMedia
                      component="img"
                      height="100%"
                      image={activity.image}
                      alt={activity.title}
                      sx={{ 
                        objectFit: 'contain',
                        backgroundColor: '#f8f9fa',
                        transition: 'transform 0.4s ease',
                        transform: hoveredCard === activity.id ? 'scale(1.05)' : 'scale(1)'
                      }}
                    />
                    
                    {/* Hover Overlay */}
                    <Fade in={hoveredCard === activity.id}>
                      <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        bgcolor: 'rgba(26, 35, 126, 0.8)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1
                      }}>
                        <Button
                          onClick={handleJoin}
                          variant="contained"
                          sx={{
                            bgcolor: '#ffd700',
                            color: '#1a237e',
                            fontWeight: 700,
                            fontSize: '16px',
                            px: 4,
                            py: 1.5,
                            borderRadius: 3,
                            textTransform: 'none',
                            boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)',
                            '&:hover': {
                              bgcolor: '#ffed4e',
                              transform: 'scale(1.05)'
                            }
                          }}
                        >
                          Tham Gia Ngay
                        </Button>
                      </Box>
                    </Fade>
                  </Box>
                  
                  {/* Right Side - Content */}
                  <Box sx={{ 
                    width: { xs: '100%', md: '50%' },
                    display: 'flex', 
                    flexDirection: 'column',
                    p: 2
                  }}>
                    {/* Tags */}
                    <Box sx={{ display: 'flex', gap: 0.5, mb: 1.5, flexWrap: 'wrap' }}>
                      {activity.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            bgcolor: '#e3f2fd',
                            color: '#1976d2',
                            fontSize: '10px',
                            height: 18,
                            fontWeight: 500,
                            '&:hover': {
                              bgcolor: '#bbdefb'
                            }
                          }}
                        />
                      ))}
                    </Box>

                    {/* Title */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        fontSize: '16px',
                        lineHeight: 1.4,
                        mb: 2,
                        color: '#1a237e',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '44px'
                      }}
                    >
                      {activity.title}
                    </Typography>

                    {/* Metadata */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <CalendarToday sx={{ fontSize: 18, color: '#ff6b6b' }} />
                        <Typography variant="body2" sx={{ color: '#495057', fontSize: '14px', fontWeight: 500 }}>
                          {activity.date}
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Group sx={{ fontSize: 18, color: '#4ecdc4' }} />
                        <Typography variant="body2" sx={{ color: '#495057', fontSize: '14px', fontWeight: 500 }}>
                          {activity.participants} người tham gia
                        </Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <LocationOn sx={{ fontSize: 18, color: '#45b7d1' }} />
                        <Typography variant="body2" sx={{ color: '#495057', fontSize: '14px', fontWeight: 500 }}>
                          {activity.location}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Description */}
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#6c757d',
                        fontSize: '14px',
                        lineHeight: 1.6,
                        mb: 3,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '66px'
                      }}
                    >
                      {activity.description}
                    </Typography>

                    {/* Engagement and Action */}
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      mt: 'auto',
                      pt: 2,
                      borderTop: '1px solid #e9ecef'
                    }}>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <Tooltip title="Lượt thích">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Favorite sx={{ fontSize: 18, color: '#e91e63' }} />
                            <Typography variant="body2" sx={{ color: '#495057', fontSize: '13px', fontWeight: 600 }}>
                              {activity.likes}
                            </Typography>
                          </Box>
                        </Tooltip>
                        <Tooltip title="Lượt chia sẻ">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <Share sx={{ fontSize: 18, color: '#6c757d' }} />
                            <Typography variant="body2" sx={{ color: '#495057', fontSize: '13px', fontWeight: 600 }}>
                              {activity.shares}
                            </Typography>
                          </Box>
                        </Tooltip>
                      </Box>
                      
                                   <Button
               variant="contained"
               onClick={() => navigate(`/hoat-dong/${activity.id}`)}
               sx={{
                 bgcolor: '#ffd700',
                 color: '#1a237e',
                 fontWeight: 700,
                 borderRadius: 2.5,
                 px: 3,
                 py: 1.2,
                 textTransform: 'none',
                 fontSize: '14px',
                 boxShadow: '0 4px 12px rgba(255, 215, 0, 0.3)',
                 transition: 'all 0.3s ease',
                 '&:hover': {
                   bgcolor: '#ffed4e',
                   transform: 'translateY(-2px)',
                   boxShadow: '0 6px 16px rgba(255, 215, 0, 0.4)'
                 }
               }}
             >
               Chi Tiết
             </Button>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ActivityPage;