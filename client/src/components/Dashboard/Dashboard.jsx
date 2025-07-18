// client/src/components/Dashboard.jsx

const Dashboard = () => {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Dashboard</h2>
      <p className="text-gray-700">
        Welcome to the Bug Tracker Dashboard. Here, you can view system stats, recent bug reports, and manage your projects.
      </p>

      {/* Example dashboard cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Total Bugs</h3>
          <p className="text-3xl font-bold text-red-500">24</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">Resolved</h3>
          <p className="text-3xl font-bold text-green-500">15</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h3 className="text-lg font-semibold">In Progress</h3>
          <p className="text-3xl font-bold text-yellow-500">6</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
