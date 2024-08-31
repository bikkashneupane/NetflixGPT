import { API_OPTIONS } from "../utils/constants";
import { setTrailerVideo } from "../feature/movie/movieSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fetch movie trailer
  useEffect(() => {
    const apiEndPoint = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;
    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(apiEndPoint, API_OPTIONS);
        const data = await response.json();

        const trailer = data?.results?.filter(
          (item) => item.type === "Trailer"
        )[0];

        console.log(trailer);

        dispatch(setTrailerVideo(trailer));
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieTrailer();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;
