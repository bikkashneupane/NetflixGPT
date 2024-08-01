import { useRef, useState } from "react";
import Header from "../layout/Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const toggleSigninForm = () => {
    setSignIn(!isSignIn);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();

    // Validate the form data
    const validateMessage = checkValidData(
      emailRef.current.value,
      passwordRef.current.value
    );

    validateMessage && setErrMessage(validateMessage);
  };

  return (
    <div
      className=""
      style={{
        background:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/f2fe4463-6b37-4e82-93e5-843b55351424/AU-en-20240624-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      <Header />

      <div className="relative flex justify-center items-center min-h-screen">
        <div className="absolute bg-black opacity-20 min-h-full min-w-full"></div>
        <form
          onSubmit={handleButtonClick}
          className="relative max-w-md min-h-[600px] px-12 py-8 bg-black bg-opacity-60 text-white rounded-md shadow-lg flex flex-col gap-5 w-full"
        >
          <h1 className="text-3xl font-bold py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded bg-black bg-opacity-60 border-gray-500 border focus:outline-none focus:ring-2 focus:ring-white"
            />
          )}
          <input
            ref={emailRef}
            type="text"
            placeholder="Email Address"
            className="w-full p-4 rounded bg-black bg-opacity-60 border-gray-500 border focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded bg-black bg-opacity-60 border-gray-500 border focus:outline-none focus:ring-2 focus:ring-white"
          />

          {errMessage && (
            <p className="px-1 text-red-700 font-bold">{errMessage}</p>
          )}
          <button className="w-full py-3 px-6 bg-red-700 rounded" type="submit">
            {isSignIn ? `Sign In` : `Sign Up`}
          </button>

          <p className="px-1">
            <span className="text-gray-400">
              {isSignIn ? `New to Netlix? ` : `Already have an account? `}
            </span>
            <span
              className="cursor-pointer hover:underline"
              onClick={toggleSigninForm}
            >
              {isSignIn ? `Sign up now.` : `Login now.`}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
