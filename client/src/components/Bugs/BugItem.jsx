// client/src/components/bugs/BugItem.jsx

const BugItem = ({ bug, onDelete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded shadow mb-2">
      <span className="text-gray-800">{bug.title}</span>
      <button
        onClick={() => onDelete(bug.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default BugItem;
