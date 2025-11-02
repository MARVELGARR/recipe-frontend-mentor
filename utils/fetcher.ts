import { useEffect, useState } from "react"
type category = "Waffle" | "Crème Brûlée" | "Macaron" | "Tiramisu" | "Baklava" | "Pie" | "Cake" | "Brownie" | "Panna Cotta"
export type  ApiRes =    {
       image: {
            thumbnail: string,
            mobile: string,
            tablet: string,
            desktop: string
       },
       name: string,
       category: category,
       price: number
    }

const persistaer = {
    set: <T> (key: string, value: T) =>{
        localStorage.setItem(key, JSON.stringify(value))
    },
    get: (key: string)=>{
        const data = localStorage.getItem(key)

        return data ? JSON.parse(data) : null
    }
}


const useFetcher = (route: string) => {

    const [data, setData] = useState<ApiRes[]>(persistaer.get("data"))
    const [isLoaing, setIsLoading] = useState(false)
    


    useEffect(()=>{
        const fetchData = async ()=>{
            setIsLoading(true)
            await fetch(route)
            .then((res)=>res.json())
            .then((result)=>{
                setData(result)
                persistaer.set("data", result)
            })
            .catch((error)=> console.error(error))
            .finally(()=>setIsLoading(false))

        }
        if(!data){

            fetchData()
        }
    },[data])
    return {data, isLoaing};
}
 
export default useFetcher;