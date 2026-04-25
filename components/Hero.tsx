export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[var(--color-primary)] flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--color-bg) 1px, transparent 1px), linear-gradient(90deg, var(--color-bg) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Large background text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 text-white/[0.04] text-[20vw] font-extrabold leading-none select-none pointer-events-none"
        style={{ fontFamily: 'var(--font-heading)' }}
        aria-hidden="true"
      >
        DRAIN
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-up inline-flex items-center gap-2 mb-8">
            <span className="w-8 h-px bg-white/40" />
            <span className="text-white/60 text-sm font-medium tracking-widest uppercase">
              Auckland Drainage Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-up-delay-1 text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Blocked drain?
            <br />
            <span className="text-white/50">We'll sort it.</span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 text-white/70 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl">
            Fast, reliable drainage solutions across Auckland. Available 24/7 for emergencies — unblocking drains, CCTV inspections, and full drain repairs.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 items-center">
            <a
              href="#contact"
              className="bg-white text-[var(--color-primary)] font-bold px-8 py-4 rounded-sm text-base hover:bg-white/90 transition-colors duration-200"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+6400000000"
              className="flex items-center gap-3 text-white font-semibold text-base hover:opacity-70 transition-opacity group"
            >
              <span className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/60 transition-colors">
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              Call 24/7
            </a>
          </div>

          {/* Trust strip */}
          <div className="animate-fade-up-delay-3 mt-16 pt-10 border-t border-white/10 flex flex-wrap gap-8">
            {[
              { value: '24/7', label: 'Emergency Response' },
              { value: '10+', label: 'Years Experience' },
              { value: '100%', label: 'Satisfaction Guaranteed' },
              { value: 'Auckland', label: 'Wide Coverage' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-white text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
