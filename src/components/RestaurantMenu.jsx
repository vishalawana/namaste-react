import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurentMenu";


const RestaurantMenu = ()=> {
    const { resId } = useParams();
    const restDetails = useRestaurantMenu(resId);
    const [resMenu, setResMenu] = useState(null);

     if (restDetails === null) {
        return <Shimmer />;
    }
    
    const {name, cuisines, costForTwoMessage} = restDetails;

    return(
        <div className="menu">
            <div>This is restaurant menu</div>
            <div>Name: {name}</div>
            <div>Cuisines: {cuisines?.join(", ")}</div>
            <div>Cost for Two: {costForTwoMessage}</div>
        </div>
    )
}
export default RestaurantMenu;