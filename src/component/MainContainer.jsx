import VideBackground from "./VideBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { nowPlayingMovies } = useSelector((state) => state.movies);
  if (nowPlayingMovies?.length === 0) return;

  const mainMovie = nowPlayingMovies[0];
  console.log(mainMovie);

  return (
    <div className="h-screen relative bg-yellow-200">
      <VideBackground movieId={mainMovie?.id} />
      <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
    </div>
  );
};

export default MainContainer;
