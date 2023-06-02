import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // googleLogin
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const signInUser = result.user;
        const userInfo = {
          name: signInUser.displayName,
          email: signInUser.email,
        };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
            Swal.fire({
              showConfirmButton: false,
              timer: 2000,
              title: "Login Successful",
              icon: "success",
            });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={() => handleGoogleLogin()}>
        <img src="https://i.ibb.co/KjQdbSD/image.png" alt="" className="w-6" />
      </button>
    </div>
  );
};

export default SocialLogin;
