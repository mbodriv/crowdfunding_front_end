import "./HeroSection.css";
import heroImage from "../../img/masterclass.jpeg";

function HeroSection (){
    return (
        <section className="hero-section">
            <div className="wrapper">
                <div className="hero-content">
                     <h1>Welcome to Mentor Me</h1>
                    <p>A free learning platform where mentors share their skills and mentees
                    gain knowledge, confidence and career progession.
                    </p>
                    <button className="button">Get Started</button>
                </div>
                <div className="photo">
                    <img src= {heroImage} alt="Two students smiling while learning together"/>
                </div>
            </div>
        </section>    
    )
}

export default HeroSection;