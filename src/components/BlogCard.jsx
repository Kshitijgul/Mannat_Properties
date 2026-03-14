function BlogCard({ post }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white cursor-pointer" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.07)", transition: "all 0.3s ease" }}
      onMouseOver={e => { e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.13)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
      onMouseOut={e => { e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "none"; }}>
      <div className="overflow-hidden" style={{ height: 180 }}>
        <img src={post.img} alt={post.title} className="w-full h-full object-cover" style={{ transition: "transform 0.5s ease" }}
          onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={e => e.currentTarget.style.transform = "scale(1)"} />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-bold rounded-full px-3 py-1" style={{ background: "#eff6ff", color: "#3b82f6", fontFamily: "'DM Sans', sans-serif" }}>{post.category}</span>
          <span className="text-xs" style={{ color: "#94a3b8", fontFamily: "'DM Sans', sans-serif" }}>{post.date}</span>
        </div>
        <h3 className="font-bold text-base leading-snug mb-3" style={{ color: "#0f172a", fontFamily: "'Playfair Display', serif" }}>{post.title}</h3>
        <span className="text-sm font-semibold" style={{ color: "#3b82f6", fontFamily: "'DM Sans', sans-serif" }}>Read more →</span>
      </div>
    </div>
  );
}

export default BlogCard;