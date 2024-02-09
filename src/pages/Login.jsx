import React, { useEffect, useState } from "react";
import loginImg from "../assets/auth_logo.png";
import SiginWith from "../components/SiginWith";
import { signinwith } from "../../fakedata";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

function Login() {
  const [token, setToken] = useState();
  const [profile, setProfile] = useState();

  const onGoogleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => setToken(tokenResponse.access_token),
  });

  useEffect(() => {
    if (token) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  const onAppleLogin = () => {};

  return (
    <div className="">
      <img
        className="absolute left-0 sm:bottom-[-300px] sm:block   object-cover xsm:hidden w-[1100px] h-[800px]"
        src={loginImg}
        alt=""
      />
      <h1 className="text-3xl font-semibold text-center mt-[80px]">
        Get Personalized news stories everyday.
        <br />
        Create a free account now.
      </h1>
      <div className="w-full flex justify-center items-center flex-col gap-5 mt-10 ">
        {signinwith.map((item) => {
          return (
            <SiginWith
              key={item.id}
              item={item}
              onClick={
                item.title.toLowerCase() === "sign in with google"
                  ? onGoogleLogin
                  : onAppleLogin
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default Login;
