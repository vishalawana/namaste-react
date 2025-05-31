import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import { getMenuUrl } from "../utils/constants"

const RestaurantMenu = ()=> {

    const [restDetails, setResDetails] = useState(null);
    const [resMenu, setResMenu] = useState(null);
    const { resId } = useParams();
    console.log(resId);
    console.log(getMenuUrl(resId));
    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async ()=> {
        const data = await fetch(getMenuUrl(resId))
        
        const json = await data.json();
        console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
        const menu = json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
        const info = json.data.cards[2].card.card.info;
        setResDetails(info);
    }
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