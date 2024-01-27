import React, { useState } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import logo from "../assets/logo.svg";
import TwitterIcon from "@mui/icons-material/Twitter";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0 || password.length === 0) {
      alert("All fields must be filled");
    } else {
      navigate("/dashboard");
    }
  };
  return (
    <div className="flex  flex-col md:flex-row">
      <div className="hidden md:block bg-blue-500 w-1/2 h-screen ">
        <div className="bg-white rounded-full w-16 m-5 p-5">
          <img
            src={logo}
            height={34}
            width={34}
            className="text-white border border-white "
          />
        </div>
        <div className="text-white font-bold  text-6xl flex justify-center items-center mt-40 mb-40">
          BASE
        </div>
        <div className="flex gap-5 items- items-end text-white p-2 justify-center text-2xl">
          <GitHubIcon />

          <TwitterIcon />

          <LinkedInIcon />
          <RedditIcon />
        </div>
      </div>

      <div className=" flex p-2  gap-3 items-center md:hidden w-full  bg-blue-700 ">
        <span className=" rounded-full bg-white ">
          <img
            src={logo}
            height={34}
            width={34}
            className="text-white p-2 border-white "
          />
        </span>
        <div className="text-white font-bold">BASE</div>
      </div>

      <div class=" mx-auto ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <h1 class="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl bg">
            Sign In
          </h1>
          <p>Sign in to your account</p>
          <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between items-center">
              <div className="flex items-center border border-gray-500 m-2 rounded-lg p-3 gap-3 text-sm text-gray-500">
                <GoogleIcon />
                <p>Sign in with Google</p>
              </div>
              <div className="flex items-center border border-gray-500 rounded-lg p-3 gap-2 text-sm text-gray-500">
                <AppleIcon />
                <p>Sign in with Apple</p>
              </div>
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email adddress
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                placeholder="base@gmail.com"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                required=""
              />
            </div>

            <div className="text-blue-700 text-sm">Forgot password?</div>

            <button
              type="submit"
              class="w-full bg-blue-700 text-white bg-primary-600   font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign In
            </button>
            <div className="flex justify-center items-center">
              <p class="text-sm font-light text-gray-700 ">
                Don’t have an account yet ?
                <span class="font-medium text-blue-700  ml-2">
                  Register Here
                </span>
              </p>
            </div>
            <div className="flex gap-5 items- items-end text-gray-700 mt-2 p-2 justify-center text-2xl md:hidden">
          <GitHubIcon />

          <TwitterIcon />

          <LinkedInIcon />
          <RedditIcon />
        </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
