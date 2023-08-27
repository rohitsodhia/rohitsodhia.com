import { useResumeContext } from "./ResumeContext";

export default function Skills() {
    const resume = useResumeContext();

    const emptySkills = [...Array(10)].map((_, i) => (
        <span key={i}>&#10022;</span>
    ));
    const skills = resume.skills.map((skill, i) => {
        const strength = [...Array(skill.strength)].map((_, i) => (
            <span key={i}>&#10022;</span>
        ));
        return (
            <div key={i} className="mt-2">
                <div className="text-gray-500">{skill.skill}</div>
                <div className="relative">
                    <div className="text-gray-300">{emptySkills}</div>
                    <div className="absolute text-blue top-0 left-0">
                        {strength}
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className="mt-6">
            <h2 className="text-sm">Technical Skills</h2>
            <div>{skills}</div>
        </div>
    );
}
