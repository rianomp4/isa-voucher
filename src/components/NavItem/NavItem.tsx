import { NavItemProps } from "./types";
import Logo from "../../assets/react.svg";

const NavItem: React.FC<NavItemProps> = ({ title }) => {
  return (
    <div className="w-[108px] h-[108px] flex flex-col justify-center items-center bg-white rounded-lg text-center text-sm">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} className="w-16 mb-2" alt="" />
        {title}
      </div>
    </div>
  );
};

export default NavItem;
