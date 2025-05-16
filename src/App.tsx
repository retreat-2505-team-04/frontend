
// @ts-nocheck

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import './App.css';
import OrdersPage from "./pages/orders/orders";
import StatusPage from "./pages/status/status";
import RiskAnalysisPage from "./pages/kockazatelemzes/kockazat";
import ZombiesPage from "./pages/zombies/zombies";

const navbarStyle = {
    padding: '10px',
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    padding: "20px 0",
    paddingRight: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1000,
    boxShadow: "0 4px 8px rgba(0, 255, 0, 0.3)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const navTitleStyle = {
    color: "#9fff00",
    fontSize: "1.8em",
    fontWeight: "bold",
};

const navLinksStyle = {
    display: "flex",
    gap: "20px",
    marginRight: "20px",
};

const navLinkStyle = {
    color: "#f1f1f1",
    textDecoration: "none",
    fontSize: "1.1em",
    transition: "color 0.3s",
};


function App() {
  return (
      <>
          <script>
              {`function initMap() {
                      const map = new google.maps.Map(document.getElementById('map'), {
                      center: { lat: 47.4979, lng: 19.0402 },
                      zoom: 13,
                      styles: [
                  { elementType: 'geometry', stylers: [{ color: '#1d2c4d' }] },
                  { elementType: 'labels.text.fill', stylers: [{ color: '#8ec3b9' }] },
                  { elementType: 'labels.text.stroke', stylers: [{ color: '#1a3646' }] },
                  {
                      featureType: 'road',
                      elementType: 'geometry',
                      stylers: [{ color: '#406880' }],
                  },
                      ],
                  });
                  window.initMap = initMap;
                  `
              }
              </script>
          <div style={navbarStyle}>
              <div style={navTitleStyle}>🧟‍♂️ AgyKurier</div>
              <div style={navLinksStyle}>
                  <a href="/" style={navLinkStyle}>Kezdőlap</a>
                  <a href="#orders" style={navLinkStyle}>Rendelések</a>
                  <a href="#zombies" style={navLinkStyle}>Zombik</a>
                  <a href="#risk" style={navLinkStyle}>Kockázatelemzés</a>
                  <a href="#status" style={navLinkStyle}>Státusz lekérdezés</a>
                  {/*<a href="/guide" style={navLinkStyle}>Zombi Kézikönyv</a>*/}
              </div>
          </div>

          <Router>
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/orders" element={<OrdersPage />} />
                  <Route path="/status" element={<StatusPage />} />
                  <Route path="/risk" element={<RiskAnalysisPage />} />
                  <Route path="/zombies" element={<ZombiesPage />} />
              </Routes>
          </Router>
      </>
  );
}

export default App;
