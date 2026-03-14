import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data/data";

function Navbar({ currentPage, setCurrentPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
 
  const pageKey = (link) => link.toLowerCase().replace(" ", "");
 
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${scrolled ? "shadow-lg bg-white" : "bg-white bg-opacity-95"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center gap-6">
        <button onClick={() => setCurrentPage("home")} className="flex-shrink-0 text-2xl tracking-widest leading-none border-0 bg-transparent cursor-pointer" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
          <span className="text-slate-900">MAULI</span><span style={{ color: "#F35B25" }}>INFRA</span>
        </button>
 
        <div className="hidden md:flex gap-6 flex-1 justify-center">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => setCurrentPage(pageKey(link))}
              className={`text-sm font-medium transition-all duration-200 bg-transparent border-0 cursor-pointer pb-0.5 ${currentPage === pageKey(link) ? "text-blue-500 border-b-2 border-blue-500" : "text-slate-600 border-b-2 border-transparent hover:text-slate-900"}`}
              style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {link}
            </button>
          ))}
        </div>
 
        <div className="hidden sm:flex items-center rounded-full px-4 py-2 gap-2 flex-1 max-w-xs" style={{ background: "#f1f5f9" }}>
          <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#94a3b8" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input placeholder="Search place, city, destination..." className="bg-transparent outline-none text-xs w-full" style={{ fontFamily: "'DM Sans', sans-serif", color: "#475569", border: "none" }} />
        </div>
 
        <button onClick={() => setCurrentPage("packages")}
          className="hidden sm:block flex-shrink-0 text-white text-sm font-semibold rounded-full px-6 py-2 transition-colors duration-200 border-0 cursor-pointer"
          style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f172a" }}
          onMouseOver={e => e.currentTarget.style.background = "#3b82f6"}
          onMouseOut={e => e.currentTarget.style.background = "#0f172a"}>
          Book now
        </button>
 
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden ml-auto bg-transparent border-0 text-slate-800 text-xl cursor-pointer p-1">
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
 
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 pb-4" style={{ borderColor: "#f1f5f9" }}>
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => { setCurrentPage(pageKey(link)); setMenuOpen(false); }}
              className="block w-full text-left py-3 text-sm border-b bg-transparent cursor-pointer"
              style={{ fontFamily: "'DM Sans', sans-serif", color: "#334155", borderColor: "#f8fafc" }}>
              {link}
            </button>
          ))}
          <button onClick={() => { setCurrentPage("packages"); setMenuOpen(false); }}
            className="mt-3 w-full text-white rounded-full py-2.5 text-sm font-semibold border-0 cursor-pointer"
            style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f172a" }}>
            Book now
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;