import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from "./components/appBar/auth/login/index.jsx"
import SignUp from "./components/appBar/auth/signUp/index.jsx"
import Home from './components/appBar/menus/home/index.jsx';
function App() {

  return (
    <>
       <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/dang-nhap"
          element={<Login/>}
        />
        <Route
          path="/dang-ky"
          element={<SignUp />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
