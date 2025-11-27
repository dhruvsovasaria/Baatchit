import Landing from "./components/Landing";
import { Room } from "./components/Room";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route
          path="*"
          element={
            <div>
              404 Not Found. Go back to <Link to="/">Home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
