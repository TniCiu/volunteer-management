import React, { useState } from "react";
import { Button, TextField, Typography, Box, Divider, useMediaQuery } from "@mui/material";

const Login = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // try {
    //   // const res = await loginAPI({ email, password });
    //   localStorage.setItem("token", res.token);
    //   localStorage.setItem("ownerIds", res.ownerIds);
    //   window.dispatchEvent(new Event("storage"));
    //   toast.success(res?.message);
    //   navigate("/boards", { state: { ownerIds: res.ownerIds } });
    // } catch {
    //   setError("Login failed. Please check your credentials.");
    // }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      {!isMobile && (
        <Box
          sx={{
            flex: 1,
            maxWidth: "50%",
            position: "relative",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <video
            autoPlay
            muted
            loop
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source
              src="https://res.cloudinary.com/ddmsl3meg/video/upload/v1734022899/tnelcibodjsy5ej8hzoo.mp4"
              type="video/mp4"
            />
          </video>
        </Box>
      )}

      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "60%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: { xs: "20px", md: "40px" },
          backgroundColor: "white",
          boxShadow: { md: "0px 4px 10px rgba(0, 0, 0, 0.1)" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "600px",
            padding: { xs: "20px", md: "40px" },
            backgroundColor: "white",
            borderRadius: "8px",
          }}
        >
          <Typography
            variant="h5"
            color="#1565c0"
            fontWeight="bold"
            mb={3}
            textAlign="center"
          >
            Sign In your account
          </Typography>
          {error && (
            <Typography
              color="red"
              textAlign="center"
              sx={{ marginBottom: 2 }}
            >
              {error}
            </Typography>
          )}
          {success && (
            <Typography
              color="green"
              textAlign="center"
              sx={{ marginBottom: 2 }}
            >
              Login successful!
            </Typography>
          )}

          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            value={formData.email}
            onChange={handleChange}
            sx={{ marginBottom: 2 }}
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={formData.password}
            onChange={handleChange}
            sx={{ marginBottom: 3 }}
          />
          <Typography
            variant="body2"
            textAlign="right"
            color="primary"
            mb={2}
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Forgot password?
          </Typography>
         <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            sx={{
              backgroundColor: "#1565c0",
              color: "white",
              fontWeight: "bold",
              padding: "10px",
              borderRadius: "20px",
              marginBottom: 3,
              "&:hover": { backgroundColor: "#0984e3" },
            }}
          >
            Sign In
          </Button>

          <Divider sx={{ marginY: 2, width: "100%" }} />

          <Typography textAlign="center">
            Don't have an account?{" "}
            <Button
              href="/signUp"
              sx={{
                color: "#1565c0",
                textTransform: "none",
                fontWeight: "bold",
                textDecoration: "underline",
                padding: 0,
                minWidth: "auto",
              }}
            >
              Sign Up
            </Button>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
