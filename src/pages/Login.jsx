import { useEffect, useRef, useState } from "react";
import Header from "../layout/Header";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";

const Login = () => {
  const [errMessage, setErrMessage] = useState(null);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    user?.uid && navigate("/browse");
  }, [navigate, user]);

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    // Validate the form data
    const validateMessage = checkValidData(email, password);
    setErrMessage(validateMessage);
    if (validateMessage) return;

    // sign in login
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      const { code, message } = error;
      console.log(code, "-", message);
      setErrMessage(message);
    }
  };

  return (
    <div
      style={{
        background: `url(${LOGO_URL})`,
      }}
    >
      <Header />
      <div className="absolute w-full h-full bg-black opacity-40"></div>

      <div className="relative flex justify-center min-h-screen">
        <div className="absolute bg-black opacity-20 min-h-full min-w-full"></div>
        <form
          onSubmit={handleButtonClick}
          className="relative max-w-md h-[600px] px-12 mt-32 py-8 bg-black bg-opacity-60 text-white rounded-md shadow-lg flex flex-col gap-5 w-full"
        >
          <h1 className="text-3xl font-bold py-4">Sign In </h1>

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
            Sign In
          </button>

          <p className="px-1">
            <span className="text-gray-400">New to Netlix? </span>
            <Link to={"/signup"} className="cursor-pointer hover:underline">
              Sign up now.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
