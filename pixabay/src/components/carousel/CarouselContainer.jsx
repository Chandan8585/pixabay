import Carousel from "@itseasy21/react-elastic-carousel";
import "./carousel.css";
import { useSearchedImage } from "../context/SearchContext";
const data = require("../../assets/data/categories.json"); 

const CarouselContainer = () => {
  const { imgCategory, searchedDispatch } = useSearchedImage();

  const handleCategoryClick = (category) => {
    searchedDispatch({
      type: "IMAGE_CATEGORY",
      payload: category,
    });
  };
  return (
    <div className="categories-container  ">
      <Carousel
        className="carousel"
        itemsToShow={6}
        itemPadding={[5, 10]}
        itemsToScroll={5}
        autoPlaySpeed={2500}
      >
        {data &&
          data.map(({ id, category }) => (
            <button
              className="categories-btn primary-text text-s cursor"
              key={id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;