import React, { useState } from "react";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import BottomNav from "./components/BottomNav";
import Arrows from "./components/Arrows";

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home setPage={setPage} />;
      case "login":
        return <Login />;
      case "register":
        return <Register />;
      case "profile":
        return <Profile />;
      default:
        return <Home setPage={setPage} />;
    }
  };

  const pages = ["home", "login", "register", "profile"];

  const nextPage = () => {
    const index = pages.indexOf(page);
    setPage(pages[(index + 1) % pages.length]);
  };

  const prevPage = () => {
    const index = pages.indexOf(page);
    setPage(pages[(index - 1 + pages.length) % pages.length]);
  };

  return (
    <div className="app">
      <div className="card">
        {renderPage()}
        <Arrows next={nextPage} prev={prevPage} />
      </div>
      <BottomNav setPage={setPage} />
    </div>
  );
}

export default App;