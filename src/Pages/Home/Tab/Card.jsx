import { Link, useLoaderData } from "react-router-dom";


const Card = ({toy})=>{
    //const toy = useLoaderData();
    const {name, price, photo, details, _id} = toy;
    console.log(name)
    console.log(toy)
    return(
        <div>

<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} className="w-3/4" /></figure>
  <div className="card-body">
    <h2 className="card-title">Toy name: {name}</h2>
    <h2 className="card-title">${price}</h2>
    <p>Short description:{details}</p>
    <div className="card-actions justify-end">
        <Link to={`/details/${_id}`}>
        <button className="btn btn-primary">View Details</button>
        </Link>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;