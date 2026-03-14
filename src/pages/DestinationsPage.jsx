import { useState } from "react";
import DestCard from "../components/DestCard";
import { DESTINATIONS, FILTER_TAGS } from "../data/data";

function DestinationsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? DESTINATIONS : DESTINATIONS.filter(d => d.tag === filter);
 
  return (
    <main className="min-h-screen pt-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-slate-900 tracking-widest mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56 }}>Destinations</h2>
        <p className="text-slate-400 mb-8 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Explore stunning islands and cultural gems across the archipelago.</p>
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTER_TAGS.map(tag => (
            <button key={tag} onClick={() => setFilter(tag)}
              className="rounded-full px-5 py-2 text-xs font-semibold cursor-pointer border transition-all duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif", background: filter === tag ? "#0f172a" : "#fff", color: filter === tag ? "#fff" : "#475569", borderColor: filter === tag ? "#0f172a" : "#e2e8f0" }}>
              {tag}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(d => <DestCard key={d.id} dest={d} />)}
        </div>
      </div>
    </main>
  );
}
 
export default DestinationsPage;