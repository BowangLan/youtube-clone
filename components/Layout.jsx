import React from "react";
import { MenuIcon, NotificationIcon, VideoCallIcon } from "../components/Icon";
import UserAvatar from "../components/UserAvatar";

const avatar_url_demo =
  "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj";


const toggle_sidebar_ex = () => {
  const c = document.getElementById('show-menu-checkbox');
  const sidebar_ex = document.getElementById('sidebar-ex');
  const sidebar = document.getElementById('sidebar');
  c.checked = !c.checked;
  if (c.checked) {
    sidebar_ex.style.display = 'block';
    sidebar.style.display = 'none';
  } else {
    sidebar_ex.style.display = 'none';
    sidebar.style.display = 'block';
  }
  console.log('set sidebar ex checkbox', c.checked);
}

const NavBar = () => {
  return (
    <nav className="w-full h-16 flex items-center">
      <div className="flex items-center">
        <span className="px-4">
          <MenuIcon onClick={toggle_sidebar_ex} />
          <input type="checkbox" id="show-menu-checkbox" className="hidden" />
        </span>
        <span>Youtube</span>
      </div>

      {/* Middle */}
      <div className="flex-1 flex items-center"></div>

      {/* Right */}
      <div className="mr-6 flex-none flex items-center gap-3">
        <VideoCallIcon />
        <NotificationIcon />
        <UserAvatar avatarUrl={avatar_url_demo} />
      </div>
    </nav>
  );
};

export default function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col items-stretch">
      <NavBar />
      <div className="w-full min-h-0 flex-1 flex items-stretch overflow-y-scroll">
        {children}
      </div>
    </div>
  );
}
