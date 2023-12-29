import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7">Sign-Up</h1>
      <form className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          placeholder="Username"
          type="text"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="Email"
          type="email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="Password"
          type="password"
          id="password"
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg
           uppercase hover:opacity-90 disabled:opacity-80"
          type="submit"
        >
          Sign-Up
        </button>
      </form>
      <p className="flex gap-2 mt-5">
        Already have a account?
        <Link
          className="text-blue-700 font-bold hover:opacity-95"
          to={"/sign-In"}
        >
          Sign-In
        </Link>
      </p>
    </div>
  );
}
