import { SkillJson } from "./ResumeContext";
import { useResumeContext } from "./ResumeContext";

export default function Skills() {
    const resume = useResumeContext();
    const skill_titles = [
        { key: "languages", title: "Language/Framework" },
        { key: "infrastructure", title: "Network/Infrastructure" },
        {
            key: "project_management",
            title: "Project Management/Issue Tracking",
        },
    ];

    const listed_skills = (
        <div>
            {skill_titles.map((skill_title, i) => {
                const skills =
                    resume.skills[skill_title.key as keyof SkillJson];
                return (
                    <div key={skill_title.key} className="">
                        <span className="font-bold">{skill_title.title}: </span>
                        {skills.join(", ")}
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="mt-6">
            {listed_skills}
            <h2>General Engineering Skills</h2>
            <div className="sm:grid grid-cols-2 md:grid-cols-3">
                {resume.skills.general.map((skill, i) => {
                    return <div key={i}>{skill}</div>;
                })}
            </div>
        </div>
    );
}
