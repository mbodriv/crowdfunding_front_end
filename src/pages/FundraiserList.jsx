import { useSearchParams } from "react-router-dom";
import useFundraisers from "../hooks/use-fundraisers";
import FundraiserCard from "../component/fundraiser_card/FundraiserCard";
import "./FundraiserList.css";

function FundraiserList() {
  const { fundraisers, isLoading, error } = useFundraisers();

  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category");

  const filteredFundraisers = selectedCategory
    ? fundraisers.filter((f) => f.category === selectedCategory)
    : fundraisers;

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="fundraiser-list">
      {filteredFundraisers.length === 0 && (
        <p>No fundraisers yet for this category. Be the first to start one!</p>
      )}

      {filteredFundraisers.map((fundraiserData) => (
        <FundraiserCard key={fundraiserData.id} fundraiserData={fundraiserData} />
      ))}
    </div>
  );
}

export default FundraiserList;
