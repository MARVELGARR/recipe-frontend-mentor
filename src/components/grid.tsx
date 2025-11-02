'use client'
import useFetcher from '../../utils/fetcher';
import Card from './card';

const Grid =  () => {


    const {data, isLoaing} = useFetcher("/data.json")


    if(isLoaing) return <div className="">Loading....</div>
    
    return (
      <ul className='grid_parent'>
        {data.map((product)=>{
            return (
                <Card key={product.name} {...product}/>
            )
        })}
      </ul>
    );
}
 
export default Grid;