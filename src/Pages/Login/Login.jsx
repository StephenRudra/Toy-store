import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Login=()=>{

    const {signIn} = useContext(AuthContext)

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

       signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))



    }
    return(
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold ml-12">Login now!</h1>
      
    </div>
   <form onSubmit={handleLogin}>
   <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" name="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value='Login' className="btn btn-primary"></input>
        </div>
      </div>
      </div>
   </form>
   
  </div>
</div>

        </div>
    );
};

export default Login;