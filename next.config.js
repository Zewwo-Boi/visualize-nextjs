/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
	"gsap",
	"scrollmagic"
])

const nextConfig = {
  reactStrictMode: true,
  build: {
	  
  }
}

module.exports = nextConfig
