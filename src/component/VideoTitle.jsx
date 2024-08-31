const VideoTitle = ({ title, overview }) => {
  return (
    <div className="relative flex flex-col justify-center min-h-full px-16 w-[500px] gap-5 text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-5xl">{title}</h1>
      <p className="text-justify">{overview}</p>
      <div className="space-x-2">
        <button className="px-12 py-3 rounded bg-gray-100 text-black font-bold text-lg hover:bg-gray-200 transition">
          Play
        </button>
        <button className="px-12 py-3 rounded bg-gray-500 bg-opacity-80 font-bold text-lg hover:bg-gray-400 transition">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
