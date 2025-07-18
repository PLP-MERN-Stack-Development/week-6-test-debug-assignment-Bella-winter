import BugForm from "../components/Bugs/BugForm";
import BugList from "../components/Bugs/BugList";
import { useState } from "react";

const BugListPage = () => {
  const [bugs, setBugs] = useState([]);

  const handleAddBug = (bug) => {
    setBugs((prev) => [...prev, { ...bug, id: Date.now() }]);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Bug List</h2>
      <BugForm onSubmit={handleAddBug} />
      <BugList bugs={bugs} />
    </div>
  );
};

export default BugListPage;
