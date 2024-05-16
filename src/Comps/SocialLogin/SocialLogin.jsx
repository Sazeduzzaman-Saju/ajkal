import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
const SocialLogin = () => {
  const [userGoogleLoginData, setUserGoogleLoginData] = useState([]);
  console.log(userGoogleLoginData, "userGoogleLoginData");
  return (
    <div>
      <div className="row py-2">
        <div className="col-lg-10 offset-lg-1 mx-auto">
          <div className="d-flex justify-content-center align-items-center pb-2">
            <div className="pe-2">
              <GoogleLogin
                className="submit-btn-one w-100"
                onSuccess={(credentialResponse) => {
                  var credentialResponseDecode = jwtDecode(
                    credentialResponse.credential
                  );
                  setUserGoogleLoginData(credentialResponseDecode);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
            <div className="pe-2">
              <GoogleLogin
                className="submit-btn-one w-100"
                onSuccess={(credentialResponse) => {
                  var credentialResponseDecode = jwtDecode(
                    credentialResponse.credential
                  );
                  setUserGoogleLoginData(credentialResponseDecode);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
            </div>
          </div>
          <p className="text-center bg-light devider-text">Or</p>
          <p className="devider"></p>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
