import Image from "next/image";
import React from "react";

export default function UserAvatar({ avatarUrl, onClick }) {
  return (
    <Image
      alt="User avatar"
      src={avatarUrl}
      width={36}
      height={36}
      onClick={onClick}
      className="rounded-full cursor-pointer"
    />
  );
}
