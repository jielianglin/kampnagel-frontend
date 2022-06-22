import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ResponsiveAppBar from "./components/Nav-bar";
import Chat from "./pages/Chat";
import Events from "./pages/Events";
import Friends from "./pages/Friends";
import Profile from "./pages/Profile";
import Sidebar from "./components/Events-sidebar";

import "./App.css";

function App() {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="router">
        <Router>
          <ResponsiveAppBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/chat" element={<Chat />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/friends" element={<Friends />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </div>

    </div>
  );
}

export default App;
