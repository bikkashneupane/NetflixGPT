import Header from "../layout/Header";
import MainContainer from "../component/MainContainer";
import SecondaryContainer from "../component/SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="min-h-screen w-full">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
