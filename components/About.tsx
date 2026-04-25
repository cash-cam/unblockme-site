export default function About() {
  return (
    <section id="about" className="py-24 bg-[var(--color-secondary)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <div className="reveal relative">
            <div className="aspect-square bg-[var(--color-primary)] rounded-sm overflow-hidden relative">
              {/* Abstract drain pattern */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Concentric circles */}
                  {[0.9, 0.7, 0.5, 0.3, 0.15].map((scale, i) => (
                    <div
                      key={i}
                      className="absolute top-1/2 left-1/2 border border-white/10 rounded-full"
                      style={{
                        width: `${scale * 100}%`,
                        height: `${scale * 100}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2" />
                  {/* Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-white/10 -translate-x-1/2" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2" />
                </div>
              </div>
              {/* Text overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-white/20 text-7xl font-extrabold leading-none" style={{ fontFamily: 'var(--font-heading)' }}>
                  Since<br />2014
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-white border border-[var(--color-border)] shadow-lg p-5 rounded-sm">
              <div className="text-3xl font-extrabold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>
                1000+
              </div>
              <div className="text-[var(--color-muted)] text-sm font-medium">Jobs Completed</div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="reveal inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-muted)]" />
              <span className="text-[var(--color-muted)] text-sm font-medium tracking-widest uppercase">
                About UnblockMe
              </span>
            </div>

            <h2
              className="reveal text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Auckland's drainage
              <br />
              <span className="text-[var(--color-muted)] font-normal">problem solvers.</span>
            </h2>

            <div className="reveal reveal-delay-1 space-y-4 text-[var(--color-muted)] text-base leading-relaxed">
              <p>
                UnblockMe Ltd has been keeping Auckland's drains flowing since 2014. Based in Te Atatū South, we cover the full Auckland region — from the North Shore to South Auckland, and everywhere in between.
              </p>
              <p>
                We're a local, family-run business that takes pride in doing things right. No unnecessary upsells, no hidden charges — just honest work at a fair price. Whether it's a simple kitchen blockage or a complex drainage system overhaul, we bring the same level of care to every job.
              </p>
              <p>
                Our team is fully trained, equipped with the latest technology, and available around the clock. When you've got a drainage problem, you need someone you can trust to show up and get it sorted.
              </p>
            </div>

            <div className="reveal reveal-delay-2 mt-10 flex flex-wrap gap-6">
              {[
                { label: 'Licensed & Insured', icon: '✓' },
                { label: 'No Hidden Fees', icon: '✓' },
                { label: '24/7 Available', icon: '✓' },
                { label: 'Local Auckland Team', icon: '✓' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-[var(--color-primary)] text-white text-xs flex items-center justify-center rounded-full font-bold">
                    {item.icon}
                  </span>
                  <span className="text-[var(--color-text)] font-medium text-sm">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
