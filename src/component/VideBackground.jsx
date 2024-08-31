import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const { trailerVideo } = useSelector((state) => state.movies);

  return (
    <div className="w-full h-full absolute bg-yellow-200">
      <iframe
        className="w-full h-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&vq=hd1080`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideBackground;
