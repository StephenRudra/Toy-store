import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { CgProfile } from "react-icons/Cg";

const Nav = ()=>{

  const {user, logOut} = useContext(AuthContext);
  const handleLogOut= ()=>{
    logOut()
    .then(()=>{})
    .catch(error=> console.log(error))
  }
  const Items = <>
 
  <li><Link to='/'>Home</Link></li>
  <li><Link to='/all'>All Toys</Link></li>
  <li><Link to='/blog'>Blog</Link></li>
  { user?.email? <><li><Link to='/add'>Add Toy</Link></li>
  <li><button onClick={handleLogOut} >Sign Out</button></li>
  <li className="w-10 bg-info"><CgProfile></CgProfile></li>
  </>
  :<li><Link to='/login'>Login</Link></li>}
  <li><Link to='/sign'>Sign Up</Link></li>
  
    <li><Link to="/mytoys">My Toys</Link></li>
  </>
    return(
      
        <div>
            <div className="navbar bg-red-400">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
        
       {Items}
      </ul>
    </div>
    <a className="normal-case text-3xl text-white"><span className="text-amber-300">Toy </span> Heaven </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
     {Items}
    </ul>
  </div>
  <div className="navbar-end">
    
  </div>
</div>
        </div>
    );
};

export default Nav;