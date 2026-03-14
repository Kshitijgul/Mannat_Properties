import { useState, useEffect } from "react";
import { STATS } from "../data/data";
import Heroimg from "../assets/HeroSection.png";

function HeroSection({ setCurrentPage }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 80); }, []);
 
  return (
    <section className="relative flex items-center overflow-hidden" style={{ height: "100vh", minHeight: 560 }}>
      <img src={Heroimg} alt="Philippines"
        className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.6) 0%, rgba(0,0,0,0.2) 100%)" }} />
 
      <div className="relative max-w-6xl mx-auto px-6 w-full" style={{ zIndex: 10, opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 0.8s ease" }}>
        <h1 className="text-white leading-none tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(72px,14vw,168px)", textShadow: "0 4px 40px rgba(0,0,0,0.3)" }}>
          MAULI
          <span style={{ fontSize: "0.35em", verticalAlign: "top", marginTop: "0.35em", display: "inline-block", letterSpacing: "0.4em", color: "rgba(255,255,255,0.85)" }}>INFRA</span>
        </h1>
        <p className="max-w-md text-base leading-relaxed mt-3 mb-8" style={{ color: "rgba(255,255,255,0.92)", fontFamily: "'DM Sans', sans-serif", textShadow: "0 1px 8px rgba(0,0,0,0.3)" }}>
          Today's right investment, tomorrow's prosperity. Curated plots and commercial spaces that secure your future.
        </p>
        <div className="flex flex-wrap gap-4">
          <button onClick={() => setCurrentPage("packages")}
            className="font-bold rounded-full px-8 py-3 text-sm border-0 cursor-pointer"
            style={{ background: "#fff", color: "#0f172a", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = "#3b82f6"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.color = "#0f172a"; }}>
            Book Your Property
          </button>
          <button onClick={() => setCurrentPage("destinations")}
            className="font-semibold rounded-full px-8 py-3 text-sm cursor-pointer"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "2px solid rgba(255,255,255,0.6)", backdropFilter: "blur(4px)", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.2)"; e.currentTarget.style.borderColor = "#fff"; }}
            onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; }}>
            Explore Properties
          </button>
        </div>
      </div>
 
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 10, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(16px)", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-around flex-wrap gap-4">
          {STATS.map(s => (
            <div key={s.label} className="text-center">
              <div className="text-white font-black tracking-widest text-2xl" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>{s.value}</div>
              <div className="text-xs tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Sans', sans-serif" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;