/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['images.unsplash.com', 'unihelpmainstorage.blob.core.windows.net','unihelpstorageproduction.blob.core.windows.net'],
  }
}

module.exports = nextConfig
