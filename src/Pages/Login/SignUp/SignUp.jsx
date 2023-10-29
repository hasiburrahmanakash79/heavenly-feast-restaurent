import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../../../Hook/UseTitle";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";
import loginLottie from "../../../assets/login.json";

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

    signUpUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
        console.log(loggedUser);

        updateUserInfo(name, photo)
          .then(() => {
            const userInfo = { name: name, email: email, role: "user" };
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
    <div className="hero min-h-screen container mx-auto">
      <div className="grid md:grid-cols-2 items-center px-3">
        <Lottie
          animationData={loginLottie}
          loop={true}
          className="w-full md:h-[500px]"
        />
        <div className="border rounded-lg shadow-xl">
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
            <div className="form-control mt-1 grid grid-cols-3 ">
              <button className="btn btn-warning col-span-2">Sign Up</button>
              <div className="flex items-center justify-center gap-4 my-4 col-span-1">
                <SocialLogin></SocialLogin>
              </div>
            </div>
            <p className="text-red-600">{error}</p>
          </form>
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
