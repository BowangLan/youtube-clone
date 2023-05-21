import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as SideBar from "../components/SideBar";
import * as Tag from "../components/Tag";
import * as VideoCard from "../components/VideoCard";

// generate 10 topic objects, each with a name
const tags_demo = [
  { name: "React" },
  { name: "Next.js" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "Node.js" },
  { name: "Express" },
  { name: "MongoDB" },
  { name: "SQL" },
  { name: "Mysql" },
  { name: "Mongoose" },
  { name: "Mongoose" },
  { name: "Mongoose" },
  { name: "Mongoose" },
  { name: "Mongoose" }
];

const demo_video_data = [
  {
    imgUrl: 'https://i.ytimg.com/vi/VUqUQp1_pB8/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIF4oVzAP&rs=AOn4CLDba_uw4fTBf_n-yuvAg3vdFsU9Zg',
    title: 'NCBC 2022 | AMD F | Sam/Van',
    creator: {
      username: 'SaMASH',
      avatarUrl: 'https://yt3.ggpht.com/ytc/AL5GRJX0NiiH_D31hnaPcKxdlk1fn7yKQonxnfIXKg=s68-c-k-c0x00ffffff-no-rj'
    },
    duration: 37.25,
    createdAt: 1630000000000,
    views: 1783
  }
]


const Home: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState(0);

  return (
    <>
      <SideBar.SideBarExpanded />
      <SideBar.SideBar />
      <main className="h-full flex-1 min-w-0">
        <Tag.ListContainer>
          {tags_demo.map((tag, i) => {
            return (
              <Tag.Item
                key={i}
                text={tag.name}
                onClick={() => setSelectedTag(i)}
                selected={selectedTag === i}
              />
            );
          })}
        </Tag.ListContainer>
        <div className="py-6">
          <VideoCard.List data={demo_video_data} />
        </div>
      </main>
    </>
  );
};

export default Home;
