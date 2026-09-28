import { CtaLink } from '@/components/cta-link'

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-4 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent-foreground">Página não encontrada</p>
      <h1 className="font-serif text-4xl font-semibold text-balance">Ops! Esse caminho se perdeu nas dunas.</h1>
      <p className="max-w-md text-lg text-muted-foreground">A página que você procura não existe ou foi movida.</p>
      <CtaLink href="/">Voltar para o início</CtaLink>
    </section>
  )
}
