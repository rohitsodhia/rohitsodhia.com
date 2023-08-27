import { useResumeContext } from "./ResumeContext";

export default function TechnicalPositions() {
    const resume = useResumeContext();

    const technical_positions = resume.technical_positions.map(
        (position, i) => {
            return (
                <div
                    key={i}
                    className="my-2 pb-2 border-b border-b-gray-300 last:border-none"
                >
                    <div className="text-lg">
                        <div className="font-bold">{position.title}</div>
                        <div className="italic">{position.role}</div>
                    </div>
                </div>
            );
        }
    );

    return (
        <div className="mt-6">
            <h2 className="text-sm">Technical Positions</h2>
            <div>{technical_positions}</div>
        </div>
    );
}
