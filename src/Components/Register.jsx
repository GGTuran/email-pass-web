import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const Register = () => {

    const { createUser } = useContext(AuthContext);

    const register = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);
        // GG
        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })
    }
  return (
    <div className="hero  min-h-screen bg-base-200">
      <div className="hero-content flex-col  ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
         
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={register} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Say my name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="m-2 p-2">If you already have an account <Link to="/login"><button className="btn btn-ghost">login </button></Link> </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
