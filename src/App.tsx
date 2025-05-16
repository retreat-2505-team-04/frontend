import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
      <>
          <Router>
              <Routes>
                  {/*<Route path="/" element={<HomePage />} />*/}
              </Routes>
          </Router>
          <h1>Hello world</h1>
      </>
  );
}

export default App;
