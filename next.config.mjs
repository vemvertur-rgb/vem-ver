// Exportação estática para GitHub Pages.
// NEXT_PUBLIC_BASE_PATH é definido automaticamente pelo workflow (.github/workflows/deploy.yml).
// Com domínio próprio (ex.: www.vemver.com.br), o basePath fica vazio.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
