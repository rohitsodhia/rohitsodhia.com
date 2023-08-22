import { useResumeContext } from "./ResumeContext";

export default function Header() {
    const resume = useResumeContext();

    return (
        <div className="md:flex">
            <div>
                <h1 className="text-3xl font-bold">Rohit Sodhia</h1>
                <div className="text-xl mt-1">Software Engineer</div>
            </div>
            <div className="mt-2 md:flex md:justify-self-end font-bold">
                <div>{resume?.location}</div>
                <div></div>
            </div>
            <div className="mt-3">
                Full stack software engineer, dominantly in backend
                technologies. Experienced with full product life-cycle
                development, from design to support, and helping organize and
                lead engineering teams.
            </div>
        </div>
    );
}
