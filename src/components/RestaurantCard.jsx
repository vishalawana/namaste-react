
import {IMG_CDN_URL} from '../utils/constants';
// console.log(IMG_CDN_URL);

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;  // const resData = props.resData;
  // console.log(resData);

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    id
  } = resData?.info;

  return (
    <div className="restaurant-card">
      <img
        src={IMG_CDN_URL + Math.floor(Math.random()*10+1)+25}
        alt={name}
        className="restaurant-logo"
      />
      <div className="restaurant-details">
        <h3 className="restaurant-name">
          {name.slice(0, 22)}
          {name.length > 22 ? "..." : ""}
        </h3>
        <div className="esa-rating">
          <h4 className="rating">
            <span>{avgRating}</span>
          </h4>
          <h4>{costForTwo}</h4>
          <h4>{deliveryTime} mins</h4>
        </div>
        <p className="cousine">
          {cuisines.join(", ").slice(0, 30)}
          {cuisines.join(", ").length > 30 ? "..." : ""}
        </p>
        <p className="location">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;