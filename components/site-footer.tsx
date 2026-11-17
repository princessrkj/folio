import { navLinks, site } from '@/lib/site-content'

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-serif text-4xl font-medium">{site.brand}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-primary-foreground/65">
              AI data annotation, AI training and evaluation, and professional organizing — delivered with care and
              precision.
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-primary-foreground/75">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-primary-foreground">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.brand}. All rights reserved.
          </p>
          <ul className="flex gap-5">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="hover:text-primary-foreground">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
