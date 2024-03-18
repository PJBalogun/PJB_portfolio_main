type FooterCol = {
	title: string;
	links: {
		name: string;
		link: string;
		icon?: string;
		leavesWebsite: boolean;
	}[];
};

type Footer = {
	columns: FooterCol[];
	support: {
		buymeacoffee: string;
		paypal: string;
		message: string;
	};
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
					name: "Designs",
					link: "/designs",
					leavesWebsite: false,
				},
			],
		},
		{
			title: "Social",
			links: [
				{
					name: "LinkedIn",
					link: "https://www.linkedin.com/in/balogun-oluwapelumi/",
					icon: "/static/icons/linkedin-f.svg",
					leavesWebsite: true,
				},
				{
					name: "Github",
					link: "https://github.com/PJBalogun/",
					icon: "/static/icons/linkedin-f.svg",
					leavesWebsite: true,
				},
				{
					name: "Stack Overflow",
					link: "https://stackoverflow.com/users/20085872/balogun-oluwapelumi",
					icon: "/static/icons/linkedin-f.svg",
					leavesWebsite: true,
				},
				{
					name: "LinkedIn",
					link: "mailto:pjohnsonpjb@gmail.com",
					icon: "/static/icons/linkedin-f.svg",
					leavesWebsite: true,
				},
			],
		},
	],
	support: {
		buymeacoffee: "pelumiJB",
		paypal: "pjbsax",
		message: "I appreciate your support very much! 💙",
	},
};
