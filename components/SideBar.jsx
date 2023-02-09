import Image from "next/image";
import React from "react";
import {
  MdHome,
  MdOutlineHome,
  MdOutlineSubscriptions,
  MdSubscriptions,
} from "react-icons/md";
import Bubble from "./Bubble";

const SideBarActionButton = ({ text, icon, onClick }) => {
  return (
    <div
      className="mx-1 py-3 flex flex-col justify-center items-center space-y-1 rounded-lg hover:bg-white/20 cursor-pointer background-color-trans"
      onClick={onClick}
    >
      {icon}
      <span className="text-[0.65rem] font-thin">{text}</span>
    </div>
  );
};

const SIDEBAR_BUTTONS = [
  {
    text: "Home",
    icon: <MdOutlineHome className="h-6 w-6" />,
    iconSelected: <MdHome className="h-6 w-6" />,
  },
  {
    text: "Subscription",
    icon: <MdOutlineSubscriptions className="h-6 w-6" />,
    iconSelected: <MdSubscriptions className=" h-6 w-6" />,
  },
];

// generate a list of 10 popular movie/anime crtic related youtube channel objects, each with name and icon url
const channels = [
  {
    name: "The Film Theorists",
    icon: "https://yt3.ggpht.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "CinemaWins",
    icon: "https://yt3.ggpht.com/6mqC3C7S9Zoi2MX1Xbcw_cftLy-W0LIIn1m3IwclOfaZGj5SiKVBKBHnzcIG-9Qhsdm-9UBBwg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Screen Rant",
    icon: "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "The Film Theorists",
    icon: "https://yt3.ggpht.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "CinemaWins",
    icon: "https://yt3.ggpht.com/6mqC3C7S9Zoi2MX1Xbcw_cftLy-W0LIIn1m3IwclOfaZGj5SiKVBKBHnzcIG-9Qhsdm-9UBBwg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Screen Rant",
    icon: "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "The Film Theorists",
    icon: "https://yt3.ggpht.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "CinemaWins",
    icon: "https://yt3.ggpht.com/6mqC3C7S9Zoi2MX1Xbcw_cftLy-W0LIIn1m3IwclOfaZGj5SiKVBKBHnzcIG-9Qhsdm-9UBBwg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Screen Rant",
    icon: "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "The Film Theorists",
    icon: "https://yt3.ggpht.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "CinemaWins",
    icon: "https://yt3.ggpht.com/6mqC3C7S9Zoi2MX1Xbcw_cftLy-W0LIIn1m3IwclOfaZGj5SiKVBKBHnzcIG-9Qhsdm-9UBBwg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Screen Rant",
    icon: "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "The Film Theorists",
    icon: "https://yt3.ggpht.com/QnXaC_YmVgrih83IPHmS_37TOJquPQm4ESeop_PTyvatdS6pJa4ynQ57K9NtD6xV9n41h7to6Bw=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "CinemaWins",
    icon: "https://yt3.ggpht.com/6mqC3C7S9Zoi2MX1Xbcw_cftLy-W0LIIn1m3IwclOfaZGj5SiKVBKBHnzcIG-9Qhsdm-9UBBwg=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Screen Rant",
    icon: "https://yt3.ggpht.com/AhgGhww-nSkzcGg_upMHalc97ths0H04z-q_hATjHQPdg40W455l3SlNBuw9Z4JCdOXRxF70Fw=s88-c-k-c0x00ffffff-no-rj",
  },
];

export const SideBarExpanded = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <sidebar id="sidebar-ex" className="flex-none w-[14rem] min-h-0 pr-3 h-full overflow-y-scroll hidden">
      <div className="my-3 w-full px-3">
        {SIDEBAR_BUTTONS.map(({ text, icon, iconSelected }, i) => (
          <Bubble
            key={i}
            text={text}
            left={i === selected ? iconSelected : icon}
            selected={i === selected}
            onClick={() => setSelected(i)}
          />
        ))}
      </div>
      <div className="w-full h-[1px] mb-3 bg-white/30"></div>
      <div className="w-full px-3">
        <span className="inline-block mt-1.5 px-3">Subscriptions</span>
        <div>
          {channels.map((ch, i) => (
            <Bubble
              key={i}
              left={
                <Image
                  src={ch.icon}
                  width={24}
                  height={24}
                  alt={ch.name}
                  className="flex-none rounded-full"
                />
              }
              text={ch.name}
            />
          ))}
        </div>
      </div>
    </sidebar>
  );
};

export function SideBar() {
  const [selected, setSelected] = React.useState(0);

  return (
    <sidebar id="sidebar" className="flex-none w-[72px] h-full transition-transform duration-200">
      <div className="mt-2 flex flex-col items-stretch">
        {SIDEBAR_BUTTONS.map(({ text, icon, iconSelected }, i) =>
          i === selected ? (
            <SideBarActionButton key={i} text={text} icon={iconSelected} />
          ) : (
            <SideBarActionButton
              key={i}
              text={text}
              icon={icon}
              onClick={() => setSelected(() => i)}
            />
          )
        )}
      </div>
    </sidebar>
  );
}
