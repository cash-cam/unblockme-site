const reviews = [
  {
    name: 'Charlotte',
    location: 'Google Review',
    rating: 5,
    text: 'I had an urgent plumbing job due to a cracked waste pipe and Unblockme prioritized the job due to the urgency of it, undertook the repair with top quality workmanship. James is highly recommended to all. Experienced, honest and an affordable service.',
  },
  {
    name: 'Nick Knight',
    location: 'Google Review',
    rating: 5,
    text: 'Excellent plumbing company to deal with. From initial contact to completion of the job James demonstrated reliability and good communication. Workmanship was top notch. Highly recommend Unblockme Limited for all your plumbing and drainage requirements.',
  },
  {
    name: 'Tanya Nicks',
    location: 'Google Review',
    rating: 5,
    text: "James is a very reliable, hard working specialised plumber who I highly recommend!! He's completed a number of different jobs for me including replacing my waste master, cleaning and sealing roof gutters, and clearing a blocked sewage line. I'll definitely be using his business again when needed!!",
  },
  {
    name: 'Nicola Day',
    location: 'Google Review',
    rating: 5,
    text: 'Reliable and honest. Gave me options and kept me informed. Will use again. Thanks James!',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
