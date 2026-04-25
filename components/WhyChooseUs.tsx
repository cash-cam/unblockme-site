const reasons = [
  {
    number: '01',
    title: 'Same-Day Response',
    description:
      "We know drainage problems can't wait. In most cases, we're on site the same day you call — often within the hour for emergencies.",
  },
  {
    number: '02',
    title: 'Upfront Pricing',
    description:
      "You'll know the cost before we start. No surprise invoices, no charging by the minute. Just a clear quote you can trust.",
  },
  {
    number: '03',
    title: 'CCTV-First Diagnosis',
    description:
      "We don't guess. We use camera inspection to find the root cause before we start work — saving you time and money.",
  },
  {
    number: '04',
    title: 'Guaranteed Workmanship',
    description:
      'All our work comes with a satisfaction guarantee. If a job isn\'t right, we\'ll make it right — at no extra cost.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-6 h-px bg-white/30" />
            <span className="text-white/50 text-sm font-medium tracking-widest uppercase">
              Why UnblockMe
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            The drainage company
            <br />
            <span className="text-white/40 font-normal">Auckland actually recommends.</span>
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`reveal reveal-delay-${(i % 2) + 1} bg-[var(--color-primary)] p-10 hover:bg-white/5 transition-colors duration-300 group`}
            >
              <div
                className="text-white/20 text-5xl font-extrabold mb-6 group-hover:text-white/30 transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {reason.number}
              </div>
              <h3
                className="text-white text-xl font-bold mb-3"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {reason.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
