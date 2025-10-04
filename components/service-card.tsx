import Link from "next/link"
import type { IconType } from "react-icons"
import { FiStar } from "react-icons/fi"

type Props = {
  slug: string
  title: string
  excerpt: string
  Icon?: IconType
}

export function ServiceCard({ slug, title, excerpt, Icon = FiStar }: Props) {
  return (
    <article className="group rounded-lg border border-border bg-card p-5 transition hover:shadow-md">
      <div className="mb-3 flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-md bg-secondary">
          <Icon className="h-5 w-5 text-foreground" aria-hidden />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="mb-4 line-clamp-3 text-sm text-foreground/80">{excerpt}</p>
      <Link
        href={`/services/${slug}`}
        className="text-sm font-medium text-accent hover:underline"
        aria-label={`View details for ${title}`}
      >
        Learn more →
      </Link>
    </article>
  )
}
