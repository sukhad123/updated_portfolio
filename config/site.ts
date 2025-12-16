export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Personal Portfolio",
  description: "Welcome to my personal portfolio showcasing my experience, education, and projects.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Summary",
      href: "#summary",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "Summary",
      href: "#summary",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Education",
      href: "#education",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
