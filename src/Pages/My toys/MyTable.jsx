const MyTable = ({myToy})=>{
    const {name, subCategory, price, quantity, email, seller, rating, photo, details} = myToy;
    return(
       <div>
          {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo}  />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{email}</td>
        <td>{seller}</td>
        <td>{rating}</td>
        <td>{details}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Update</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>

       </div>
    );
};

export default MyTable;
