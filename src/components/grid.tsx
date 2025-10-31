'use client'
import useFetcher from '../../utils/fetcher';
import Card from './card';

const Grid =  () => {


    const {data, isLoaing} = useFetcher("/data.json")


    if(isLoaing) return <div className="">Loading....</div>
    
    return (
      <ul className=''>
        {data.map((product)=>{
            return (
                <Card {...product}/>
            )
        })}
      </ul>
    );
}
 
export default Grid;