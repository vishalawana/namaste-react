import ItemList from "./ItemList";
import { useState } from "react";
import Shimmer from "./Shimmer";
const RestaurantCategory = (props) => {
    const {data} = props
    const [showItem, setShowItem] = useState(false);
    const handleClick = ()=>{
        setShowItem(!showItem)
    }
    return (
        <div>
            <div className="flex justify-between my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({(data.itemCards.length)})</span>
                <span>Arrow</span>
            </div>
            <div>
               {showItem && <ItemList data={data.itemCards}/>}
            </div>
        </div>
    )
}
export default RestaurantCategory;