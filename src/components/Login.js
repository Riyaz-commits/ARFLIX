import Header from "./Header";
import bgImage from "../img/netflix.jpg";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null)
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value)
    console.log(email.current.value + "" + password.current.value + "" + message)
    setErrorMessage(message)

    if (message) return;

    if (!isSignInForm) {
     
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up successfully (user is automatically signed in)
            const user = userCredential.user;
            console.log("Registered user:", user.uid);
          })
          .catch((error) => {
            console.error("Sign-up error:", error.code, error.message);
            setErrorMessage(error.code + "-" + error.message)
          });
      }
    
    else {
      //signin logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log("Signed in user:", user.uid);
          })
          .catch((error) => {
            console.error("Sign-in error:", error.code, error.message);
  setErrorMessage(error.code + "-" + error.message)
          });
      };
    
  }
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

      <form onSubmit={(e) => e.preventDefault()}
       className="w-11/12 sm:w-8/12 md:w-5/12 lg:w-3/12 absolute p-6 md:p-12 bg-black/80 my-24 md:my-36 mx-auto right-0 left-0 text-white rounded-lg">
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
          ref={email}
          type="text"
          placeholder="Email Adress"
          className="p-2 my-2 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700"
        />
        <p className="text-red-600 font-bold"
        >{errorMessage}</p>
        <button className="p-4 my-4 w-full bg-red-700" onClick={handleButtonClick}>
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
