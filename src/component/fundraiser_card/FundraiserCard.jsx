import { Link } from "react-router-dom"; //it lets navigate to another page without reloading the site
import "./FundraiserCard.css";



function FundraiserCard(props) {
  //a function to receive data from its parent via props
  const { fundraiserData } = props;
  //we are building our dynamic url like /fundraiser/3
  const fundraiserLink = `/fundraiser/${fundraiserData.id}`;

  return (
    <div className="fundraiser-card">
    {/* clickling anything inside the link navigates to the fundraiser page */}
      <Link to={fundraiserLink}>
        <h3>{fundraiserData.title}</h3>
        <p>{fundraiserData.background}</p>
        <span className="fundraiser-cta">See Details -></span>
      </Link>
    </div>
  );
}
export default FundraiserCard;
