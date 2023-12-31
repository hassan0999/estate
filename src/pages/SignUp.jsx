import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import OAuth from "../component/OAuth";
export default function SignUp() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("server/signUp", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data);
    nav("/Sign-in");
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold m-7">Sign-Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border p-3 rounded-lg"
          placeholder="Username"
          type="text"
          id="username"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="Email"
          type="email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg"
          placeholder="Password"
          type="password"
          id="password"
          onChange={handleChange}
        />
        <button
          className="bg-slate-700 text-white p-3 rounded-lg
           uppercase hover:opacity-90 disabled:opacity-80"
          type="submit"
        >
          Sign-Up
        </button>
        <OAuth />
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
