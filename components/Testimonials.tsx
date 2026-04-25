const reviews = [
  {
    name: 'Sarah T.',
    location: 'Henderson',
    rating: 5,
    text: "Had a blocked drain at 9pm on a Sunday — called UnblockMe and they were here within the hour. Professional, tidy, and sorted the problem quickly. Will absolutely use them again.",
  },
  {
    name: 'Mark R.',
    location: 'New Lynn',
    rating: 5,
    text: "Used their CCTV inspection service after noticing slow drains throughout the house. Found a root intrusion we never would've known about. Fixed it same week. Great communication throughout.",
  },
  {
    name: 'Priya K.',
    location: 'Waitākere',
    rating: 5,
    text: 'Honest, upfront pricing and they showed up when they said they would. Fixed our blocked kitchen drain in under an hour. Really refreshing to find a tradie you can trust.',
  },
  {
    name: 'James O.',
    location: 'Te Atatū',
    rating: 5,
    text: "These guys are the real deal. Had a recurring blockage issue that two other companies couldn't fix permanently. UnblockMe found the actual cause and solved it for good.",
  },
  {
    name: 'Linda W.',
    location: 'Glen Eden',
    rating: 5,
    text: "Called them for an emergency on Christmas Eve and they still came out. I was blown away. Genuinely caring team who take pride in their work. Five stars without hesitation.",
  },
  {
    name: 'Tom B.',
    location: 'Avondale',
    rating: 5,
    text: "Competitive pricing, fast response, and no upselling. They told me exactly what was wrong and what it would cost. Job done right the first time. Couldn't ask for more.",
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="text-[var(--color-primary)]">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-[var(--color-muted)]" />
              <span className="text-[var(--color-muted)] text-sm font-medium tracking-widest uppercase">
                Google Reviews
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-extrabold text-[var(--color-primary)] leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Real feedback
              <br />
              <span className="text-[var(--color-muted)] font-normal">from real Aucklanders.</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 shrink-0 bg-[var(--color-secondary)] px-6 py-4 rounded-sm">
            <div>
              <div className="text-3xl font-extrabold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-heading)' }}>5.0</div>
              <Stars count={5} />
            </div>
            <div className="text-[var(--color-muted)] text-sm leading-snug">
              Based on<br />Google Reviews
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className={`reveal reveal-delay-${(i % 3) + 1} border border-[var(--color-border)] p-7 hover:border-[var(--color-primary)] transition-colors duration-300`}
            >
              <Stars count={review.rating} />
              <p className="mt-4 mb-6 text-[var(--color-text)] text-sm leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                <div className="w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-[var(--color-primary)] text-sm">{review.name}</div>
                  <div className="text-[var(--color-muted)] text-xs">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
