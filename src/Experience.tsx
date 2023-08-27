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
            "text-sm mt-2 text-gray-600"
        );
        const jobPoints = job.points.map((point, pi) => (
            <li key={pi}>{point}</li>
        ));
        return (
            <div
                key={i}
                className="my-2 pb-2 border-b border-b-gray-300 last:border-none"
            >
                <div className="text-lg">
                    <div className="font-bold">{job.company}</div>
                    <div className={`${!shown[i] && "hidden"}`}>
                        {job.location}
                    </div>
                    <div className="italic">{job.position}</div>
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
                    className="mt-2 text-sm"
                    onClick={() => toggleJobDetails(i)}
                >
                    {!shown[i] ? "More..." : "Less..."}
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6">
            <h2 className="text-sm">Experience</h2>
            <div>{experience}</div>
        </div>
    );
}
