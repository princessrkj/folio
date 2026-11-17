import { About } from '@/components/about'
import { AiServices } from '@/components/ai-services'
import { Contact } from '@/components/contact'
import { Experience } from '@/components/experience'
import { Hero } from '@/components/hero'
import { Organizing } from '@/components/organizing'
import { Portfolio } from '@/components/portfolio'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Testimonials } from '@/components/testimonials'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <AiServices />
        <Organizing />
        <Portfolio />
        <Testimonials />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
