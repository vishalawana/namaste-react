import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"

const Body = () => {
  const [resList, setResList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      setOriginalList(restaurants); // Save the original list for reset
    }
  };

  return resList.length === 0 ? (
    <Shimmer count={18} />
  ) : (
    <div className="body">
      <div className="search">
        <input type="text"
        value={searchText} 
        onChange={(e)=> setSearchText(e.target.value)}/>
        <button 
          onClick={()=> {
            const filteredRes = originalList.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setResList(filteredRes);
          }
          }
          >
            Search
        </button>
      </div>
      <button
        className="top-rated"
        onClick={() => {
          // setResList(restaurants);
          const filtered = originalList.filter(
            (res) => res.info.avgRating > 4.5
          );
          setResList(filtered);
        }}
      >
        Top Rated Button
      </button>

      <button
        className="top-rated"
        onClick={() => setResList(originalList)}
      >
        Reset Rest List
      </button>

      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
