import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restDetails = useRestaurantMenu(resId);
  const [resMenu, setResMenu] = useState(null);

  if (restDetails === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } = restDetails;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-gray-600 mb-2">
        <span className="font-semibold">Cuisines:</span> {cuisines?.join(", ")}
      </p>
      <p className="text-gray-600">
        <span className="font-semibold">Cost for Two:</span> {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantMenu;
