import { useState } from "react";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import PackagesPage from "./pages/PackagesPage";
import BlogPage from "./pages/BlogPage";
import AboutPage from "./pages/AboutPage";

export default function App() {

  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage setCurrentPage={setCurrentPage} />;

      case "destinations":
        return <DestinationsPage />;

      case "packages":
        return <PackagesPage />;

      case "blog":
        return <BlogPage />;

      case "aboutus":
        return <AboutPage />;

      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
    </>
  );
}