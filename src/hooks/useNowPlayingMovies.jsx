import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { addNowPlayingMovies } from "../feature/movie/movieSlice";

const useNowPlayingMovies = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!user?.uid) {
      return navigate("/");
    }

    const fetchMovies = async () => {
      try {
        const endPoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`;
        const response = await axios.get(endPoint);
        dispatch(addNowPlayingMovies(response.data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [user, navigate, dispatch]);
};

export default useNowPlayingMovies;
