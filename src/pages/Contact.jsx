export default function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-12 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Hero Section: Editorial Intro */}
        <section className="lg:col-span-12 mb-8">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-8 md:p-12">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
                Let's Connect
              </span>
              <h2 className="font-headline text-5xl md:text-6xl font-black text-on-surface leading-[1.1] mb-6 tracking-tight">
                The Modern Concierge
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg">
                Whether you're inquiring about our seasonal tasting menu or looking to coordinate a private culinary experience in the heart of Lagos, we're here to curate your journey.
              </p>
            </div>
            <div className="absolute top-0 right-0 h-full w-1/3 hidden lg:block">
              <img
                className="h-full w-full object-cover opacity-100 brightness-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhiLeTTrBej39GATet9cWMAOTV0tPJCL4aeYjRCp-it4t9gZUm4ULPDsnm8s4mgklGXP5PRjiS158MZMV2csFMq_eIuMqEl0jzJj6DpN0ffJUxU_LOaxU6wJ_BF9hG5PBHAbxrINhjC_KLFMFDNfa7Xor6QGpPTuLq4MbdhBWkYGtE8RvsYfsBP0h3-pFNjCE969cG42HulwRvJaTimFhD4JA2FiCpbQbvWwK9hRKntJGQ8Pl6n2Ulyjb99z5P4U8Xu1uMjaKL0A"
                alt="sophisticated artisan telephone and fountain pen"
              />
            </div>
          </div>
        </section>

        {/* Left Column: Quick Actions & Hours */}
        <div className="lg:col-span-5 space-y-8">
          {/* WhatsApp Integration */}
          <div className="bg-surface-container-low rounded-xl p-8 shadow-[0_12px_40px_rgba(78,33,32,0.08)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-secondary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold">Instant Concierge</h3>
                <p className="text-sm text-on-surface-variant">Real-time orders & inquiries</p>
              </div>
            </div>
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center gap-3 w-full py-5 rounded-full text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-transform hover:opacity-90"
            >
              <span className="material-symbols-outlined">forum</span>
              Order via WhatsApp
            </a>
            <div className="mt-6 flex items-center gap-3 px-4 py-3 bg-surface-container-high rounded-lg">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-secondary"></div>
              <p className="text-sm font-medium text-on-surface-variant">
                Avg. response time: <span className="text-on-surface font-bold">Under 5 mins</span>
              </p>
            </div>
          </div>

          {/* Opening Hours Bento */}
          <div className="bg-surface-container-low rounded-xl p-8">
            <h3 className="font-headline text-xl font-bold mb-6">Service Hours</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-on-surface-variant font-medium">Monday — Thursday</span>
                <span className="text-on-surface font-bold">11:00 — 22:00</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
                <span className="text-on-surface-variant font-medium">Friday — Saturday</span>
                <span className="text-on-surface font-bold text-primary">11:00 — 00:00</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-on-surface-variant font-medium">Sunday</span>
                <span className="text-on-surface font-bold">10:00 — 21:00</span>
              </div>
            </div>
            <div className="mt-8 p-4 bg-primary/5 rounded-xl">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'opsz' 20" }}>
                  info
                </span>
                <p className="text-xs text-on-surface-variant leading-tight">
                  Holiday hours may vary. Please check our Instagram for live updates on special seasonal closures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form & Map */}
        <div className="lg:col-span-7 space-y-8">
          {/* Contact Form */}
          <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_12px_40px_rgba(78,33,32,0.08)]">
            <h3 className="font-headline text-2xl font-bold mb-8">Inquire Privately</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Gourmet Enthusiast"
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="email@address.com"
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                  Your Message
                </label>
                <textarea
                  placeholder="How can we assist you today?"
                  rows="4"
                  className="w-full px-6 py-4 rounded-xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-outline resize-none"
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="bg-gradient-to-br from-primary to-primary-container w-full py-5 rounded-full text-white font-bold text-lg shadow-lg active:scale-[0.98] transition-transform hover:opacity-90"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Location Map */}
          <div className="group relative h-80 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(78,33,32,0.08)] bg-surface-container-low">
            <img
              className="h-full w-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBODvKKgyBXtHFTiatdUFuXX7ZsqJWDm0ceCAMtwYb0xjNO29y65OUlq3EsJPXnAOvP4DvX6NbQCwjeR9Kx1y-2_UaumsFzXOQR9CIH6iyaCwP2xxPnXYS35-UINhqaJl29xTQVBv59Rr8Z-jqOwYj6EXt3dfGIvT-10g3ixHhtFSCQSdV-iUYlIo2M9UUqvVEAFzWrT9y-6gwAInjE-ckOn2-D0XOZD-RkHqBWOrzed3HQ7RDMmBgNJoiCI4XuIKO-nmapfANXHQ"
              alt="Lagos island district map"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-surface-container-lowest/80 backdrop-blur-2xl p-6 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Our Location</p>
                  <p className="font-headline font-bold text-on-surface">15 Admiralty Way, Lekki Phase 1, Lagos</p>
                </div>
                <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity active:scale-95">
                  <span className="material-symbols-outlined text-sm">near_me</span>
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
