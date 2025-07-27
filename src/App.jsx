import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/appBar/menus/home/index.jsx';
import Activity from './components/appBar/menus/activity/index.jsx';
import ActivityDetail from './components/appBar/menus/activity/activityDetail/index.jsx';
import Registration from './pages/view/customer/registration/index.jsx';
import Login from './components/appBar/auth/login/index.jsx';
import SignUp from './components/appBar/auth/signUp/index.jsx';
import DonationPage from './components/appBar/menus/donation/index.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dang-nhap" element={<Login />} />
        <Route path="/dang-ky" element={<SignUp />} />
        <Route path="/hoat-dong" element={<Activity />} />
        <Route path="/hoat-dong/:id" element={<ActivityDetail />} />
        <Route path="/dang-ky-hoat-dong/:id" element={<Registration />} />
        <Route path="/quyen-gop" element={<DonationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
