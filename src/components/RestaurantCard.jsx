import { IMG_CDN_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64 hover:scale-105 transition-transform">
      <img
        src={IMG_CDN_URL + Math.floor(Math.random() * 10 + 1) + 25}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-xs text-gray-400">ID: {id}</p>
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>

        <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
          <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs">{avgRating} ★</span>
          <span>{costForTwo}</span>
          <span>{deliveryTime} mins</span>
        </div>

        <p className="mt-2 text-gray-500 text-sm truncate">
          {cuisines.join(", ")}
        </p>
        <p className="text-gray-400 text-xs">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
