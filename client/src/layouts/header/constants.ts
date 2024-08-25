export interface NavigationLinksProps {
  name: string;
  route: string;
}

export const navigationLinks: NavigationLinksProps[] = [
  {
    name: "Home",
    route: "#home",
  },
  {
    name: "About",
    route: "#about",
  },
  {
    name: "Services",
    route: "#services",
  },
  {
    name: "Contact",
    route: "/contact",
  },
  {
    name: "Sign In",
    route: "/sign-in",
  },
  {
    name: "Sign Up",
    route: "/sign-up",
  },
];
