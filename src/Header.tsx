import { useResumeContext } from "./ResumeContext";

export default function Header() {
    const resume = useResumeContext();

    return (
        <div>
            <h1 className="text-3xl font-bold uppercase text-center border-b border-slate-400">
                Rohit Sodhia
            </h1>
            <div className="sm:flex items-center text-sm justify-center mt-1">
                <div>
                    <a href={`mailto:${resume.email}`}>{resume.email}</a>
                </div>
                <div className="mx-3">&mdash;</div>
                <div>
                    <a href={resume.linkedin} target="_blank">
                        {resume.linkedin}
                    </a>
                </div>
            </div>
            <div className="text-blue font-bold text-center text-2xl uppercase mt-4">
                Senior Backend Engineer - Innovative Team Lead
            </div>
            <div className="mt-1 text-center">
                Experienced Senior Backend Engineer with a robust background in
                full-stack development, specializing in the full product
                lifecycle from design to support. Demonstrated leadership in
                organizing and guiding engineering teams. Seeking a Team Lead
                role to leverage my technical expertise and team management
                skills for driving innovative solutions.
            </div>
        </div>
    );
}
