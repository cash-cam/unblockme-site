'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div>
            <div className="reveal inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-muted)]" />
              <span className="text-[var(--color-muted)] text-sm font-medium tracking-widest uppercase">
                Get in Touch
              </span>
            </div>
            <h2
              className="reveal text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let's sort your
              <br />
              <span className="text-[var(--color-muted)] font-normal">drain today.</span>
            </h2>
            <p className="reveal reveal-delay-1 text-[var(--color-muted)] text-base leading-relaxed mb-10">
              Call us now for emergency jobs, or send a message and we'll get back to you quickly. We're available 24/7 across Auckland.
            </p>

            <div className="reveal reveal-delay-2 space-y-5">
              {/* Phone */}
              <a
                href="tel:+6400000000"
                className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
              >
                <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted)] uppercase tracking-widest font-medium">Phone</div>
                  <div className="text-[var(--color-primary)] font-bold text-lg">Call Us 24/7</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@unblockme.co.nz"
                className="flex items-center gap-4 group hover:opacity-70 transition-opacity"
              >
                <div className="w-12 h-12 bg-[var(--color-secondary)] border border-[var(--color-border)] text-[var(--color-primary)] rounded-sm flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted)] uppercase tracking-widest font-medium">Email</div>
                  <div className="text-[var(--color-primary)] font-bold text-lg">info@unblockme.co.nz</div>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-secondary)] border border-[var(--color-border)] text-[var(--color-primary)] rounded-sm flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted)] uppercase tracking-widest font-medium">Address</div>
                  <div className="text-[var(--color-primary)] font-bold text-base leading-snug">
                    104 Flanshaw Road<br />Te Atatū South, Auckland 0610
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--color-secondary)] border border-[var(--color-border)] text-[var(--color-primary)] rounded-sm flex items-center justify-center shrink-0">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[var(--color-muted)] uppercase tracking-widest font-medium">Hours</div>
                  <div className="text-[var(--color-primary)] font-bold text-base">24/7 Emergency Service</div>
                  <div className="text-[var(--color-muted)] text-sm">Office: Mon–Fri 7am–6pm</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-1">
            <form
              className="bg-[var(--color-secondary)] border border-[var(--color-border)] p-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                alert('Thanks! We\'ll be in touch shortly.')
              }}
            >
              <h3
                className="text-xl font-bold text-[var(--color-primary)] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Send us a message
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="021 000 0000"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="jane@email.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider mb-2">
                  How can we help?
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Describe your drainage issue..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--color-primary)] text-white font-bold py-4 text-sm uppercase tracking-wider hover:bg-[var(--color-accent)] transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
