import BlogCard from "../components/BlogCard";
import { BLOGS } from "../data/data";

function BlogPage() {
  return (
    <main className="min-h-screen pt-24" style={{ background: "#f8fafc" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-slate-900 tracking-widest mb-2" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 56 }}>Blog</h2>
        <p className="text-slate-400 mb-10 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>Inspiration, tips, and stories from the heart of the Philippines.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOGS.map(p => <BlogCard key={p.id} post={p} />)}
        </div>
      </div>
    </main>
  );
}

export default BlogPage;