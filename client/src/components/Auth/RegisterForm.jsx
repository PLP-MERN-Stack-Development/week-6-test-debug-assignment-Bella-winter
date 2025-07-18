import { useState } from "react";

const RegisterForm = ({ onRegister }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ username });
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2 w-full"
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
