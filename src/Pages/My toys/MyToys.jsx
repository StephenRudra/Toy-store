import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyTable from "./MyTable";


const MyToys = ()=>{
    const {user} = useContext(AuthContext);
    const [myToys, setmyToys] = useState([]);
    console.log(user)
    const url = `https://toy-server-tawny.vercel.app/MyToy?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setmyToys(data))
    },[])

    const handleDelete = id =>{
        const proceed = confirm("You sure you want to remove it?!")
        if(proceed){
            fetch(`https://toy-server-tawny.vercel.app/MyToy/${id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Deletion Completed Succesfully')
                    const remaining = myToys.filter(myToy => myToy._id !==id);
                    setmyToys(remaining);
                }
            })

        }
    }
    return(
        <div>
            <div className="overflow-x-auto w-full mt-5 mb-5">
  <table className="table w-80">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Toy name</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Email</th>
        <th>Seller name</th>
        <th>Ratings</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
    {
        myToys.map(myToy => <MyTable key={myToy._id} myToy={myToy} handleDelete={handleDelete}></MyTable>)
    }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;