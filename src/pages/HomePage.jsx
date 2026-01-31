import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../component/FundraiserCard";
import "./HomePage.css";

function HomePage() {
//this function is using destructuring. It takes the fundraisers property from the object that useFundraisers return and creates a new variable called fundraisers with that value.
  const {fundraisers} = useFundraisers()
  console.log(fundraisers)
  return (
    <div id="fundraiser-list">
    {fundraisers.map((fundraiserData, key) => {
        return <FundraiserCard key={key} fundraiserData={fundraiserData} />;
      })}
    </div>
  );
}

export default HomePage;
