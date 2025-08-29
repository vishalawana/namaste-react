import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { removeItem } from "../utils/cartSlice";


const Cart = ()=>{
    const cartItem = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    const handleClick = () => {
    dispatch(removeItem());
}
    return (
        <div className="text-center m-10 p-10">
            <p className="text-2xl font-bold"> Cart </p>
            <button
                className="p-2 m-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-black cursor-pointer"
                onClick={handleClick}
            >
                Clearcart
            </button>
            <div>
                <ItemList data={cartItem} />
            </div>
        </div>
    );
}
export default Cart;