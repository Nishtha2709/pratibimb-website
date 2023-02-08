import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("user");
        localStorage.removeItem("credential");
        navigate("/");
      })
      .catch((err) => {});
  }, [navigate]);

  return (
    <div>
      <center>Signing Out, see you at Pratibimb!</center>
    </div>
  );
};

export default SignOut;
