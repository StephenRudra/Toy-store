import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyTable from "./MyTable";


const MyToys = ()=>{
    const {user} = useContext(AuthContext);
    const [myToys, setmyToys] = useState([]);
    console.log(user)
    const url = `http://localhost:5000/MyToy?email=${user.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setmyToys(data))
    },[])
    return(
        <div>
            <h2>Mine {myToys.length}</h2>
            <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
        myToys.map(myToy => <MyTable key={myToy._id} myToy={myToy}></MyTable>)
    }
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyToys;