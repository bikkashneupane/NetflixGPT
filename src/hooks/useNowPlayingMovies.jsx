import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../feature/movie/movieSlice";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
          API_OPTIONS
        );

        const data = await response.json();

        dispatch(addNowPlayingMovies(data.results));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, [user, navigate, dispatch]);
};

export default useNowPlayingMovies;
