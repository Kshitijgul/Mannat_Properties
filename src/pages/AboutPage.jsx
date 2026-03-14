function AboutPage() {
  const values = [
    { icon: "🗺️", title: "Our Mission", desc: "To make Philippine travel seamless, authentic, and unforgettable for every type of traveler." },
    { icon: "🤝", title: "Local First", desc: "We work with local guides and businesses to ensure your journey supports communities." },
    { icon: "🌿", title: "Sustainable Travel", desc: "Committed to eco-friendly practices and preserving the natural beauty of the Philippines." },
    { icon: "⭐", title: "Expert Curation", desc: "Every destination and package is hand-picked and verified by our travel experts." },
  ];
  return (
    <main className="min-h-screen pt-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-slate-900 tracking-widest mb-4" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56 }}>About Us</h2>
        <p className="text-slate-600 text-lg leading-relaxed mb-14" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          WanderPH is your ultimate travel companion for exploring the breathtaking beauty of the Philippines. Born from a passion for local travel and a desire to make adventure accessible, we connect travelers with curated experiences, trusted local guides, and seamless planning tools.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map(v => (
            <div key={v.title} className="bg-white rounded-2xl p-7 border" style={{ borderColor: "#e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <div className="text-4xl mb-4">{v.icon}</div>
              <h4 className="text-lg font-bold mb-2" style={{ color: "#0f172a", fontFamily: "'Playfair Display', serif" }}>{v.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: "#64748b", fontFamily: "'DM Sans', sans-serif" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default AboutPage;