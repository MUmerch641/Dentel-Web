type Props = {
  name: string
  text: string
  rating?: number
}

export function TestimonialCard({ name, text, rating = 5 }: Props) {
  return (
    <figure className="rounded-lg border border-border bg-card p-5">
      <blockquote className="text-foreground/90">&ldquo;{text}&rdquo;</blockquote>
      <figcaption className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-foreground/70" aria-label={`${rating} out of 5 stars`}>
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </span>
      </figcaption>
    </figure>
  )
}
