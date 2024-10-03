import React, { useEffect, useState } from 'react'
import { MENU_API } from './constants'

const useRestaurantMenu = (resId) => {
    
    const [resInfo,setResInfo]= useState([])

    const fetchMenu = async()=>{
        const resposnse = await fetch(MENU_API + resId)
        const json = await resposnse.json()

        setResInfo(json)
        
    }
    useEffect(()=>{
        fetchMenu()
    },[])
  
    return resInfo;
}

export default useRestaurantMenu
