"use client";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { User, Link } from "@nextui-org/react";
import MusicCard from "@/components/MusicCard";
import Skeleton from "@/components/Skeleton";
import AboutCard from "./components/AboutCard";
import College from "./components/College";
import Xcard from "./components/Xcard";

export default function App() {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <div className="space-y-4 ">
        {/* <div> */}
        {/* </div> */}
      {/* </div> */}
      {/* <div className="space-x-4 flex"> */}
          <AboutCard />
          <College />
          <Xcard />
        </div>
    </>
  );
}
