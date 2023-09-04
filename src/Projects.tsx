import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useResumeContext } from "./ResumeContext";

export default function Projects() {
    const resume = useResumeContext();
    const [shown, setShown] = useState<boolean[]>(
        new Array(resume.projects.length).fill(false)
    );

    const toggleProjectDetails = (toggleIndex: number) => {
        let newShown = shown.map((v, i) => {
            if (i === toggleIndex) return !v;
            return v;
        });
        setShown(newShown);
    };

    const projects = resume.projects.map((project, i) => {
        const detailsShown = twMerge(
            !shown[i] && "hidden",
            "text-sm mt-2 text-gray-600 md:inline"
        );
        return (
            <div
                key={i}
                className="my-2 sm:my-4 pb-2 sm:pb-4 border-b border-b-gray-300 last:border-none"
            >
                <div className="text-lg">
                    <div className="font-bold">{project.title}</div>
                    <div className="italic">{project.tag}</div>
                </div>
                <div className="text-sm mb-2">
                    <span className="text-red-800">&#128279;&nbsp;</span>
                    <a
                        href={project.code.link}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {project.code.title}
                    </a>
                </div>
                <div className={detailsShown}>
                    <div>{project.blurb}</div>
                </div>
                <div
                    className="mt-2 text-sm md:hidden"
                    onClick={() => toggleProjectDetails(i)}
                >
                    {!shown[i] ? "More..." : "Less..."}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6 md:mt-0">
            <h2 className="text-sm">Projects</h2>
            <div>{projects}</div>
        </div>
    );
}
