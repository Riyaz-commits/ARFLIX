import Header from "./Header";
import bgImage from "../img/netflix.jpg";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />
      {/* Floating Header */}
      <Header />

      {/* Fullscreen Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={bgImage}
          alt="Netflix Background"
          className="h-full w-full object-cover"
        />
        {/* Dark overlay for Netflix style */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-65">
        <h1 className="font-bold to-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700"
          />
        )}

        <input
          type="text"
          placeholder="Email Adress"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          type="text"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 w-full bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
