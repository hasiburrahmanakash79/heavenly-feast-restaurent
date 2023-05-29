import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {signUpUser} = useContext(AuthContext)

  const handleSignUp = (event) =>{
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    signUpUser(email, password)
    .then(result =>{
      const loggedUser = result.user
      navigate(from, { replace: true });
      console.log(loggedUser);
      Swal.fire({
        showConfirmButton: false,
        timer: 2000,
        title: "Login Successful",
        icon: "success",
      });
      form.reset()
    })
    .catch(error => setError(error.message))
  }

  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
        <div className=" text-center">
          <h1 className="text-3xl my-5 font-bold">SignUp</h1>
          <img className="w-16 mx-auto" src="https://i.ibb.co/NNQM1N7/image.png" alt="" />
          </div>
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-1">
              <button className="btn btn-warning">Sign Up</button>
            </div>
            <p className="text-red-600">{error}</p>
          </form>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-blue-600 font-bold">LogIn</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
