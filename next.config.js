/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      new URL("https://heroui.com/images/**"),
      new URL("https://via.placeholder.com/**"),
      new URL("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/**"),
      new URL("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/**"),
    ]
  },
};

module.exports = nextConfig;
