import React, { useState, useEffect } from "react";

// Simple, single-file React homepage. TailwindCSS is available in the canvas preview.
// You can copy this file into a Vite/Next.js project as `Home.jsx` or `page.jsx`.
// --- Quick Start (standalone) ---
// 1) Create a new Vite React app:  npm create vite@latest esthetician-site -- --template react
// 2) cd esthetician-site && npm install && npm run dev
// 3) Replace App.jsx contents with this component and render <HomePage />.
// 4) Deploy with GitHub Pages (see instructions in chat) or Netlify/Vercel.

export default function HomePage() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [ctaClicks, setCtaClicks] = useState(0);

  // Example: basic local analytics to illustrate tracking
  useEffect(() => {
    const stored = localStorage.getItem("ctaClicks");
    if (stored) setCtaClicks(parseInt(stored, 10));
  }, []);

  useEffect(() => {
    localStorage.setItem("ctaClicks", String(ctaClicks));
  }, [ctaClicks]);

  const handleBookNow = () => {
    setCtaClicks((n) => n + 1);
    // Hook point for Google Analytics / Plausible / PostHog:
    // window.gtag?.("event", "book_now_click", { section: "hero" });
    alert("Thanks! This would open your booking link (e.g., Square, Fresha, or Calendly).");
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Replace with your email tool (Mailchimp, ConvertKit, Buttondown API, etc.)
    alert(`Subscribed: ${newsletterEmail}`);
    setNewsletterEmail("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-fuchsia-100 text-slate-800">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/50 border-b border-white/40">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-2xl bg-gradient-to-tr from-fuchsia-400 to-rose-400 shadow-sm" />
            <span className="font-semibold tracking-wide">Radiant by <span className="text-fuchsia-600">[Your Mom's Name]</span></span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-fuchsia-600" href="#about">About</a>
            <a className="hover:text-fuchsia-600" href="#services">Services</a>
            <a className="hover:text-fuchsia-600" href="#gallery">Gallery</a>
            <a className="hover:text-fuchsia-600" href="#testimonials">Reviews</a>
            <a className="hover:text-fuchsia-600" href="#contact">Contact</a>
          </nav>
          <button
            data-track="nav_book_now"
            onClick={handleBookNow}
            className="rounded-2xl px-4 py-2 bg-fuchsia-600 text-white hover:bg-fuchsia-500 shadow"
            aria-label="Book now"
          >
            Book Now
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-fuchsia-700/80 bg-fuchsia-100 rounded-full px-3 py-1 mb-4">Skin • Brows • Glow</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Bright, Healthy Skin
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-rose-500">Starts Here</span>
            </h1>
            <p className="mt-4 text-slate-700/90 text-lg">
              Professional esthetician services specializing in facials, brows, lashes, and gentle corrective treatments. Feel confident in your skin.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                data-track="hero_book_now"
                onClick={handleBookNow}
                className="rounded-2xl px-5 py-3 bg-fuchsia-600 text-white hover:bg-fuchsia-500 shadow-lg"
              >
                Book a Session
              </button>
              <a href="#about" className="rounded-2xl px-5 py-3 bg-white text-fuchsia-700 hover:bg-fuchsia-50 border border-fuchsia-200">Learn More</a>
            </div>
            <div className="mt-6 text-xs text-slate-600">CTA clicks saved locally: <strong>{ctaClicks}</strong></div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-rose-200 via-fuchsia-200 to-violet-200 shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur rounded-2xl p-4 shadow-lg">
              <p className="text-sm font-medium">Licensed • Insured • Gentle techniques</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold">Meet <span className="text-fuchsia-600">[Your Mom's Name]</span></h2>
            <p className="mt-4 leading-relaxed text-slate-700">
              Hi! I’m a licensed esthetician with a passion for healthy, radiant skin. With a gentle, client-first approach, I tailor every treatment to your skin’s needs so you leave glowing and confident.
            </p>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>• 5+ years experience in facials, brows, and lashes</li>
              <li>• Uses high-quality, skin-safe products</li>
              <li>• Focus on education and at-home care routines</li>
            </ul>
            <div className="mt-6">
              <a href="#services" className="text-fuchsia-700 font-semibold hover:underline">Explore Services →</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-inner" />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Signature Glow Facial", desc: "Deep cleanse, exfoliation, mask, and massage for luminous skin.", price: "$95" },
              { title: "Brow Shaping + Tint", desc: "Custom brow mapping, precise shaping, and natural tint.", price: "$40" },
              { title: "Lash Lift", desc: "Lift and curl for a bright, wide-eyed look that lasts weeks.", price: "$70" },
            ].map((s, idx) => (
              <div key={idx} className="rounded-3xl p-6 bg-gradient-to-br from-fuchsia-50 to-rose-50 border border-fuchsia-100 shadow">
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-slate-700">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-bold text-fuchsia-700">{s.price}</span>
                  <button onClick={handleBookNow} className="text-sm px-3 py-2 rounded-xl bg-fuchsia-600 text-white hover:bg-fuchsia-500" data-track={`service_${idx}_book`}>
                    Book
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Before & After</h2>
          <p className="mt-2 text-slate-700">Swap these placeholders with real client photos (with permission).</p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-[3/4] rounded-3xl bg-white/70 border border-white/60 shadow-inner" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Client Love</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { q: "My skin has never felt better!", a: "Jasmine" },
              { q: "Super gentle and so knowledgeable.", a: "Maya" },
              { q: "Brows on point every time.", a: "Ari" },
            ].map((t, i) => (
              <figure key={i} className="rounded-3xl p-6 bg-gradient-to-br from-rose-50 to-fuchsia-50 border border-fuchsia-100 shadow">
                <blockquote className="text-slate-800">“{t.q}”</blockquote>
                <figcaption className="mt-3 text-sm text-slate-600">— {t.a}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="rounded-3xl p-8 bg-gradient-to-r from-fuchsia-600 to-rose-500 text-white shadow-xl">
            <h3 className="text-2xl font-bold">Get seasonal skin tips + promos</h3>
            <p className="mt-2 text-white/90">Join our list for gentle reminders and exclusive offers.</p>
            <form onSubmit={handleNewsletter} className="mt-4 flex gap-3 max-w-xl">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-2xl px-4 py-3 text-slate-800"
              />
              <button className="rounded-2xl px-5 py-3 bg-white text-fuchsia-700 hover:bg-fuchsia-50" data-track="newsletter_submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-white/70">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-3xl font-bold">Visit Us</h2>
            <p className="mt-2 text-slate-700">123 Glow Ave, Suite 2 • Your City, ST</p>
            <p className="text-slate-700">(555) 123-4567</p>
            <p className="text-slate-700">hello@radiantstudio.com</p>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl h-64 bg-white/80 border border-white/60 shadow-inner flex items-center justify-center">
              <span className="text-slate-500">Embed Google Map or booking widget here</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} Radiant by [Your Mom's Name]. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-fuchsia-600">Instagram</a>
            <a href="#" className="hover:text-fuchsia-600">TikTok</a>
            <a href="#" className="hover:text-fuchsia-600">Booking</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
