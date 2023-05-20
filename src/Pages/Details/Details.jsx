import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = ()=>{
   {/* const [toys, setToys] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/toys")
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error => console.log(error))
        console.log(toys.name)
      }, [])*/}
    const toy = useLoaderData();
    //const {name, _id, price} = toy;
    const id = useParams();
    console.log(id)
    
    return(
        <div>
<h2>Details </h2>
        </div>
    );
};

export default Details;