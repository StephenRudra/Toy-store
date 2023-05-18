import { Link } from "react-router-dom";


const SignUp = ()=>{
    return(
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="flex-col lg:flex-row-reverse">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Register here</h1>
    </div>
   <form>
   <div className="card w-96 shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input placeholder="Photo URL" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Already have account? <Link to='/login'>Login here </Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </div>
    </div>
   </form>
  </div>
</div>
        </div>
    );
};

export default SignUp;