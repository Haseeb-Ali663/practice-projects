import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2 className='text-lg font-bold '>Login</h2>
      <input
        className='border-2 border-gray-800 rounded-lg shadow-lg p-2 m-2 bg-gray-200 shadow-gray-500'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type='text'
        placeholder='username'
      />
      <input
        className='border-2 border-gray-800 rounded-lg shadow-lg p-2 m-2 bg-gray-200 shadow-gray-500'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type='password'
        placeholder='password'
      />
      <button
        onClick={handleSubmit}
        className='mt-2 p-2 bg-blue-500 text-white rounded'>
        Submit
      </button>
    </div>
  );
};

export default Login;
