import { Heading } from "../heading";
import { TextContent } from "../text-content";

import "./styles.css";

const TopBar = () => {
  return (
    <div className="h-20 flex border-b items-center w-full justify-between px-5">
      <Heading>Painel</Heading>
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div
            className="profile-img"
            style={{ backgroundImage: "url('/user.png')" }}
          />
          <div className="user-info flex flex-col">
            <TextContent>André</TextContent>
            <TextContent>andre@gmail.com</TextContent>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
