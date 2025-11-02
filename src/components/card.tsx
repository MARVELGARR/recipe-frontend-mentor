import type { ApiRes } from "../../utils/fetcher";

const Card = ({...prop}:ApiRes) => {
    return (
        <li className="">
            <div className="">
                <img alt={prop.name} src={prop.image.desktop}/>
                <img alt={prop.name} src={prop.image.tablet}/>
                <img alt={prop.name} src={prop.image.mobile}/>
            </div>
            <div className="">
                <p className="">{prop.name}</p>
                <p className="">{prop.category}</p>
                <p className="">{prop.price}</p>
            </div>
        </li>
    );
}
 
export default Card;