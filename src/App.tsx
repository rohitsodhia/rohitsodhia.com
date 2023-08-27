import "./App.css";

import { useResumeContext } from "./ResumeContext";
import Header from "./Header";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

export default function App() {
    let content;
    try {
        const resume = useResumeContext();

        content = (
            <div className="m-2 md:max-w-screen-md md:mx-auto">
                <Header />
                <Experience />
                <Skills />
                <Projects />
            </div>
        );
    } catch (e) {
        content = <div>Loading...</div>;
    }

    return content;
}
