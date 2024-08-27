import { createContext,useEffect,useState } from "react";
import { food_list } from "../images/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [cartitems,setCartitems] = useState({});

    const addToCart = (itemId) => {
        if(!cartitems[itemId]){
            setCartitems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartitems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeFromCart =(itemId) => {
        setCartitems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    
    function getTotalCartAmount(){
        let totalAmount=0;
        for(const item in cartitems){
            if(cartitems[item]>0){
                let itemInfo=food_list.find((product)=>product._id===item);
                totalAmount += itemInfo.price * cartitems[item]
            }
        }
        return totalAmount

    }


    const contextValue={
       food_list,
       cartitems,
       setCartitems,
       addToCart,
       removeFromCart,
       getTotalCartAmount,
    }
    return(
        <StoreContext.Provider value={contextValue}>
             {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider