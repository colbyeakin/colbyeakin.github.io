import ProjectCard from "@/src/components/projectCard"

export default function ProjectPage() {
    return (
        <ProjectCard
            compact
            title="Disney Trivia Experience"
            subtitle="Designing interactive systems through themed engagement"
            summary="An interactive trivia experience designed to explore engagement, clarity, and themed feedback."
            tech="React | TypeScript | Tailwind CSS"
            previewImage="/disney-trivia.png"
            liveUrl="https://disneytrivia.vercel.app/"
            githubUrl="https://github.com/colbyeakin/my-next-app"
            details={
            <>
                <p>
                    <strong>Problem:</strong> How can a digital experience reinforce theme
                    and engagement while remaining clear, accessible, and intuitive?
                </p>

                <p>
                    <strong>Approach:</strong> I designed and built an interactive trivia experience
                    centered on Disney parks knowledge, focusing on structed progression, immediate 
                    feedback, and cohesive visual language. State-driven logic guides users through 
                    questions, while reinforcing clarity and flow.    
                </p>

                <p>
                    <strong>Outcome:</strong> The result is a responsive, user-focused experience that
                    balances playfulness with structure. Players move through curated questions, recieve
                    real-time feedback, and interact with a consistent, theme-aware interface.
                </p>

                <p>
                    <strong>Looking Forward:</strong> This project established a foundation for deeper
                    narrative integration, personalization, and adaptive difficulty within themed digital 
                    experiences.
                </p>
            </>
            }
        />
    );
}
