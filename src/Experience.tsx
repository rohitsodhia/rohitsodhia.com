import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useResumeContext } from "./ResumeContext";

export default function Experience() {
    const resume = useResumeContext();
    const [shown, setShown] = useState<boolean[]>(
        new Array(resume.experience.length).fill(false)
    );

    const toggleJobDetails = (toggleIndex: number) => {
        let newShown = shown.map((v, i) => {
            if (i === toggleIndex) return !v;
            return v;
        });
        setShown(newShown);
    };

    const experience = resume.experience.map((job, i) => {
        const detailsShown = twMerge(
            !shown[i] && "hidden",
            "text-sm mt-2 md:inline"
        );
        const jobPoints = job.points.map((point, pi) => (
            <li key={pi} className="my-1">
                <span className="font-bold">{point.title}: </span> {point.point}
            </li>
        ));
        return (
            <div key={i} className="my-2 sm:my-4">
                <div className="flex text-blue font-bold">
                    <div className="text-lg flex-grow">{job.company}</div>
                    <div className="self-end">{job.tenure}</div>
                </div>
                <div className="italic text-sm">{job.position}</div>
                <div className={detailsShown}>
                    <ul className="mt-2 ml-6 list-outside list-disc">
                        {jobPoints}
                    </ul>
                </div>
                <div
                    className="mt-2 text-sm md:hidden cursor-pointer"
                    onClick={() => toggleJobDetails(i)}
                >
                    {!shown[i] ? "More..." : "Less..."}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6 sm:grow">
            <h2>Experience</h2>
            <div>{experience}</div>
        </div>
    );
}
