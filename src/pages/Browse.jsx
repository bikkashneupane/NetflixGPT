import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "../layout/Header";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="pt-24">browse</div>
    </div>
  );
};

export default Browse;
