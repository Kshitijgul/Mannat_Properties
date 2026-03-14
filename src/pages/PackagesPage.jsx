import { PACKAGES } from "../data/data";

function PackagesPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-slate-900 tracking-widest mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56 }}>Packages</h2>
        <p className="text-slate-400 mb-12 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>All-inclusive travel experiences, thoughtfully designed for every type of traveler.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PACKAGES.map(pkg => (
            <div key={pkg.id} className="rounded-3xl p-8 relative"
              style={{
                background: pkg.highlight ? "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)" : "#fff",
                boxShadow: pkg.highlight ? "0 20px 60px rgba(59,130,246,0.25)" : "0 4px 20px rgba(0,0,0,0.08)",
                transform: pkg.highlight ? "scale(1.04)" : "none",
                border: pkg.highlight ? "none" : "1px solid #e2e8f0",
              }}>
              {pkg.highlight && (
                <span className="absolute top-5 right-5 text-white text-xs font-bold rounded-full px-3 py-1" style={{ background: "#3b82f6", fontFamily: "'DM Sans', sans-serif" }}>BEST VALUE</span>
              )}
              <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: pkg.highlight ? "rgba(255,255,255,0.4)" : "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>{pkg.days}</div>
              <h3 className="text-3xl mb-1" style={{ fontFamily: "'Playfair Display', serif", color: pkg.highlight ? "#fff" : "#0f172a" }}>{pkg.title}</h3>
              <p className="text-sm mb-6" style={{ fontFamily: "'DM Sans', sans-serif", color: pkg.highlight ? "rgba(255,255,255,0.6)" : "#64748b" }}>📍 {pkg.destinations}</p>
              <div className="mb-8 space-y-2">
                {pkg.includes.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span style={{ color: "#60a5fa" }}>✓</span>
                    <span className="text-sm" style={{ fontFamily: "'DM Sans', sans-serif", color: pkg.highlight ? "rgba(255,255,255,0.8)" : "#475569" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs mb-1" style={{ fontFamily: "'DM Sans', sans-serif", color: pkg.highlight ? "rgba(255,255,255,0.4)" : "#94a3b8" }}>Starting from</div>
                  <div className="text-4xl font-black tracking-widest" style={{ fontFamily: "'Bebas Neue', sans-serif", color: pkg.highlight ? "#fff" : "#0f172a" }}>{pkg.price}</div>
                </div>
                <button className="rounded-full px-5 py-2.5 text-sm font-bold text-white border-0 cursor-pointer"
                  style={{ fontFamily: "'DM Sans', sans-serif", background: pkg.highlight ? "#3b82f6" : "#0f172a" }}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default PackagesPage;