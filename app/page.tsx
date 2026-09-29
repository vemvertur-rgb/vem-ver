import { Hero } from '@/components/hero'
import { Intro } from '@/components/intro'
import { Tours } from '@/components/tours'
import { HowItWorks } from '@/components/how-it-works'
import { About } from '@/components/about'
import { Gallery } from '@/components/gallery'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'

export default function HomePage() {
  return (
    <>
      {/* Apresentação principal */}
      <Hero />

      {/* Sobre a Vem Ver */}
      <About />

      {/* Passeios e experiências privativas */}
      <Tours />

      {/* Formulário e canais de contato */}
      <Contact />

      {/* Como funciona */}
      <HowItWorks />

      {/* Introdução e diferenciais */}
      <Intro />

      {/* Depoimentos */}
      <Testimonials />

      {/* Galeria */}
      <Gallery />
    </>
  )
}
