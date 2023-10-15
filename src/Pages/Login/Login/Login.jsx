import { useContext, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import loginLottie from '../../../assets/login.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseTitle from "../../../Hook/UseTitle";
import { AuthContext } from "../../../Provider/AuthProvider";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";
import Lottie from "lottie-react";

const Login = () => {
  UseTitle("Login");
  // const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [passShow, setPassShow] = useState(false);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const verifyCaptcha = (event) => {
    const valueCaptcha = event.target.value;
    if (validateCaptcha(valueCaptcha)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const { logInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //Email password
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        Swal.fire({
          showConfirmButton: false,
          timer: 2000,
          title: "Login Successful",
          icon: "success",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="grid md:grid-cols-2 items-center gap-12 px-3">
        <Lottie
          animationData={loginLottie}
          loop={true}
          className="w-full md:h-[500px]"
        />
        <div className=" border rounded-lg ">
          <div className=" text-center">
            <h1 className="text-3xl my-5 font-bold">Login</h1>
            <img
              className="w-16 mx-auto"
              src="https://i.ibb.co/NNQM1N7/image.png"
              alt=""
            />
          </div>
          <form onSubmit={handleLogIn} className="card-body">
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
                type={passShow ? "text" : "password"}
                name="password"
                placeholder="enter your password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a className="label-text-alt link link-hover">
                  <p onClick={() => setPassShow(!passShow)}>
                    <small>
                      {passShow ? (
                        <span>Hide Pass</span>
                      ) : (
                        <span>Show Pass</span>
                      )}
                    </small>
                  </p>
                </a>
              </label>
              <div className="form-control">
                <LoadCanvasTemplate />
                <input
                  type="captcha"
                  onBlur={verifyCaptcha}
                  name="captcha"
                  placeholder="Enter your captcha"
                  className="input input-bordered my-3"
                  required
                />
                {/* <button
                  onClick={verifyCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Verify
                </button> */}
              </div>
            </div>
            <div className="form-control mt-1">
              <button disabled={disabled} className="btn btn-warning">
                Login
              </button>
            </div>
          </form>
          <div className="text-center mb-7 p-5">
          <div className="divider"></div> 
            <p className="font-semibold">Or Sign In with</p>
            <div className="flex items-center justify-center gap-4 my-4">
              <SocialLogin></SocialLogin>
            </div>
            <Link to="/signUp">
              Do not have an account?{" "}
              <span className="text-yellow-700 font-bold">SignUp</span>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
