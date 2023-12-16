import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SocialLogin = () => {


  // googleLogin
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const signInUser = result.user;
        const userInfo = {
          name: signInUser.displayName,
          email: signInUser.email,
        };
        fetch("https://heavenly-feast-server.vercel.app/users", {
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
        <img src="https://logos-marques.com/wp-content/uploads/2021/03/Nouveau-logo-Google.png" alt="" className="w-20" />
      </button>
    </div>
  );
};

export default SocialLogin;
