import { useState } from "react";

const BugForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter bug title"
        className="border p-2 mr-2"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Add Bug</button>
    </form>
  );
};

export default BugForm;
