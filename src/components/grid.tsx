'use client'
import { useEffect, useState } from "react";

const Grid =  () => {


    const [data, setData] = useState([])
    const [isLoaing, setIsLoading] = useState(false)


    useEffect(()=>{
        const fetchData = async ()=>{
            setIsLoading(true)
            await fetch("/data.json")
            .then((res)=>res.json())
            .then((result)=>setData(result))
            .catch((error)=> console.error(error))
            .finally(()=>setIsLoading(false))

        }
        fetchData()
    },[])

    if(isLoaing) return <div className="">Loading</div>
    
    return (
        <div className="">{JSON.stringify(data)}fdfdf</div>
    );
}
 
export default Grid;