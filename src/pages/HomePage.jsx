import HeroSection from "../components/HeroSection";
import DestCard from "../components/DestCard";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";

import { DESTINATIONS, BLOGS } from "../data/data";

function HomePage({ setCurrentPage }) {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
 
      <section className="py-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-end flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-slate-900 tracking-widest leading-none" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48 }}>Featured Destinations</h2>
              <p className="text-slate-400 mt-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Handpicked destinations for every type of traveler</p>
            </div>
            <button onClick={() => setCurrentPage("destinations")}
              className="rounded-full px-6 py-2 text-sm font-semibold cursor-pointer transition-all duration-200"
              style={{ border: "2px solid #0f172a", background: "transparent", color: "#0f172a", fontFamily: "'DM Sans', sans-serif" }}
              onMouseOver={e => { e.currentTarget.style.background = "#0f172a"; e.currentTarget.style.color = "#fff"; }}
              onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0f172a"; }}>
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DESTINATIONS.slice(0, 3).map(d => <DestCard key={d.id} dest={d} />)}
          </div>
        </div>
      </section>
 
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-white tracking-widest mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 52 }}>All-Inclusive Packages</h2>
          <p className="max-w-md mx-auto mb-10 text-base" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'DM Sans', sans-serif" }}>
            Stop planning, start exploring. Our curated packages handle everything for you.
          </p>
          <button onClick={() => setCurrentPage("packages")}
            className="text-white font-bold rounded-full px-10 py-4 text-base border-0 cursor-pointer"
            style={{ background: "#3b82f6", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
            onMouseOver={e => e.currentTarget.style.background = "#60a5fa"}
            onMouseOut={e => e.currentTarget.style.background = "#3b82f6"}>
            Browse Packages
          </button>
        </div>
      </section>
 
      <section className="py-20" style={{ background: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-slate-900 tracking-widest mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 48 }}>Latest Stories</h2>
          <p className="text-slate-400 mb-10 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Tips, guides, and adventures from the field</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOGS.map(p => <BlogCard key={p.id} post={p} />)}
          </div>
        </div>
      </section>
 
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}

export default HomePage;