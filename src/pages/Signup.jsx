import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../layout/Header";
import { useDispatch } from "react-redux";
import { addUser } from "../feature/user/userSlice";
import { LOGO_URL, PHOTO_URL } from "../utils/constants";

const Signup = () => {
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleButtonClick = async (e) => {
    e.preventDefault();
    const name = nameRef?.current?.value || null;
    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    // Validate the form data
    const validateMessage = checkValidData(email, password);
    setErrMessage(validateMessage);
    if (validateMessage) return;

    // signup logic
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(user);

      //update profile
      updateProfile(user, {
        displayName: name,
        photoURL: PHOTO_URL,
      })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          // Profile Updated
          dispatch(addUser({ uid, email, displayName, photoURL }));
          //navigate to login page
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      const { code, message } = error;
      console.log(code, message);
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
          <h1 className="text-3xl font-bold py-4">Sign Up</h1>

          <input
            ref={nameRef}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded bg-black bg-opacity-60 border-gray-500 border focus:outline-none focus:ring-2 focus:ring-white"
          />

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
            Sign Up
          </button>

          <p className="px-1">
            <span className="text-gray-400">Already have an account? </span>
            <Link to={"/"} className="cursor-pointer hover:underline">
              Login now.
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
