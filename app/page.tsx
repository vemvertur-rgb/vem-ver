import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Tours } from '@/components/tours'
import { HowItWorks } from '@/components/how-it-works'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Tours />
      <HowItWorks />
      <About />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
