import { Brand } from "../../components/brand";
import SignOutLink from "../../components/sign-out-link";
import { NavigationLink } from "../../components/navigation-link";
import { Overlay } from "../../components/overlay";
import { DashboardLinksProps } from "@/constants/dashbardHeaderConstants";
import { HeaderItemsProps } from "@/constants/headerConstants";

export type SidebarType = "default" | "dashboard";
export type SidebarItem = DashboardLinksProps | HeaderItemsProps;

export interface SidebarProps {
  type?: SidebarType;
  items: SidebarItem[];
  isSidebarOpen: boolean;
}

export const Sidebar = ({
  type = "default",
  items,
  isSidebarOpen,
}: SidebarProps) => {
  return (
    <>
      <div
        data-testid="sidebar"
        className={`sidebar duration lg:hidden ${!isSidebarOpen ? "-translate-x-full" : "translate-x-0"}`}
      >
        <div className="flex flex-col gap-6 mt-5 flex-grow">
          <Brand variant="primary" />
          <div className="flex flex-col justify-between flex-1">
            <ul className="flex flex-col gap-5">
              {items.map((item) => (
                <li key={item.label} className="w-60">
                  {"icon" in item ? (
                    <NavigationLink
                      key={item.label}
                      to={item.to}
                      icon={item.icon}
                      label={item.label}
                    />
                  ) : (
                    <NavigationLink
                      key={item.label}
                      to={item.to}
                      label={item.label}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
          {type === "dashboard" && <SignOutLink />}
        </div>
      </div>
      {isSidebarOpen && <Overlay data-testid="overlay" />}
    </>
  );
};
