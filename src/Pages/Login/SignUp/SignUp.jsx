import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../../../Hook/UseTitle";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  UseTitle("SignUp");

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const { signUpUser, updateUserInfo } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    console.log(name, email, password, photo);

    signUpUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);

        updateUserInfo(name, photo)
          .then((getImage) => {
            const currentUser = result.user;
            console.log(getImage, currentUser);

            const userInfo = { name: name, email: email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  navigate(from, { replace: true });
                  Swal.fire({
                    showConfirmButton: false,
                    timer: 2000,
                    title: "Login Successful",
                    icon: "success",
                  });
                }
              });
          })
          .catch((error) => setError(error.message));
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="hero min-h-screen">
      <div className="md:flex justify-between items-center gap-12 px-3">
        <div className="md:w-1/2">
          <img src="https://i.ibb.co/jDMz1bj/login-page-banner.png" alt="" />
        </div>
        <div className="md:w-1/2 border rounded-lg bg-base-100">
          <div className=" text-center">
            <h1 className="text-3xl my-5 font-bold">SignUp</h1>
            <img
              className="w-16 mx-auto"
              src="https://i.ibb.co/NNQM1N7/image.png"
              alt=""
            />
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
          <div className="p-5 text-center">
            <div className="divider"></div>
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-4">
              <SocialLogin></SocialLogin>
            </div>
          </div>
          <div className="text-center mb-7">
            <Link to="/login">
              Have an account?{" "}
              <span className="text-yellow-700 font-bold">LogIn</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
