function Footer({ setCurrentPage }) {
  return (
    <footer className="pt-16 pb-8" style={{ background: "#0f172a", color: "rgba(255,255,255,0.6)" }}>
      <div className="max-w-6xl mx-auto px-6 grid gap-10 mb-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        <div>
          <div className="text-white text-2xl font-black tracking-widest mb-3" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>WANDERPH</div>
          <p className="text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>Your ultimate guide to the Philippine archipelago. Plan, discover, explore.</p>
        </div>
        {[
          { title: "Explore", links: ["Destinations", "Packages", "Blog"] },
          { title: "Company", links: ["About Us", "Careers", "Press"] },
          { title: "Support", links: ["Help Center", "Contact", "Privacy"] },
        ].map(col => (
          <div key={col.title}>
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans', sans-serif" }}>{col.title}</div>
            {col.links.map(l => (
              <div key={l} className="text-sm mb-3 cursor-pointer" style={{ fontFamily: "'DM Sans', sans-serif", transition: "color 0.2s" }}
                onMouseOver={e => e.currentTarget.style.color = "#fff"}
                onMouseOut={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>{l}</div>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 pt-6 text-xs text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", fontFamily: "'DM Sans', sans-serif" }}>
        © 2026 WanderPH. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;