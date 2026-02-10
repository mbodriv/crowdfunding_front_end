import { Link } from "react-router-dom";

function FundraiserInfo(props) {
    const { fundraiserData } = props;
    const fundraiserLink = `/fundraiser/${fundraiserData.id}`;

    return(
        <div className="fundraiser-page">
            <Link to={fundraiserLink}>
            <h3>{fundraiserData.title}</h3>
            <h2>Description</h2>
            <p>{fundraiserData.background}</p>
            <h3>Years of Experience</h3>
            <p>{fundraiserData.years_experience}</p>
            <h3>My profile:</h3>
            <p>{fundraiserData.profile_url}</p>
            <h3>Lesson status</h3>
            <p>{fundraiserData.is_active}</p>

            </Link>
        </div>
    );
}

export default FundraiserInfo;