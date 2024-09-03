export interface HeaderItemsProps {
  label: string;
  to: string;
}

export const HEADER_ITEMS: HeaderItemsProps[] = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "#services",
  },
  {
    label: "Plans",
    to: "#plans",
  },
  {
    label: "Sign In",
    to: "/sign-in",
  },
  {
    label: "Sign Up",
    to: "/sign-up",
  },
];
