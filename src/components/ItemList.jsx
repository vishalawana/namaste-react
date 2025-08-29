import { IMG_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ data }) => {
    const dispatch = useDispatch();
    const handleClick = (elem)=>{
        dispatch(addItem(elem))
    }
    const itemsInCart = useSelector(store => store.cart.items)
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div  key={item.card.info.id + "-" + index} className="p-2 m-2 border-b-1 border-gray-400" >
                        <div className="flex justify-between">
                            <div className="py-2 flex flex-col text-left w-9/12">
                                <span>{item.card.info.name}</span>
                                <span>Rs {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                                <p className="text-xs text-left mr-15">{item.card.info.description}</p>
                            </div>
                            <div className="ml-auto w-3/12">
                                <img src={IMG_CDN_URL + Math.floor(Math.random() * 10 + 1) + 25} className="w-100 h-35 rounded" />
                                <button className="p-2 text-green rounded-lg border" onClick={() => handleClick(item)}>
                                    ADD+
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList