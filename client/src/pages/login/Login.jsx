import React, { useState } from "react";
import useLogin from "../../hooks/useLogin";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };
  return (
    <div className="w-96 bg-slate-200 flex flex-col justify-center mx-auto my-10 py-4">
      <h1 className="flex justify-center text-3xl mb-4">Login</h1>
      <div>
        <form
          action=""
          className="flex flex-col justify-center items-center"
          onSubmit={handleSubmit}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            className="px-2 w-3/4 my-2 py-2 rounded-md outline-none"
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            value={password}
            className="px-2 w-3/4 my-2 py-2 rounded-md outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-gray-900 text-yellow-50 px-5 py-2 rounded-md mt-4 hover:bg-slate-600">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
