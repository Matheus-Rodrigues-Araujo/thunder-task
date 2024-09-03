export interface HeaderItemsProps {
  name: string;
  route: string;
}

export const HEADER_ITEMS: HeaderItemsProps[] = [
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
