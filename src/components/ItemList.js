import React from 'react'
const ItemList = ({items}) => {
 
    return (
    <div>
      
        {items.map((item) => (
            <div key={item?.card?.id} className='p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between'>
            <div>
            <div className='w-9/12'>
                <span className='py-2'>{item?.card?.info?.name}</span>
                <span>-💰{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</span>
            </div>
            
            <p className='text-xs'>
            {item?.card?.info?.description}
            </p>
            </div>

            <div className='w-3/12 p-4'>
            <div className='absolute'>
            <button className='p-2 bg-black text-white shadow-lg rounded-lg mx-16 '>Add +</button>
            </div>
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item?.card?.info?.imageId}  />
            
            </div>

           

        </div>
        
    ))}
      
    </div>
  )
}

export default ItemList
