import { useResumeContext } from "./ResumeContext";

export default function Experience() {
    const resume = useResumeContext();

    const experience = resume?.experience.map((job, i) => {
        return (
            <div key={i} className="my-2">
                <div>
                    <div>{job.company}</div>
                    <div>{job.position}</div>
                </div>
                <div>{job.tenure}</div>
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
