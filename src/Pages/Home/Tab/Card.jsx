import { useLoaderData } from "react-router-dom";


const Card = ({toy})=>{
    //const toy = useLoaderData();
    const {name, price, photo, details} = toy;
    console.log(name)
    console.log(toy)
    return(
        <div>
<h2></h2>
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={photo} /></figure>
  <div className="card-body">
    <h2 className="card-title">Toy name: {name}</h2>
    <h2 className="card-title">${price}</h2>
    <p>Short description:{details}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;