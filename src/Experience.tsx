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

    const experience = resume?.experience.map((job, i) => {
        const detailsShown = twMerge(
            !shown[i] && "hidden",
            "text-sm mt-2 text-gray-600 md:inline"
        );
        const jobPoints = job.points.map((point, pi) => (
            <li key={pi}>{point}</li>
        ));
        return (
            <div
                key={i}
                className="my-2 sm:my-4 pb-2 sm:pb-4 border-b border-b-gray-300 last:border-none"
            >
                <div className="text-lg">
                    <div className="font-bold sm:inline">{job.company}</div>
                    <div className={`${!shown[i] && "hidden"} sm:inline`}>
                        <span className="hidden sm:inline">, </span>
                        {job.location}
                    </div>
                    <div className="italic md:inline">
                        <span className="hidden md:inline"> &mdash; </span>
                        {job.position}
                    </div>
                </div>
                <div className="text-sm text-gray-400 uppercase font-['Open_Sans']">
                    {job.tenure}
                </div>
                <div className={detailsShown}>
                    <div>{job.blurb}</div>
                    <ul className="mt-2 ml-4 list-inside list-disc">
                        {jobPoints}
                    </ul>
                </div>
                <div
                    className="mt-2 text-sm md:hidden"
                    onClick={() => toggleJobDetails(i)}
                >
                    {!shown[i] ? "More..." : "Less..."}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6 sm:grow sm:mr-6">
            <h2 className="text-sm">Experience</h2>
            <div>{experience}</div>
        </div>
    );
}
