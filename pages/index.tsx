import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import * as SideBar from "../components/SideBar";
import * as Tag from "../components/Tag";

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
];

const Home: NextPage = () => {
  const [selectedTag, setSelectedTag] = useState(0);

  return (
    <>
      <SideBar.SideBarExpanded />
      <SideBar.SideBar />
      <main className="w-full h-full flex-1">
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
      </main>
    </>
  );
};

export default Home;
