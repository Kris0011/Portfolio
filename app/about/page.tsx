"use client";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);

  return (
    <Card style={{maxHeight:"500px" , overflowY: "auto" }}> {/* Adjusted max-width and added overflow-auto */}
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar isBordered radius="full" size="md" src="/avatars/avatar-1.png" />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Kris Patel</h4>
            <h5 className="text-small tracking-tight text-default-400">@kris__patel</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => setIsFollowed(!isFollowed)}
        >
          {isFollowed ? "Unfollow" : "Follow"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p className="pt-3 pl-2 pr-2">
          Welcome to my coding journey {'!'} I&apos;m Kris Patel, a passionate fullstack developer with a deep love for UI/UX design. My mission is to craft remarkable digital experiences that not only function flawlessly but also delight the user&apos;s senses.
        </p>
		<br/>
        <p className="pt-2 pl-2 pr-2">
          Join me on this journey, and let&apos;s embark on the wonderful world of {'#'}CodeWithKris{'!'} Together, we&apos;ll explore the ever-evolving landscape of web development, share insights, and create beautiful, functional, and user-friendly digital experiences. Feel free to connect, collaborate, or simply chat about our shared love for all things tech.
        </p>
		<br/>
        <p className="pt-2 pl-2 pr-2">Let&apos;s code, design, and innovate our way to a more connected and visually appealing digital universe. 🚀💻✨</p>
		<br/>
        <span className="pt-2 pl-2 pr-2">
          {'#'}CodeWithKris 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">1</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">100M</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
