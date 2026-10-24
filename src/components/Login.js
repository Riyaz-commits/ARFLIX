import Header from "./Header";
import bgImage from "../img/netflix.jpg";

const Login = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
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
    </div>
  );
};

export default Login;