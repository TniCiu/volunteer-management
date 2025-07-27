import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Button, Container, Grid, Card, CardContent,
  TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel,
  Checkbox, Divider, Stepper, Step, StepLabel, Avatar, Chip,
  Alert, IconButton, InputAdornment, Radio, RadioGroup, FormLabel,
  LinearProgress, Paper, Stack
} from '@mui/material';
import {
  ArrowBack, Person, Phone, Email, CalendarToday, LocationOn,
  School, Work, CheckCircle,
  FavoriteBorder, Celebration
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import AppBar from '../../../../components/appBar/index.jsx';

const ActivityRegistration = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [activeStep, setActiveStep] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [isTimerExpired, setIsTimerExpired] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !isTimerExpired) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsTimerExpired(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [timeLeft, isTimerExpired]);

  // Format time
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  const [formData, setFormData] = useState({
    // Thông tin cá nhân
    fullName: '',
    phone: '',
    email: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    
    // Thông tin học tập/công việc
    education: '',
    school: '',
    major: '',
    occupation: '',
    company: '',
    
    // Kinh nghiệm tình nguyện
    volunteerExperience: '',
    skills: [],
    availability: '',
    
    // Thông tin khác
    emergencyContact: '',
    emergencyPhone: '',
    healthConditions: '',
    dietaryRestrictions: '',
    
    // Điều kiện tham gia
    hasCovidVaccine: false,
    hasHealthInsurance: false,
    canWorkOutdoor: false,
    canWorkWeekend: false,
    hasTransportation: false,
    
    // Đồng ý điều khoản
    agreeTerms: false,
    agreePrivacy: false,
    agreePhoto: false,
    agreeHealthCheck: false,
    agreeEmergencyContact: false
  });

  const [errors, setErrors] = useState({});

  // Validation rules
  const validationRules = {
    fullName: {
      required: true,
      minLength: 2,
      maxLength: 50,
      pattern: /^[a-zA-ZÀ-ỹ\s]+$/,
      message: 'Tên phải có ít nhất 2 ký tự, chỉ chứa chữ cái'
    },
    phone: {
      required: true,
      pattern: /^[0-9]{10,11}$/,
      message: 'Số điện thoại phải có 10-11 chữ số'
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: 'Email không hợp lệ'
    },
    dateOfBirth: {
      required: true,
      minAge: 18,
      maxAge: 60,
      message: 'Tuổi phải từ 18-60 tuổi'
    },
    address: {
      required: true,
      minLength: 10,
      message: 'Địa chỉ phải có ít nhất 10 ký tự'
    },
    gender: {
      required: true,
      message: 'Vui lòng chọn giới tính'
    },
    education: {
      required: true,
      message: 'Vui lòng chọn trình độ học vấn'
    },
    emergencyContact: {
      required: true,
      minLength: 2,
      message: 'Tên người liên hệ khẩn cấp phải có ít nhất 2 ký tự'
    },
    emergencyPhone: {
      required: true,
      pattern: /^[0-9]{10,11}$/,
      message: 'Số điện thoại liên hệ khẩn cấp phải có 10-11 chữ số'
    },
    volunteerExperience: {
      required: true,
      minLength: 20,
      message: 'Kinh nghiệm tình nguyện phải có ít nhất 20 ký tự'
    },
    agreeTerms: {
      required: true,
      message: 'Bạn phải đồng ý với điều khoản sử dụng'
    },
    agreePrivacy: {
      required: true,
      message: 'Bạn phải đồng ý với chính sách bảo mật'
    },
    hasCovidVaccine: {
      required: true,
      message: 'Bạn phải đã tiêm vaccine COVID-19 để tham gia'
    },
    hasHealthInsurance: {
      required: true,
      message: 'Bạn phải có bảo hiểm y tế để tham gia'
    },
    canWorkOutdoor: {
      required: true,
      message: 'Bạn phải có khả năng làm việc ngoài trời'
    },
    canWorkWeekend: {
      required: true,
      message: 'Bạn phải có khả năng làm việc cuối tuần'
    },
    hasTransportation: {
      required: true,
      message: 'Bạn phải có phương tiện di chuyển đến địa điểm'
    },
    agreeHealthCheck: {
      required: true,
      message: 'Bạn phải đồng ý kiểm tra sức khỏe trước khi tham gia'
    },
    agreeEmergencyContact: {
      required: true,
      message: 'Bạn phải đồng ý cung cấp thông tin liên hệ khẩn cấp'
    }
  };

  const activity = {
    id: 1,
    title: 'Hành trình yêu thương – Đến với vùng cao',
    date: '15/01/2024 - 20/01/2024',
    location: 'Xã Đắk Nông, Huyện Đắk Glong, Tỉnh Đắk Nông',
    participants: { current: 17, max: 20 },
    image: 'https://homepage.momocdn.net/blogscontents/momo-upload-api-240129140308-638421337889338088.jpg',
    timeline: [
      { day: 'Ngày 1', time: '08:00', activity: 'Tập trung tại điểm hẹn, di chuyển đến địa điểm' },
      { day: 'Ngày 1', time: '14:00', activity: 'Làm quen với cộng đồng, chuẩn bị công việc' },
      { day: 'Ngày 2-3', time: '08:00-17:00', activity: 'Xây dựng sân chơi, tổ chức lớp học' },
      { day: 'Ngày 4', time: '08:00-17:00', activity: 'Khám sức khỏe, trao quà cho người dân' },
      { day: 'Ngày 5', time: '08:00-12:00', activity: 'Tổ chức lễ hội văn hóa, tổng kết chương trình' }
    ]
  };

  const steps = [
    { label: 'Thông tin cá nhân',  description: 'Thông tin cơ bản của bạn' },
    { label: 'Học tập & Công việc', description: 'Trình độ và nghề nghiệp' },
    { label: 'Kinh nghiệm & Kỹ năng',  description: 'Kinh nghiệm tình nguyện' },
    { label: 'Thông tin khác',  description: 'Liên hệ khẩn cấp & sức khỏe' },
    { label: 'Xác nhận đăng ký',  description: 'Kiểm tra và gửi đăng ký' }
  ];


  const educationLevels = [
    'Trung học phổ thông',
    'Cao đẳng',
    'Đại học',
    'Sau đại học',
    'Khác'
  ];

  const skillOptions = [
    'Chăm sóc trẻ em',
    'Y tế cơ bản',
    'Giảng dạy',
    'Xây dựng',
    'Nấu ăn',
    'Giao tiếp',
    'Lãnh đạo nhóm',
    'Ngoại ngữ',
    'Âm nhạc',
    'Thể thao'
  ];

  const availabilityOptions = [
    'Có thể tham gia toàn bộ chương trình',
    'Chỉ tham gia một số ngày',
    'Chỉ tham gia buổi sáng',
    'Chỉ tham gia buổi chiều'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
    // Log for debugging
    console.log(`Field ${field} changed to:`, value);
  };

  const handleSkillToggle = (skill) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    // Helper function to validate field
    const validateField = (fieldName, value) => {
      const rule = validationRules[fieldName];
      if (!rule) return '';

      if (rule.required && (!value || (typeof value === 'string' && !value.trim()))) {
        return rule.message || `${fieldName} là bắt buộc`;
      }

      if (value && typeof value === 'string') {
        if (rule.minLength && value.trim().length < rule.minLength) {
          return rule.message || `${fieldName} phải có ít nhất ${rule.minLength} ký tự`;
        }
        if (rule.maxLength && value.trim().length > rule.maxLength) {
          return rule.message || `${fieldName} không được quá ${rule.maxLength} ký tự`;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          return rule.message || `${fieldName} không hợp lệ`;
        }
      }

      // Special validation for date of birth
      if (fieldName === 'dateOfBirth' && value) {
        const birthDate = new Date(value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
        
        if (age < validationRules.dateOfBirth.minAge || age > validationRules.dateOfBirth.maxAge) {
          return validationRules.dateOfBirth.message;
        }
      }

      return '';
    };

    switch (step) {
      case 0:
        // Thông tin cá nhân
        newErrors.fullName = validateField('fullName', formData.fullName);
        newErrors.phone = validateField('phone', formData.phone);
        newErrors.email = validateField('email', formData.email);
        newErrors.dateOfBirth = validateField('dateOfBirth', formData.dateOfBirth);
        newErrors.gender = validateField('gender', formData.gender);
        newErrors.address = validateField('address', formData.address);
        break;
      case 1:
        // Học tập & Công việc
        newErrors.education = validateField('education', formData.education);
        if (!formData.school.trim()) newErrors.school = 'Vui lòng nhập trường học/cơ quan';
        break;
      case 2:
        // Kinh nghiệm & Kỹ năng
        newErrors.volunteerExperience = validateField('volunteerExperience', formData.volunteerExperience);
        if (!formData.availability) newErrors.availability = 'Vui lòng chọn khả năng tham gia';
        break;
      case 3:
        // Thông tin khác
        newErrors.emergencyContact = validateField('emergencyContact', formData.emergencyContact);
        newErrors.emergencyPhone = validateField('emergencyPhone', formData.emergencyPhone);
        break;
      case 4:
        // Xác nhận đăng ký
        newErrors.agreeTerms = validateField('agreeTerms', formData.agreeTerms);
        newErrors.agreePrivacy = validateField('agreePrivacy', formData.agreePrivacy);
        newErrors.hasCovidVaccine = validateField('hasCovidVaccine', formData.hasCovidVaccine);
        newErrors.hasHealthInsurance = validateField('hasHealthInsurance', formData.hasHealthInsurance);
        newErrors.canWorkOutdoor = validateField('canWorkOutdoor', formData.canWorkOutdoor);
        newErrors.canWorkWeekend = validateField('canWorkWeekend', formData.canWorkWeekend);
        newErrors.hasTransportation = validateField('hasTransportation', formData.hasTransportation);
        newErrors.agreeHealthCheck = validateField('agreeHealthCheck', formData.agreeHealthCheck);
        newErrors.agreeEmergencyContact = validateField('agreeEmergencyContact', formData.agreeEmergencyContact);
        break;
    }

    // Remove empty error messages
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (!formData.agreeTerms || !formData.agreePrivacy) {
      setErrors({ terms: 'Vui lòng đồng ý với các điều khoản' });
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('🎉 Đăng ký thành công! Cảm ơn bạn đã lan tỏa yêu thương! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
    navigate('/hoat-dong');
  };

  const getProgressPercentage = () => {
    return ((activeStep + 1) / steps.length) * 100;
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Họ và tên"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                error={!!errors.fullName}
                helperText={errors.fullName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Số điện thoại"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                error={!!errors.phone}
                helperText={errors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Ngày sinh"
                type="date"
                value={formData.dateOfBirth}
                onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                error={!!errors.dateOfBirth}
                helperText={errors.dateOfBirth}
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarToday />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.gender}>
                <FormLabel>Giới tính</FormLabel>
                <RadioGroup
                  row
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Nam" />
                  <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                  <FormControlLabel value="other" control={<Radio />} label="Khác" />
                </RadioGroup>
                {errors.gender && <Typography color="error" variant="caption">{errors.gender}</Typography>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{ width: '100%', maxWidth: '600px' }}>
                <TextField
                  fullWidth
                  label="Địa chỉ"
                  multiline
                  rows={3}
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  error={!!errors.address}
                  helperText={errors.address || "Nhập địa chỉ chi tiết (số nhà, đường, phường/xã, quận/huyện, tỉnh/thành phố)"}
                  placeholder="Ví dụ: 123 Đường ABC, Phường XYZ, Quận 1, TP.HCM"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOn />
                      </InputAdornment>
                    ),
                  }}
                                  sx={{
                  '& .MuiInputBase-root': {
                    alignItems: 'flex-start',
                    paddingTop: '12px'
                  },
                  '& .MuiInputAdornment-root': {
                    marginTop: '12px',
                    alignSelf: 'flex-start'
                  },
                  '& .MuiInputBase-inputMultiline': {
                    paddingTop: '12px'
                  }
                }}
                />
              </Box>
            </Grid>
          </Grid>
        );

      case 1:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={!!errors.education}>
                <InputLabel>Trình độ học vấn</InputLabel>
                <Select
                  value={formData.education}
                  onChange={(e) => handleInputChange('education', e.target.value)}
                  label="Trình độ học vấn"
                >
                  {educationLevels.map((level) => (
                    <MenuItem key={level} value={level}>{level}</MenuItem>
                  ))}
                </Select>
                {errors.education && <Typography color="error" variant="caption">{errors.education}</Typography>}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Trường học/Cơ sở đào tạo"
                value={formData.school}
                onChange={(e) => handleInputChange('school', e.target.value)}
                error={!!errors.school}
                helperText={errors.school}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <School />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Chuyên ngành"
                value={formData.major}
                onChange={(e) => handleInputChange('major', e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nghề nghiệp hiện tại"
                value={formData.occupation}
                onChange={(e) => handleInputChange('occupation', e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Work />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Công ty/Đơn vị công tác"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
              />
            </Grid>
          </Grid>
        );

      case 2:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Kinh nghiệm tình nguyện"
                multiline
                rows={4}
                value={formData.volunteerExperience}
                onChange={(e) => handleInputChange('volunteerExperience', e.target.value)}
                error={!!errors.volunteerExperience}
                helperText={errors.volunteerExperience || "Mô tả các hoạt động tình nguyện bạn đã tham gia (nếu có)"}
                placeholder="Ví dụ: Tham gia dọn dẹp môi trường, dạy học cho trẻ em, hỗ trợ người già..."
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>Kỹ năng và sở trường</Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {skillOptions.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    onClick={() => handleSkillToggle(skill)}
                    color={formData.skills.includes(skill) ? 'primary' : 'default'}
                    variant={formData.skills.includes(skill) ? 'filled' : 'outlined'}
                    icon={formData.skills.includes(skill) ? <CheckCircle /> : <FavoriteBorder />}
                  />
                ))}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.availability}>
                <InputLabel>Khả năng tham gia</InputLabel>
                <Select
                  value={formData.availability}
                  onChange={(e) => handleInputChange('availability', e.target.value)}
                  label="Khả năng tham gia"
                >
                  {availabilityOptions.map((option) => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                  ))}
                </Select>
                {errors.availability && <Typography color="error" variant="caption">{errors.availability}</Typography>}
              </FormControl>
            </Grid>
          </Grid>
        );

      case 3:
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Người liên hệ khẩn cấp"
                value={formData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                error={!!errors.emergencyContact}
                helperText={errors.emergencyContact}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Số điện thoại khẩn cấp"
                value={formData.emergencyPhone}
                onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                error={!!errors.emergencyPhone}
                helperText={errors.emergencyPhone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Tình trạng sức khỏe"
                multiline
                rows={2}
                value={formData.healthConditions}
                onChange={(e) => handleInputChange('healthConditions', e.target.value)}
                helperText="Mô tả các vấn đề sức khỏe cần lưu ý (nếu có)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Chế độ ăn uống đặc biệt"
                multiline
                rows={2}
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                helperText="Dị ứng thực phẩm, chế độ ăn chay, kiêng kỵ... (nếu có)"
              />
            </Grid>
          </Grid>
        );

      case 4:
        return (
          <Box>
            <Alert severity="success" sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>🎉 Xác nhận thông tin đăng ký</Typography>
              <Typography variant="body2">
                Vui lòng kiểm tra lại thông tin trước khi gửi đăng ký. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.
              </Typography>
            </Alert>
            
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>Thông tin cá nhân</Typography>
                <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                  <Typography><strong>Họ tên:</strong> {formData.fullName}</Typography>
                  <Typography><strong>SĐT:</strong> {formData.phone}</Typography>
                  <Typography><strong>Email:</strong> {formData.email}</Typography>
                  <Typography><strong>Ngày sinh:</strong> {formData.dateOfBirth}</Typography>
                  <Typography><strong>Giới tính:</strong> {formData.gender === 'male' ? 'Nam' : formData.gender === 'female' ? 'Nữ' : 'Khác'}</Typography>
                  <Typography><strong>Địa chỉ:</strong> {formData.address}</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Typography variant="h6" sx={{ mb: 2 }}>Học tập & Công việc</Typography>
                <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                  <Typography><strong>Trình độ:</strong> {formData.education}</Typography>
                  <Typography><strong>Trường:</strong> {formData.school}</Typography>
                  <Typography><strong>Chuyên ngành:</strong> {formData.major}</Typography>
                  <Typography><strong>Nghề nghiệp:</strong> {formData.occupation}</Typography>
                  <Typography><strong>Công ty:</strong> {formData.company}</Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12}>
                <Typography variant="h6" sx={{ mb: 2 }}>Kinh nghiệm & Kỹ năng</Typography>
                <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                  <Typography><strong>Kinh nghiệm:</strong> {formData.volunteerExperience}</Typography>
                  <Typography><strong>Kỹ năng:</strong> {formData.skills.join(', ')}</Typography>
                  <Typography><strong>Khả năng tham gia:</strong> {formData.availability}</Typography>
                </Box>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>Điều kiện tham gia</Typography>
              <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hasCovidVaccine}
                          onChange={(e) => handleInputChange('hasCovidVaccine', e.target.checked)}
                          color="primary"
                        />
                      }
                      label="✅ Đã tiêm vaccine COVID-19"
                    />
                    {errors.hasCovidVaccine && (
                      <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                        {errors.hasCovidVaccine}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hasHealthInsurance}
                          onChange={(e) => handleInputChange('hasHealthInsurance', e.target.checked)}
                          color="primary"
                        />
                      }
                      label="🏥 Có bảo hiểm y tế"
                    />
                    {errors.hasHealthInsurance && (
                      <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                        {errors.hasHealthInsurance}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.canWorkOutdoor}
                          onChange={(e) => handleInputChange('canWorkOutdoor', e.target.checked)}
                          color="primary"
                        />
                      }
                      label="🌞 Có khả năng làm việc ngoài trời"
                    />
                    {errors.canWorkOutdoor && (
                      <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                        {errors.canWorkOutdoor}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.canWorkWeekend}
                          onChange={(e) => handleInputChange('canWorkWeekend', e.target.checked)}
                          color="primary"
                        />
                      }
                      label="📅 Có khả năng làm việc cuối tuần"
                    />
                    {errors.canWorkWeekend && (
                      <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                        {errors.canWorkWeekend}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={formData.hasTransportation}
                          onChange={(e) => handleInputChange('hasTransportation', e.target.checked)}
                          color="primary"
                        />
                      }
                      label="🚗 Có phương tiện di chuyển"
                    />
                    {errors.hasTransportation && (
                      <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                        {errors.hasTransportation}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>Đồng ý điều khoản</Typography>
              <Box sx={{ p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                      color="primary"
                    />
                  }
                  label="📋 Tôi đồng ý với các điều khoản và quy định của chương trình"
                />
                {errors.agreeTerms && (
                  <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                    {errors.agreeTerms}
                  </Typography>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreePrivacy}
                      onChange={(e) => handleInputChange('agreePrivacy', e.target.checked)}
                      color="primary"
                    />
                  }
                  label="🔒 Tôi đồng ý cho phép sử dụng thông tin cá nhân cho mục đích liên lạc"
                />
                {errors.agreePrivacy && (
                  <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                    {errors.agreePrivacy}
                  </Typography>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreePhoto}
                      onChange={(e) => handleInputChange('agreePhoto', e.target.checked)}
                      color="primary"
                    />
                  }
                  label="📸 Tôi đồng ý cho phép chụp ảnh và sử dụng hình ảnh trong hoạt động"
                />

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeHealthCheck}
                      onChange={(e) => handleInputChange('agreeHealthCheck', e.target.checked)}
                      color="primary"
                    />
                  }
                  label="🏥 Tôi đồng ý kiểm tra sức khỏe trước khi tham gia"
                />
                {errors.agreeHealthCheck && (
                  <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                    {errors.agreeHealthCheck}
                  </Typography>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agreeEmergencyContact}
                      onChange={(e) => handleInputChange('agreeEmergencyContact', e.target.checked)}
                      color="primary"
                    />
                  }
                  label="📞 Tôi đồng ý cung cấp thông tin liên hệ khẩn cấp"
                />
                {errors.agreeEmergencyContact && (
                  <Typography color="error" variant="caption" sx={{ display: 'block', ml: 4 }}>
                    {errors.agreeEmergencyContact}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Box>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <AppBar />
      <Box sx={{ bgcolor: '#f8f9fa', minHeight: '100vh' }}>
        {/* Hero Banner với ảnh nền cảm xúc */}
        <Box sx={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
          <img 
            src={activity.image} 
            alt="Volunteer"
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              filter: 'brightness(0.7)'
            }}
          />
          <Box sx={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(135deg, rgba(26,35,126,0.8) 0%, rgba(255,215,0,0.8) 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}>
            <Container maxWidth="lg">
              <Box sx={{ textAlign: 'center', color: 'white' }}>
                <Typography variant="h3" sx={{ 
                  fontWeight: 800, mb: 2,
                  fontSize: { xs: '28px', md: '42px' },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                }}>
                  Chúng ta không thể giúp tất cả mọi người, nhưng ai cũng có thể giúp một người.
                </Typography>
                <Typography variant="h6" sx={{ 
                  fontWeight: 300,
                  fontSize: { xs: '16px', md: '20px' },
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                }}>
                  Hãy cùng chúng tôi lan tỏa yêu thương và tạo nên sự khác biệt!
                </Typography>
              </Box>
            </Container>
          </Box>
        </Box>

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {/* Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
            <IconButton onClick={() => navigate(`/hoat-dong/${id}`)} sx={{ mr: 2 }}>
              <ArrowBack />
            </IconButton>
            <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a237e' }}>
              Đăng Ký Tham Gia
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Main Content */}
            <Grid item xs={12} lg={8}>
              {/* Activity Info Card */}
              <Card sx={{ mb: 4, bgcolor: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                <CardContent sx={{ p: 3 }}>
                  <Grid container spacing={3} alignItems="center">
                    <Grid item xs={12} sm={3}>
                      <img 
                        src={activity.image} 
                        alt={activity.title}
                        style={{ 
                          width: '100%', 
                          height: '120px', 
                          objectFit: 'cover',
                          borderRadius: '8px'
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                      <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: '#1a237e' }}>
                        {activity.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <CalendarToday sx={{ fontSize: 16, color: '#6c757d' }} />
                          <Typography variant="body2" sx={{ color: '#6c757d' }}>
                            {activity.date}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <LocationOn sx={{ fontSize: 16, color: '#6c757d' }} />
                          <Typography variant="body2" sx={{ color: '#6c757d' }}>
                            {activity.location}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Person sx={{ fontSize: 16, color: '#6c757d' }} />
                          <Typography variant="body2" sx={{ color: '#6c757d' }}>
                            {activity.participants.current}/{activity.participants.max} TNV
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Timer */}
              <Card sx={{ mb: 4, bgcolor: isTimerExpired ? '#ffebee' : '#fff3cd', border: isTimerExpired ? '1px solid #f44336' : '1px solid #ffd700' }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: isTimerExpired ? '#d32f2f' : '#856404' }}>
                        Thời gian còn lại
                      </Typography>
                    </Box>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1,
                      bgcolor: isTimerExpired ? '#f44336' : '#ffd700',
                      color: isTimerExpired ? 'white' : '#1a237e',
                      px: 3,
                      py: 1,
                      borderRadius: 2,
                      fontWeight: 700,
                      fontSize: '18px'
                    }}>
                      {isTimerExpired ? 'HẾT THỜI GIAN' : formatTime(timeLeft)}
                    </Box>
                  </Box>
                  {isTimerExpired && (
                    <Alert severity="error" sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        Thời gian đăng ký đã hết! Vui lòng bắt đầu lại hoặc liên hệ với chúng tôi để được hỗ trợ.
                      </Typography>
                    </Alert>
                  )}
                  {!isTimerExpired && timeLeft < 300 && (
                    <Alert severity="warning" sx={{ mt: 2 }}>
                      <Typography variant="body2">
                        ⚠️ Chỉ còn {Math.floor(timeLeft / 60)} phút! Hãy hoàn thành đăng ký nhanh chóng.
                      </Typography>
                    </Alert>
                  )}
                </CardContent>
              </Card>
              {/* Progress Indicator */}
              <Card sx={{ mb: 4 }}>
                <CardContent sx={{ p: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: '#1a237e' }}>
                      Tiến độ đăng ký
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#6c757d' }}>
                      {Math.round(getProgressPercentage())}% hoàn thành
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={getProgressPercentage()}
                    sx={{ 
                      height: 12, 
                      borderRadius: 6, 
                      bgcolor: '#e9ecef',
                      '& .MuiLinearProgress-bar': { 
                        bgcolor: '#ffd700',
                        borderRadius: 6
                      }
                    }}
                  />
                </CardContent>
              </Card>


              {/* Stepper */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 4 }}>
                  <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
                    {steps.map((step) => (
                      <Step key={step.label}>
                        <StepLabel 
                          icon={
                            <Box sx={{ 
                              display: 'flex', 
                              flexDirection: 'column', 
                              alignItems: 'center',
                              fontSize: '24px'
                            }}>
                              {step.icon}
                            </Box>
                          }
                        >
                          <Box>
                            <Typography variant="body2" sx={{ fontWeight: 600 }}>
                              {step.label}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#6c757d' }}>
                              {step.description}
                            </Typography>
                          </Box>
                        </StepLabel>
                      </Step>
                    ))}
                  </Stepper>

                  <Divider sx={{ mb: 4 }} />

                  {/* Step Content */}
                  <Box sx={{ minHeight: '300px', opacity: isTimerExpired ? 0.5 : 1, pointerEvents: isTimerExpired ? 'none' : 'auto' }}>
                    {renderStepContent(activeStep)}
                  </Box>

                  {/* Navigation Buttons */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <Button
                      disabled={activeStep === 0 || isTimerExpired}
                      onClick={handleBack}
                      sx={{ px: 4 }}
                    >
                      Quay lại
                    </Button>
                    
                    <Box>
                      {activeStep === steps.length - 1 ? (
                        <Button
                          variant="contained"
                          disabled={isTimerExpired}
                          onClick={handleSubmit}
                          startIcon={<Celebration />}
                          sx={{
                            bgcolor: isTimerExpired ? '#ccc' : '#ffd700',
                            color: isTimerExpired ? '#666' : '#1a237e',
                            fontWeight: 700,
                            px: 4,
                            '&:hover': { 
                              bgcolor: isTimerExpired ? '#ccc' : '#ffed4e' 
                            }
                          }}
                        >
                          {isTimerExpired ? 'Hết thời gian' : 'Gửi Đăng Ký'}
                        </Button>
                      ) : (
                        <Button
                          variant="contained"
                          disabled={isTimerExpired}
                          onClick={handleNext}
                          sx={{
                            bgcolor: isTimerExpired ? '#ccc' : '#1a237e',
                            px: 4,
                            '&:hover': { 
                              bgcolor: isTimerExpired ? '#ccc' : '#0d47a1' 
                            }
                          }}
                        >
                          Tiếp tục
                        </Button>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ActivityRegistration; 