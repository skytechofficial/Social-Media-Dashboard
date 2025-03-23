import React from 'react';
import ReactDOM from 'react-dom/client'; // Ensure you import ReactDOM
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstagramLogin from './Components/InstagramLogin';
import InstagramDashboard from './Components/InstagramDashboard';
import Home from './Components/Home';
import GithubLogin from './Components/GithubLogin';
import GithubDashboard from './Components/GithubDashboard';

function SocialMediaDashboard() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/githubLogin" element={<GithubLogin />} />
      <Route path="/instagramLogin" element={<InstagramLogin />} />
      <Route path="/instagramDashboard/:username" element={<InstagramDashboard />} />
      <Route path="/githubDashboard/:username" element={<GithubDashboard />} />
    </Routes>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SocialMediaDashboard />
  </BrowserRouter>
);
