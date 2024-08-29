export interface NavigationLinksProps {
  name: string;
  route: string;
}

export const navigationLinks: NavigationLinksProps[] = [
  {
    name: "Home",
    route: "/",
    
  },
  {
    name: "Services",
    route: "#services",
  },
  {
    name: "Plans",
    route: "#plans",
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
