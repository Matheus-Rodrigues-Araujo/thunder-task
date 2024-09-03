import { Brand } from "../../components/brand";
import { NavigationLink } from "../../components/navigation-link";
import { Overlay } from "../../components/overlay";
import { HeaderItemsProps } from "@/constants/headerConstants";

export interface SidebarProps {
  items: HeaderItemsProps[];
  isSidebarOpen: boolean;
}

export const Sidebar = ({ items, isSidebarOpen }: SidebarProps) => {
  return (
    <>
      <div
        data-testid="sidebar"
        className={`sidebar flex flex-col ${
          !isSidebarOpen ? "-translate-x-full" : "translate-x-0"
        } transition-transform duration-200 ease-in-out w-[270px] border-r fixed top-0 left-0 items-center min-h-screen z-20 pt-2 bg-secondary-white lg:hidden`}
      >
        <div className="flex flex-col gap-6 mt-5 flex-grow">
          <Brand variant="primary" />
          <ul className="flex flex-col gap-5">
            {items.map((link: HeaderItemsProps) => (
              <li key={link.name} className="w-28">
                <NavigationLink
                  key={link.name}
                  route={link.route}
                  name={link.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isSidebarOpen && <Overlay data-testid="overlay" />}
    </>
  );
};
