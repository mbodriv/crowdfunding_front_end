import ReasonCard from "./ReasonCard";
import "./WhyMentorMe.css";

function WhySection (){
    return (
        <>
        <section className="why-section">
            <div>
                <h1>How will this program empower you?</h1>
                <p>Mentor Me brings together people who want to share their knowledge and those eager to learn.
                Whether you’re volunteering your time as a mentor or taking your first step as a mentee, 
                this community is built on growth, confidence, and giving back.</p>
            </div>

            < ReasonCard />
        </section>
        </>
    )
}
export default WhySection;
