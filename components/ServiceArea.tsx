const areas = [
  'Te Atatū', 'Henderson', 'New Lynn', 'Avondale', 'Glen Eden', 'Waitākere',
  'North Shore', 'Albany', 'Takapuna', 'Birkenhead', 'Glenfield', 'Northcote',
  'Manukau', 'Botany', 'Howick', 'Papatoetoe', 'Mangere', 'Otahuhu',
  'Mt Eden', 'Remuera', 'Ellerslie', 'Onehunga', 'Panmure', 'Glen Innes',
]

export default function ServiceArea() {
  return (
    <section className="py-24 bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="reveal inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-muted)]" />
              <span className="text-[var(--color-muted)] text-sm font-medium tracking-widest uppercase">
                Service Area
              </span>
            </div>
            <h2
              className="reveal text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              We cover all
              <br />
              <span className="text-[var(--color-muted)] font-normal">of Auckland.</span>
            </h2>
            <p className="reveal reveal-delay-1 text-[var(--color-muted)] text-base leading-relaxed mb-8">
              Based in Te Atatū South, we service the entire Auckland region — from the North Shore down to South Auckland. Not sure if we cover your area? Give us a call and we'll let you know.
            </p>

            <div className="reveal reveal-delay-2 flex items-start gap-3 bg-white border border-[var(--color-border)] p-5 rounded-sm">
              <div className="mt-0.5 text-[var(--color-primary)]">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="text-[var(--color-primary)] font-semibold text-sm">Our Base</div>
                <div className="text-[var(--color-muted)] text-sm mt-0.5">
                  104 Flanshaw Road, Te Atatū South, Auckland 0610
                </div>
              </div>
            </div>
          </div>

          {/* Right: Area tags */}
          <div className="reveal reveal-delay-1">
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="bg-white border border-[var(--color-border)] text-[var(--color-text)] text-sm font-medium px-4 py-2 rounded-sm hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200 cursor-default"
                >
                  {area}
                </span>
              ))}
              <span className="bg-[var(--color-primary)] text-white text-sm font-medium px-4 py-2 rounded-sm">
                + more
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
