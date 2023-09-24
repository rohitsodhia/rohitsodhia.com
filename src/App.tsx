import "./App.css";

import { useResumeContext } from "./ResumeContext";
import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import TechnicalPositions from "./TechnicalPositions";

export default function App() {
    let content;
    try {
        const resume = useResumeContext();

        content = (
            <div className="m-2 sm:m-4 md:max-w-screen-md md:mx-auto">
                <Header />
                <div className="sm:flex">
                    <Experience />
                    <Skills />
                </div>
                <Projects />
                <TechnicalPositions />
                <div className="mt-6 md:mt-0">
                    <h2 className="text-sm">Education</h2>
                    <div className="text-lg">
                        <div className="font-bold md:inline">
                            Rutgers University, School of Engineering
                        </div>
                        <div className="md:inline-block">
                            <span className="hidden md:inline">, </span>
                            New Brunswick, NJ
                            <span className="hidden md:inline"> &mdash; </span>
                        </div>
                        <div className="italic md:inline">
                            B.S. Biomedical Engineering
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (e) {
        content = <div>Loading...</div>;
    }

    return content;
}
