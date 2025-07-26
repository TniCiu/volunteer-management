import { Box, Typography, Container, Grid, Link } from "@mui/material";

const PRIMARY_BLUE = "#1976d2";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: PRIMARY_BLUE, color: "#fff", py: 5, mt: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Tình Nguyện Viên
            </Typography>
            <Typography variant="body2">
              Kết nối cộng đồng – Lan tỏa yêu thương.
            </Typography>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Liên kết nhanh
            </Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit" display="block" mb={1}>
                Trang chủ
              </Link>
              <Link href="#" underline="hover" color="inherit" display="block" mb={1}>
                Sự kiện
              </Link>
              <Link href="#" underline="hover" color="inherit" display="block" mb={1}>
                Giới thiệu
              </Link>
              <Link href="#" underline="hover" color="inherit" display="block">
                Liên hệ
              </Link>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2">
              Email: contact@tinhnguyenvien.org
              <br />
              Hotline: 0123 456 789
              <br />
              Địa chỉ: 123 Đường Tình Nguyện, TP. Hà Nội
            </Typography>
          </Grid>
        </Grid>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" fontSize={13}>
            © {new Date().getFullYear()} Tình Nguyện Viên. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
