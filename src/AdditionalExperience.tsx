import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useResumeContext } from "./ResumeContext";

export default function Projects() {
    const resume = useResumeContext();
    const [shown, setShown] = useState<boolean[]>(
        new Array(resume.additional_experience.length).fill(false)
    );

    const toggleProjectDetails = (toggleIndex: number) => {
        let newShown = shown.map((v, i) => {
            if (i === toggleIndex) return !v;
            return v;
        });
        setShown(newShown);
    };

    const projects = resume.additional_experience.map((experience, i) => {
        const detailsShown = twMerge(
            !shown[i] && "hidden",
            "text-sm mt-2 text-gray-600 md:inline"
        );
        return (
            <div
                key={i}
                className="my-2 sm:my-4 pb-2 sm:pb-4 border-b border-b-gray-300 last:border-none"
            >
                {experience.tag && (
                    <div className="text-lg text-blue font-bold">
                        {experience.title} - {experience.tag}
                    </div>
                )}
                {experience.role && (
                    <div className="text-lg">
                        <span className="text-blue font-bold">
                            {experience.title}
                        </span>{" "}
                        - {experience.role}
                    </div>
                )}
                {experience.code && (
                    <div className="text-sm my-1">
                        <span className="text-red-800">&#128279;&nbsp;</span>
                        <a
                            href={experience.code.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {experience.code.title}
                        </a>
                    </div>
                )}
                {experience.blurb && (
                    <div className={detailsShown}>
                        <div>{experience.blurb}</div>
                    </div>
                )}
                <div
                    className="mt-2 text-sm md:hidden cursor-pointer"
                    onClick={() => toggleProjectDetails(i)}
                >
                    {!shown[i] ? "More..." : "Less..."}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6 md:mt-0">
            <h2>Additional Professional Experience</h2>
            <div>{projects}</div>
        </div>
    );
}
