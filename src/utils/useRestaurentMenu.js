import {useEffect, useState} from "react";
import { getMenuUrl } from "../utils/constants"

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data = await fetch(getMenuUrl(resId));
        const json = await data.json();
        const info = json.data
        setResInfo(info);
    }

    return resInfo;
}

export default useRestaurantMenu;