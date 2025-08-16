import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const ITEM_CATEGORY_TYPE =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restDetails = useRestaurantMenu(resId);
  const [openIndex, setOpenIndex] = useState(null); // track which category is open

  if (!restDetails) return <Shimmer />;

  // Extract restaurant info
  const restaurantInfo =
    restDetails.cards?.find((card) => card?.card?.card?.info)?.card.card.info ||
    {};

  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  // Extract categories dynamically
  const categories =
    restDetails.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((c) => c.card?.card?.["@type"] === ITEM_CATEGORY_TYPE) || [];

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md text-center m-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Cuisines:</span> {cuisines.join(", ")}
      </p>
      <p>
        <span className="font-semibold">Cost for Two:</span> {costForTwoMessage}
      </p>

      {/* Categories */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.categoryId}
          data={category?.card?.card}
          showItem={openIndex === index} // open only if selected
          onToggle={() =>
            setOpenIndex(openIndex === index ? null : index) // toggle
          }
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
