import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, onToggle }) => {
  return (
    <div>
      {/* Category Header */}
      <div
        className="flex justify-between my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
        onClick={onToggle}
      >
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItem ? "▲" : "▼"}</span>
      </div>

      {/* Items List */}
      <div>{showItem && <ItemList data={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
