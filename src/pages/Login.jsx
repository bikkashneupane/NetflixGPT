import Header from "../layout/Header";

const Login = () => {
  return (
    <div
      className=""
      style={{
        background:
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/f2fe4463-6b37-4e82-93e5-843b55351424/AU-en-20240624-popsignuptwoweeks-perspective_alpha_website_medium.jpg')",
      }}
    >
      <div className="absolute w-full h-full bg-black opacity-50"></div>

      <Header />

      <div className=" flex justify-center items-center relative min-h-screen">
        <form className="max-w-[440px] min-h-[700px] p-12 bg-black text-white bg-opacity-70 rounded">
          <h1 className="text-3xl font-bold py-4">Sign In</h1>
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-4 my-4 rounded bg-gray-700 border-spacing-px border-white"
            style={{ border: "0.5px solid white" }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 my-4 rounded bg-gray-700"
          />
          <button className="w-full p-4 my-6 bg-red-500 rounded">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
