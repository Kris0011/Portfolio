import { title } from "@/components/primitives";
import ProjectCard from "@/components/ProjectCard";

export default function BlogPage() {
	return (
		<div>
			<h1 className={title()}>Projects</h1>
			<div className="flex-col justify-center items-center">
			<ProjectCard/>
			<ProjectCard/>

			<ProjectCard/>
			</div>
		</div>
	);
}
