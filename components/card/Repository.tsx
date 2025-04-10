"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import SkeletonCard from "@/components/card/Skeleton";

type Repo = {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
};

const RepositoryCard = () => {
  const [repositories, setRepositories] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (repositories) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [RepositoryCard]);

  let skeletonCards = Array(3).fill(0);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/Kris0011/repos"
        );
        if (response.ok) {
          const data = await response.json();
          setRepositories(data);
        } else {
          throw new Error("Repository Failed.");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepositories();
  }, []);

  return (
    <section>
      <div className="space-y-2 my-2">
        <h1 className="text-black dark:text-black dark:text-white text-2xl font-semibold">
          Repositories
        </h1>
        <p className="text-black dark:text-black dark:text-white">
          All my open source repositories
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 mt-5">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          : repositories.map((repo) => (
            <Link target="_blank" href={repo.html_url} key={repo.id}>
              <div className="border border-neutral-300 dark:border-neutral-800 dark:text-neutral-200 text-neutral-500 hover:dark:bg-neutral-800 hover:bg-neutral-100 h-full rounded-md p-4 overflow-x-hidden transition duration-200">
                <div className="space-y-2">
                  <div className="flex justify-between space-x-2">
                    <h3 className="text-black dark:text-black dark:text-white items-center truncate space-x-1">
                      {repo.name}
                    </h3>
                  </div>
                  <p className="text-slate-500 dark:text-black dark:text-white/70 text-sm line-clamp-2 mb-2.5">
                    {repo.description}
                  </p>
                  <div className="mt-5">
                    <span className="text-black/50 dark:text-black dark:text-white/70">
                      Stars: {repo.stargazers_count}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default RepositoryCard;