'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, site } from '@/lib/site-content'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || open
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-serif text-2xl font-medium tracking-tight">{site.brand}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-sage-deep sm:inline-flex"
          >
            Work With Me
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={cn('border-t border-border/70 lg:hidden', open ? 'block' : 'hidden')}
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/50 py-3 font-serif text-2xl"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Work With Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
