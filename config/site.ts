export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Pokemon Consumer",
  description: "Next.js 13 + Heroui + Tailwind CSS",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
  ],
  links: {
    github: "https://github.com/ConcatenateLine",
    sponsor: "https://www.linkedin.com/in/josue-morales-pascual",
    repository: "https://github.com/ConcatenateLine/frontend-test-nextjs-heroui",
  },
};
