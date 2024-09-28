import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/home/Main";
import RegistrationForm from "./pages/auth/RegistrationForm";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Blogs from "./pages/blog/Blogs";
import LoginForm from "./pages/auth/LoginForm";
import Board from './pages/board/Board';

// import LoginForm from "./pages/auth/LoginForm";

const AppRoute = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route excat path="/" element={<Main />} />
        <Route path="/posts" element={<Blogs />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/board" element={<Board />} />

        {/* Add your other routes here */}
      </Routes>
      
    <Footer />
    </BrowserRouter>
  );
}

export default AppRoute;
