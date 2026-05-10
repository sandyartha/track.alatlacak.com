'use client'

import trackingData from '@/content/how-to-create-tracking-link.json'

export function TrackerFlow() {
  const steps = trackingData.steps ?? []

  return (
    <section
      id="tracker-flow"
      className="py-14 border-b border-border"
      aria-labelledby="tracker-flow-title"
    >
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {trackingData.heading}
        </span>
        <h2
          id="tracker-flow-title"
          className="mt-2 text-2xl font-bold tracking-tight text-foreground"
        >
          {trackingData.subheading}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {trackingData.description}
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        {Array.isArray(steps) &&
          steps.map((item, index) => (
            <div
              key={item.id ?? index}
              className="flex gap-4 items-start"
            >
              {/* Step Number */}
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-primary text-primary-foreground font-semibold">
                  {item.number ?? index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 h-full min-h-[60px] bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="pb-6 flex-1 transition hover:translate-x-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>

                {/* Description as list */}
                {Array.isArray(item.description) ? (
                  <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {item.description.map((desc, i) => (
                      <li key={i}>
                        <span className="font-medium mr-1">
                          {item.number ?? index + 1}.{i + 1}
                        </span>
                        {desc}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}

                {/* Single Image */}
                {item.image && (
                  <div className="mt-4">
                    <img
                      src={item.image}
                      alt={`Step ${item.number} image`}
                      className="w-full h-auto max-h-120 rounded-xl object-contain border border-border bg-muted p-2 transition hover:scale-[1.02]"
                    />
                  </div>
                )}

                {/* Multiple Images */}
                {Array.isArray(item.images) && item.images.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.images.map((src: string, i: number) => (
                      <img
                        key={i}
                        src={src}
                        alt={`Step ${item.number} screenshot ${i + 1}`}
                        className="w-full h-auto max-h-120 rounded-xl object-contain border border-border bg-muted p-2 transition hover:scale-[1.02]"
                      />
                    ))}
                  </div>
                )}

                {/* Links */}
                {Array.isArray(item.links) && item.links.length > 0 && (
                  <div className="mt-4 space-y-1">
                    {item.links.map((link: string, i: number) => (
                      <p key={i} className="text-sm">
                        <span className="mr-2">•</span>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline break-all"
                        >
                          {link}
                        </a>
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}