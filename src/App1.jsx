import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import "./App.css"; // For animations and styles

// Scroll Restoration
const useScrollRestoration = () => {
  useEffect(() => {
    const restoreScroll = () => window.scrollTo(0, 0);
    restoreScroll();
  }, []);
};

// Components
const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Us</h1>;
const Contact = () => <h1>Contact Us</h1>;
const NotFound = () => <h1>404 - Page Not Found</h1>;

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const Profile = () => <h2>Profile Page</h2>;
const Settings = () => <h2>Settings Page</h2>;

const User = () => {
  const { id } = useParams();
  return <h1>User Details for User ID: {id}</h1>;
};

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("query");

  return <h1>Search Results for: {searchQuery}</h1>;
};

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    navigate("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
};

const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App1 = () => {
  useScrollRestoration();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <div className="nav">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |{" "}
        <Link to="/users/1">User 1</Link> | <Link to="/search?query=React">Search</Link> |{" "}
        {isAuthenticated ? (
          <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <Routes>
        {/* Basic Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Nested Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Dynamic Routing */}
        <Route path="/users/:id" element={<User />} />

        {/* Query Parameters */}
        <Route path="/search" element={<Search />} />

        {/* Redirection */}
        <Route path="/login" element={<Login />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App1;
