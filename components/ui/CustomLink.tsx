import React from "react";
import Link from "next/link";

import IconMap from "./IconMap";

interface CustomLinkProps {
  text: string;
  url: string;
  iconKey: string;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, url, iconKey }) => {
  const icon = IconMap[iconKey];

  return (
    <div className="my-1">
      <Link
        href={url}
        passHref
        target="_blank"
        className="border-neutral-400 dark:border-neutral-600 dark:text-neutral-300 text-neutral-600 hover:dark:bg-neutral-700 hover:bg-neutral-200 transition duration-200 flex w-full border rounded-lg p-2 items-center justify-between"
      >
        <span className="flex flex-row items-center"> {text} </span>
        <div> {icon} </div>
      </Link>
    </div>
  );
};

export default CustomLink;
