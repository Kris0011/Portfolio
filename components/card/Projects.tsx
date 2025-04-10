import Link from "next/link";
import React from "react";

type ProjectsCardProps = {
  project: Project;
};

type Project = {
  title: string;
  description: string;
  href: string
};

const ProjectsCard = ({ project }: ProjectsCardProps) => {
  return (
    <section>
      <div className="mt-4 grid gap-4 md:grid-cols-1">
        <Link
          href={project.href}
          target="_blank"
          className="border border-neutral-300 dark:border-neutral-800 hover:dark:bg-neutral-800 hover:bg-neutral-100 rounded-md p-4 overflow-x-hidden transition duration-200"
        >
          <div className="overflow-x-hidden leading-relaxed space-x-y">
            <h2 className="text-black dark:text-black dark:text-white font-medium">
              {project.title}
            </h2>
            <p className="text-black dark:text-black dark:text-white opacity-70 dark:opacity-60 text-sm line-clamp-2 mb-2.5">
              {project.description}
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsCard;
