import { Link } from "react-router-dom";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Button } from "@/components/ui/button";
const Login = () => {
  return (
    <section className="flex flex-row min-h-full gap-5 backdrop-blur-xs bg-black/5">
      <section className="relative min-h-screen flex justify-center overflow-hidden w-full max-w-3xl">
        <div className="absolute inset-0 bg-[url(/assets/logo-1.png)] bg-center bg-cover bg-no-repeat"></div>
        <div className="absolute inset-0 backdrop-blur-xs bg-black/5"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/15 rounded-full blur-lg animate-bounce-gentle"></div>
      </section>

      <div className="flex flex-col items-center w-full px-3">
        <div className="">
          <img
            src="/assets/logo.png"
            alt="JB-Tracker logo"
            className="w-38 h-30"
          />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-black">Login</h2>

          <p className="text-sm text-gray-600  500 mt-3">
            Don't have an account?{" "}
            <Link
              to="/auth"
              className="text-[rgb(var(--primary))]  font-semibold hover:underline"
            >
              Register
            </Link>
          </p>
          <form className="flex flex-col space-y-4 pt-8">
            <div>
              <label className="block text-[13px] font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full mt-2 px-3 py-2 border placeholder:text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mold-greeen"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full mt-2 px-3 py-2 pr-12 border placeholder:text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mold-green"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-[13px] font-medium text-gray-600"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="w-full mt-2 px-3  py-2 pr-12 border placeholder:text-xs border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mold-green"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[rgb(var(--primary))] text-white py-6 px-2 rounded-lg font-semibold hover:bg-hover-[rgb(var(--secondary))] transition-colors duration-300"
            >
              Sign In
            </Button>
          </form>
          <div className="relative flex items-center justify-between my-4 w-full">
            <span className="absolute left-0 w-full border-t max-w-34"></span>
            <span className="px-2 text-gray-400 text-sm absolute translate-x-34">
              Or
            </span>
            <span className="absolute right-0 w-full border-t max-w-34"></span>
          </div>
          <p className="text-sm">Sign In With</p>

          <div className="w-full flex flex-row items-center justify-center gap-8 my-5">
            <button className="w-full flex flex-col items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-200 hover:cursor-pointer">
              <FaApple className="text-xl mr-3" />
            </button>
            <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-3 hover:bg-gray-200 hover:cursor-pointer">
              <FaGoogle className="text-xl mr-3 text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
