'use client'
import useFetcher from '../../utils/fetcher';
import Card from './card';

const Grid =  () => {


    const {data, isLoaing} = useFetcher("/data.json")


    if(isLoaing) return <div className="">Loading....</div>
    
  
    return (
      <ul className='grid_parent'>
        {data.map((product,index)=>{
          const EditedData = {...product, id: index}
            return (
                <Card key={index} {...EditedData }/>
            )
        })}
      </ul>
    );
}
 
export default Grid;