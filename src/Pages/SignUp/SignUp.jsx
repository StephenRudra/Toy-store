import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const SignUp = ()=>{
    const{createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(name, email, password, photo)

        createUser(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset()
            navigate('/')
        })
        .catch(error => console.log(error))



    }
    return(
        <div>
<div className="hero min-h-screen bg-base-200">
  <div className="flex-col lg:flex-row-reverse">
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold">Register here</h1>
    </div>
   <form onSubmit={handleSignUp}>
   <div className="card w-96 shadow-2xl bg-base-100">
      <div className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Enter name" name="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Enter email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Enter password" name="password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input placeholder="Photo URL" name="photo" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Already have account? <Link to='/login'>Login here </Link></a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value='Sign Up' className="btn btn-primary" ></input>
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