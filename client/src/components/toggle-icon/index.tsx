import { RiMenuFill } from "react-icons/ri";

const ToggleIcon = ({ handleSidebar }: { handleSidebar: () => void }) => {
  return (
    <RiMenuFill
      className="sidebar-toggle-icon transition my-auto lg:hidden"
      style={{ width: "2.5rem", height: "2.5rem" }}
      onClick={handleSidebar}
      data-testid="toggle-sidebar"
    />
  );
};

export default ToggleIcon;
