const Rows = ({Toy})=>{
    const {name,price, subCategory, quantity,seller, photo}=Toy;
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
              <div className="mask mask-squircle w-14 h-14">
                <img src={photo} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              
            </div>
          </div>
        </td>
        <td>
          
          <br/>
          
        </td>
        <td className="font-medium">{subCategory}</td>
        <td className="font-medium"> $ {price}</td>
        <td className="font-medium"> {quantity} pieces</td>
        <td className="font-medium"> {seller}</td>
        <th className="font-medium">
          <button className="btn btn-primary btn-xs">details</button>
        </th>
      </tr>
        </div>
    );
};

export default Rows;