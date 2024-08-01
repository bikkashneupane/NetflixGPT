import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Browse from "./pages/Browse";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "./feature/user/userSlice";
import { auth } from "./utils/firebase";
import { useDispatch } from "react-redux";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

function App() {
  const dispatch = useDispatch();

  // onAuthStateChanged => firebase
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
