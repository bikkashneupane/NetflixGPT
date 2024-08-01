import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../layout/Header";

const Browse = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    !user?.uid && navigate("/");
  }, [user, navigate]);

  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="pt-24">browse</div>
    </div>
  );
};

export default Browse;
