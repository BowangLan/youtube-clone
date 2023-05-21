import Image from "next/image";
import React from "react";

interface User {
  username: string;
  avatarUrl: string;
}

interface Creator extends User {}

interface Video {
  imgUrl: string;
  duration: number;
  title: string;
  creator: Creator;
  views: number;
  createdAt: number;
}

export function VideoCard({ video }: { video: Video }) {
  return (
    <div className="video-card-container">
      <div
        className="video-card-img-container"
        style={{
          aspectRatio: 268.99 / 151.3,
        }}
      >
        <Image
          alt={video.title}
          src={video.imgUrl}
          className="video-img"
          fill
        />
      </div>
      <div className="flex mt-3">
        <div className="relative w-9 h-9 rounded-full overflow-hidden">
          <Image
            alt={video.creator.username}
            src={video.creator.avatarUrl}
            className="video-card-avatar"
            fill
          />
        </div>
        <div className="flex flex-col flex-1 ml-3">
          <div className="font-[400] text-[14px] text-[var(--video-card-title-color)]">
            {video.title}
          </div>
          <div className="mt-1.5 text-[var(--video-card-description-color)] text-[12px] flex flex-col">
            <span className="">{video.creator.username}</span>
            <div className="flex">
              <span>{video.views} views</span>
              <span className="dot-before">{video.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function List({ data }: { data: Video[] }) {
  return (
    <div className="video-card-list-container">
      {data.map((video, i) => {
        return <VideoCard key={i} video={video} />;
      })}
    </div>
  );
}
