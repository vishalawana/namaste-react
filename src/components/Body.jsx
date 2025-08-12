import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    if (restaurants) {
      setResList(restaurants);
      setOriginalList(restaurants);
    }
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl font-semibold text-red-500 mt-10">
        Looks like you are offline
      </h1>
    );
  }

  return resList.length === 0 ? (
    <Shimmer count={12} />
  ) : (
    <div className="max-w-7xl mx-auto px-6 py-4">
      {/* Search Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={() => {
              const filteredRes = originalList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setResList(filteredRes);
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-md shadow-sm"
          >
            Search
          </button>
        </div>

      {/* Action Buttons */}
<div className="flex flex-wrap justify-center gap-3 mb-6">
      <button
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md shadow-sm"
        onClick={() => {
          const filtered = originalList.filter(
            (res) => res.info.avgRating > 4.5
          );
          setResList(filtered);
        }}
      >
        Top Rated
      </button>

  <button
    className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-md shadow-sm"
    onClick={() => setResList(originalList)}
  >
    Reset
  </button>
</div>

      {/* Restaurant Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resList.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="block"
          >
            {restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant} /> :  <RestaurantCard resData={restaurant} /> }
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
