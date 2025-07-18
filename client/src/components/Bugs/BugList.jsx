// client/src/components/bugs/BugList.jsx

import BugItem from "./BugItem";

const BugList = ({ bugs, onDelete }) => {
  return (
    <div>
      {bugs.length === 0 ? (
        <p className="text-gray-500">No bugs reported yet.</p>
      ) : (
        bugs.map((bug) => (
          <BugItem key={bug.id} bug={bug} onDelete={onDelete} />
        ))
      )}
    </div>
  );
};

export default BugList;
