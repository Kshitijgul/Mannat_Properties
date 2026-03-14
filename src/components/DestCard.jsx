import { useState } from "react";

function DestCard({ dest }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      className="rounded-2xl overflow-hidden bg-white cursor-pointer"
      style={{ boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.08)", transform: hovered ? "translateY(-6px)" : "none", transition: "all 0.3s ease" }}>
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img src={dest.img} alt={dest.name} className="w-full h-full object-cover"
          style={{ transform: hovered ? "scale(1.1)" : "scale(1)", transition: "transform 0.5s ease" }} />
        <span className="absolute top-3 left-3 text-white text-xs font-bold rounded-full px-3 py-1" style={{ background: "#3b82f6", fontFamily: "'DM Sans', sans-serif" }}>
          {dest.tag}
        </span>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-slate-900 text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{dest.name}</h3>
            <p className="text-xs mt-1" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>📍 {dest.region}</p>
          </div>
          <span className="text-xl font-black" style={{ color: "#3b82f6", fontFamily: "'Bebas Neue', sans-serif" }}>{dest.price}</span>
        </div>
        <button className="w-full text-white rounded-full py-2.5 text-sm font-semibold border-0 cursor-pointer transition-colors duration-200"
          style={{ fontFamily: "'DM Sans', sans-serif", background: "#0f172a" }}
          onMouseOver={e => e.currentTarget.style.background = "#3b82f6"}
          onMouseOut={e => e.currentTarget.style.background = "#0f172a"}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default DestCard;