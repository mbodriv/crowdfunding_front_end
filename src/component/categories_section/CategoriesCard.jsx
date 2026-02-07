import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins, faSimCard, faHeartbeat, faUserTie, faPaintBrush, faPerson, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./CategoriesCard.css";

function CategoryCard() {
  return (
    <>
    <section className="links">
        <h2 className="category-title">Choose your path</h2>
        <div className="category-card">
            <Link to="/fundraisers?category=Finance">
            <FontAwesomeIcon icon={faCoins} />
            <span>Finance</span>
            </Link>

            <Link to="/fundraisers?category=Tech_Digital">
            <FontAwesomeIcon icon={faSimCard} />
            <span>Tech & Digital</span>
            </Link>

            <Link to="/fundraisers?category=Health_Lifestyle">
            <FontAwesomeIcon icon={faHeartbeat} />
            <span>Health & Lifestyle</span>
            </Link>

            <Link to="/fundraisers?category=Career">
            <FontAwesomeIcon icon={faUserTie} />
            <span>Career</span>
            </Link>

            <Link to="/fundraisers?category=Creative_Skills">
            <FontAwesomeIcon icon={faPaintBrush} />
            <span>Creative Skills</span>
            </Link>

            <Link to="/fundraisers?category=Personal_Development">
            <FontAwesomeIcon icon={faPerson} />
            <span>Personal Development</span>
            </Link>

            <Link to="/fundraisers?category=Language">
            <FontAwesomeIcon icon={faGlobe} />
            <span>Language & Cultural Exchange</span>
            </Link>
        </div>
    </section>
    </>
  );
}

export default CategoryCard;
