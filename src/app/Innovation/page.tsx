import { useState } from "react"
import ProjectCard from "@/src/components/projectCard"
import { projects } from "@/src/data/projects";

export default function ProjectPage() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const handleToggle = (index:number) => {
        setExpandedId((current) =>
        current === index ? null : index
        );
    };

    return (
        <div className="flex flex-row space-x-16 items-start">
             {projects.map((project, index) => (
                <ProjectCard 
                    key={index} 
                    compact 
                    {...project}
                    isExpanded={expandedId === index}
                    isLocked={expandedId !== null && expandedId !== index}
                    onToggle={() => handleToggle(index)}
                />
             ))}
        </div>

    );
}
