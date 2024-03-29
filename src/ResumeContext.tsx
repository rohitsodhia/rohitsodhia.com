import {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

export type SkillJson = {
    skill: string;
    strength: number;
};

export type ExperienceJson = {
    company: string;
    location: string;
    position: string;
    tenure: string;
    blurb: string;
    points: string[];
};

type ProjectLink = {
    title: string;
    link: string;
};

export type ProjectJson = {
    title: string;
    tag: string;
    code: ProjectLink;
    blurb: string;
};

export type TechnicalPositionsJson = {
    title: string;
    role: string;
    blurb: string;
};

export type ResumeJson = {
    title: string;
    location: string;
    skills: SkillJson[];
    experience: ExperienceJson[];
    projects: ProjectJson[];
    technical_positions: TechnicalPositionsJson[];
};

const ResumeContext = createContext<ResumeJson | undefined>(undefined);

export function useResumeContext(): ResumeJson {
    const context = useContext(ResumeContext);
    if (!context) throw new Error("Resume should be loaded");
    return context;
}

export default function ResumeContextProvider({ children }: PropsWithChildren) {
    const [resume, setResume] = useState<ResumeJson | undefined>(undefined);

    useEffect(() => {
        async function getResumeJson() {
            const response = await fetch("resume.json");
            const data: ResumeJson = await response.json();
            return data;
        }

        getResumeJson().then((data) => {
            setResume(data);
        });
    }, []);

    return (
        <ResumeContext.Provider value={resume}>
            {children}
        </ResumeContext.Provider>
    );
}
