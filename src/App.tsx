import "./App.css";

import { useResumeContext } from "./ResumeContext";
import Header from "./Header";

export default function App() {
    const resume = useResumeContext();

    const content = resume ? (
        <div className="m-2 md:max-w-screen-md md:mx-auto">
            <Header />
        </div>
    ) : (
        <div>Loading...</div>
    );

    return content;
}
