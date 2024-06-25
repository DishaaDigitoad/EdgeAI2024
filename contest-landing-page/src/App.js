import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
      />
      <Content />
    </div>
  );
}

export default App;
