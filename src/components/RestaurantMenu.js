import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu =()=>{
  
    const {resId} = useParams()

    const [showIndex,setShowIndex] = useState()
    
    const resInfo = useRestaurantMenu(resId)
    
    const resinfos= resInfo?.data?.cards[2]?.card?.card?.info
    
    const itemData = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards
   
    // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    
    const categories= resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards?.filter(c=> c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    if(resInfo === null) return <Shimmer/>
        
return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{resinfos?.name}</h1>
            <h3 >{resinfos?.locality},{resinfos?.areaName},{resinfos?.city}</h3>
            <p className="font-bold text-l">{resinfos?.cuisines?.join(", ")} - {resinfos?.costForTwo/100}</p>
            {/* caterogies */}
            {categories?.map((category,index)=>
            <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
            showItems={index === showIndex ? true : false }
            setShowIndex={()=>setShowIndex(index)}
            />)
            }


           

        </div>
    )
}
export default RestaurantMenu