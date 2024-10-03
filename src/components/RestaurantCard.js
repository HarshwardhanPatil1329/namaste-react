import { CDN_URL } from "../utils/constants"

const RestaurantCard=({resData})=>{
    const {name,cuisines,avgRating,sla,costForTwo,cloudinaryImageId,locality,areaName}=resData
    const styleCard={
        backgroundColor: "#f0f0f0"
} 
    return(
             <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-200 hover:bg-gray-400">
                     <img src={CDN_URL+cloudinaryImageId} 
                     alt="res-logo" className="rounded-md"/>
                     <h3 className="font-bold py-4 text-lg" style={{color:"black",textDecoration:"none"}}>{name}</h3>
                     <h4 className="font-serif" style={{color:"black",textDecoration:"none"}}>{locality === undefined ? "" : locality+","} {areaName}</h4>
                     <h4 style={{color:"black",textDecoration:"none"}}>{cuisines.join(", ")}</h4>
                     <h4 style={{color:"black",textDecoration:"none"}}>{avgRating} stars</h4>
                     <h4 style={{color:"black",textDecoration:"none"}}>{costForTwo}</h4>
                     <h4 style={{color:"black",textDecoration:"none"}}>{sla?.slaString}</h4>
             </div>
     )
}

// Higher order Component

export const withPromotedLabel =(RestaurantCard)=>{
        return (props)=>{
                return(
                        <div>
                                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
                                <RestaurantCard {...props}/>
                        </div>
                )
        }
}
export default RestaurantCard