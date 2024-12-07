/** @type {import('next').NextConfig} */
export default {
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
