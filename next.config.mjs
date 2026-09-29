// Exportação estática para GitHub Pages.
//
// NEXT_PUBLIC_BASE_PATH é definido automaticamente
// pelo workflow (.github/workflows/deploy.yml).
//
// Com domínio próprio (ex.: www.vemver.com.br),
// o basePath fica vazio.

const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera arquivos estáticos para hospedagem
  // no GitHub Pages.
  output: 'export',

  // Mantém URLs com barra final, compatível
  // com a estrutura de páginas estáticas.
  trailingSlash: true,

  // Caminho base usado quando o site estiver
  // hospedado dentro de um repositório.
  basePath,

  // Imagens do Next.js serão exportadas sem
  // depender de um servidor de otimização.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
