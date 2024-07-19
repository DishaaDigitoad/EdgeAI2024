import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import mainbackground from "./assets/mainbackground.jpg";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading delay (e.g., fetching data, initializing state)
    setTimeout(() => {
      setIsLoading(false); // Set loading to false after the delay
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <div className="relative min-h-screen bg-bone ">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <Sidebar
            isOpen={sidebarOpen}
            toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          />
          <Content />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
