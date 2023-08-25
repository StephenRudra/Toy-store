import { useLoaderData } from "react-router-dom";
import Rows from "./Rows";


const AllToys = ()=>{
    const Toys = useLoaderData();
    console.log(Toys)
    const {name,price} = Toys;
    return(
        <div>
            
            <div className="overflow-x-auto">
  <table className="table w-64 ml-8 mt-3">
    {/* head */}
    <thead>
      <tr className="">
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className="">Toy name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Seller</th>
      </tr>
    </thead>
    <tbody>
     {
        Toys.map(Toy => <Rows key={Toy._id} Toy={Toy}></Rows>)
     }
      
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default AllToys;