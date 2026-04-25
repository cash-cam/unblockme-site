export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-primary)] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-[var(--color-primary)] font-bold text-sm" style={{ fontFamily: 'var(--font-heading)' }}>U</span>
              </div>
              <span
                className="text-white text-lg font-bold tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                UnblockMe <span className="text-white/40 font-normal text-sm">Ltd</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Auckland's trusted drainage specialists. Available 24/7 for emergency drain unblocking, CCTV inspection, and drain repairs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'Emergency Unblocking',
                'CCTV Inspection',
                'High-Pressure Jetting',
                'Drain Repairs',
                'Blocked Toilets & Sinks',
                'Stormwater',
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 text-sm hover:text-white/80 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-bold text-sm uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Contact
            </h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li>
                <a href="tel:+6400000000" className="hover:text-white/80 transition-colors">
                  Call 24/7
                </a>
              </li>
              <li>
                <a href="mailto:info@unblockme.co.nz" className="hover:text-white/80 transition-colors">
                  info@unblockme.co.nz
                </a>
              </li>
              <li className="leading-relaxed">
                104 Flanshaw Road<br />
                Te Atatū South<br />
                Auckland 0610
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {year} UnblockMe Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Auckland Drainage Specialists · Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}
