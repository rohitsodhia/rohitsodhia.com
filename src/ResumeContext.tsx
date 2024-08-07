import {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

export type SkillJson = {
    languages: string[];
    infrastructure: string[];
    project_management: string[];
    general: string[];
};

export type ExperienceJson = {
    company: string;
    location: string;
    position: string;
    tenure: string;
    blurb: string;
    points: { title: string; point: string }[];
};

type ProjectLink = {
    title: string;
    link: string;
};

export type AdditionalExperienceJson = {
    title: string;
    tag?: string;
    role?: string;
    code?: ProjectLink;
    blurb?: string;
};

export type ResumeJson = {
    title: string;
    email: string;
    linkedin: string;
    skills: SkillJson;
    experience: ExperienceJson[];
    additional_experience: AdditionalExperienceJson[];
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
