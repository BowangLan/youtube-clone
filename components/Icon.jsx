import {
  MdMenu,
  MdOutlineVideoCall,
  MdVideoCall,
  MdOutlineNotificationsNone,
} from "react-icons/md";
import { VscHistory } from "react-icons/vsc"
import { TfiSearch } from "react-icons/tfi";


export const HoverIconContainer = ({ children, className = "", onClick }) => {
  return (
    <span
      className={
        "h-10 w-10 flex justify-center items-center rounded-full dark:hover:bg-white/20 cursor-pointer background-color-trans" +
        className
      }
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export const MenuIcon = ({ onClick }) => {
  return (
    <HoverIconContainer onClick={onClick}>
      <MdMenu className="icon" />
    </HoverIconContainer>
  );
};

export const VideoCallIcon = ({ selected, onClick }) => {
  return (
    <HoverIconContainer onClick={onClick}>
      {selected ? (
        <MdVideoCall className="icon" />
      ) : (
        <MdOutlineVideoCall className="icon" />
      )}
    </HoverIconContainer>
  );
};

export const NotificationIcon = ({ onClick }) => {
  return (
    <HoverIconContainer onClick={onClick}>
      <MdOutlineNotificationsNone className="icon" />
    </HoverIconContainer>
  );
};

export const SearchIcon = () => {
  return <TfiSearch className="w-5 h-5" />;
};

export const SearchIconSmall = () => {
  return <TfiSearch className="w-4 h-4" />;
}

export const HistoryIcon = () => {
  return <VscHistory className="w-5 h-5" />;
}