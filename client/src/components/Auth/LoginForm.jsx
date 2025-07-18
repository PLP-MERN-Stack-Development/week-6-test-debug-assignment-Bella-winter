import { useState } from "react";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ username });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
};

export default LoginForm;
