import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";

const ITEM_CATEGORY_TYPE = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restDetails = useRestaurantMenu(resId);

  if (!restDetails) return <Shimmer />;

  // Extract restaurant info
  const restaurantInfo = restDetails.cards?.find(
    (card) => card?.card?.card?.info)?.card.card.info || {};

  const { name, cuisines = [], costForTwoMessage } = restaurantInfo;

  // Extract carousel safely
  const carousel =
    restDetails.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel || [];

  // Extract categories dynamically
  const categories =
    restDetails.cards
      ?.find((card) => card?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.filter((c) => c.card?.card?.["@type"] === ITEM_CATEGORY_TYPE) || [];
      console.log(categories)

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md text-center m-4">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Cuisines:</span> {cuisines.join(", ")}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Cost for Two:</span> {costForTwoMessage}
      </p> 
      {categories.map(category => <RestaurantCategory key={category.card.card.categoryId} data={category?.card?.card}/>)}
    </div>
  );
};

export default RestaurantMenu;
