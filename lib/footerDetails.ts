type FooterCol = {
    title: string,
    links: {
      name: string,
      link: string,
      icon?: string,
      leavesWebsite: boolean
    }[]
  }
  
  type Footer = {
    columns: FooterCol[]
    support: {
      buymeacoffee: string
      paypal: string
      message: string
    }
  };
  export const footer: Footer = {
    columns: [
      {
        title: "Pages",
        links: [
          {
            name: "Home",
            link: "/",
            leavesWebsite: false,
          },
          // {
          //   name: "Blog",
          //   link: "/blog",
          //   leavesWebsite: false,
          // },
          {
            name: "Projects",
            link: "/projects",
            leavesWebsite: false,
          },
          {
            name: "Experience",
            link: "/experience",
            leavesWebsite: false,
          },
        ],
      },
      {
        title: "Social",
        links: [
          {
            name: "GitHub",
            link: "https://github.com/braydentw",
            icon: "/static/icons/github-f.svg",
            leavesWebsite: true,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/braydentw/",
            icon: "/static/icons/linkedin-f.svg",
            leavesWebsite: true,
          },
          {
            name: "Dribbble",
            link: "https://dribbble.com/braydentw",
            icon: "/static/icons/dribbble-f.svg",
            leavesWebsite: true,
          },
          {
            name: "IndieHackers",
            link: "https://indiehackers.com/braydentw",
            icon: "/static/icons/indiehackers-f.svg",
            leavesWebsite: true,
          },
          {
            name: "Email",
            link: "mailto:contact@braydentw.io",
            icon: "/static/icons/mail-f.svg",
            leavesWebsite: true,
          },
        ],
      },
    ],
    support: {
      buymeacoffee: "pelumiJP",
      paypal: "pelumiJP",
      message: "I appreciate your support very much! 💙",
    },
  };