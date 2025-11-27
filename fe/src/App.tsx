import Landing from "./components/Landing";
import { Room } from "./Room";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Home Page</h1>
              <Link to="/about">Go to About Page</Link>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <h1>About Page</h1>
              <Link to="/">Go to Home Page</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
