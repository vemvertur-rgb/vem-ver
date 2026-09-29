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
      {/* Apresentação principal */}
      <Hero />

      {/* Introdução e diferenciais */}
      <Intro />

      {/* Passeios e experiências privativas */}
      <Tours />

      {/* Formulário e canais de contato */}
      <Contact />

      {/* Como funciona a reserva */}
      <HowItWorks />

      {/* Sobre a Vem Ver */}
      <About />

      {/* Galeria de imagens */}
      <Gallery />

      {/* Depoimentos — aparece quando houver avaliações */}
      <Testimonials />

      {/* Perguntas frequentes */}
      <Faq />
    </>
  )
}
