import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  InputBase,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


const PRIMARY_BLUE = "#1a237e";

const CustomAppBar = ({
  title = "Tình Nguyện Viên",
  slogan = "Lan tỏa yêu thương – Kết nối cộng đồng",
  onActivityClick,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();


  return (
    <AppBar
      position="sticky"
      sx={{
        background: PRIMARY_BLUE,
        boxShadow: 2,
        px: { xs: 1, md: 4 },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: 100 }}>
        {/* Logo + Tên tổ chức */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontWeight: "bold",
                lineHeight: 1.1,
                letterSpacing: 1,
                color: "#fff",
              }}
            >
              {title}
            </Typography>
            {!isMobile && (
              <Typography
                variant="body2"
                sx={{ lineHeight: 1, color: "#e3f0ff", fontSize: 14 }}
              >
                {slogan}
              </Typography>
            )}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, md: 3 },
            ml: 2,
          }}
        >
          {!isMobile && (
            <>
              <Button href='/' color="inherit" sx={{ fontWeight: 500 }}>
                Trang chủ
              </Button>
                            <Button 
                color="inherit" 
                sx={{ fontWeight: 500 }}
                onClick={onActivityClick || (() => navigate("/hoat-dong"))}
              >
                Hoạt động
              </Button>
              <Button 
                color="inherit" 
                sx={{ fontWeight: 500 }}
                onClick={() => navigate("/quyen-gop")}
              >
                Quyên góp
              </Button>
              <Button 
                color="inherit" 
                sx={{ fontWeight: 500 }}
                onClick={() => navigate("/dang-ky-tinh-nguyen-vien")}
              >
                Đăng ký TNV
              </Button>
            </>
          )}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              background: "#fff",
              borderRadius: 2,
              px: 1,
              mr: { xs: 0, md: 2 },
              minWidth: isMobile ? 90 : 160,
            }}
          >
            <InputBase
              placeholder="Tìm kiếm"
              sx={{
                ml: 1,
                flex: 1,
                color: PRIMARY_BLUE,
                fontSize: 15,
              }}
              inputProps={{ "aria-label": "search" }}
            />
            <IconButton size="small" sx={{ color: PRIMARY_BLUE }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button
            variant="contained"
            sx={{
              background: "#ffd700",
              color: "#1a237e",
              fontWeight: "bold",
              borderRadius: 5,
              px: 3,
              boxShadow: 1,
              "&:hover": { background: "#ffe066" },
              ml: { xs: 0, md: 1 },
            }}
            onClick={() => navigate("/dang-nhap")}
          >
            Đăng nhập
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
