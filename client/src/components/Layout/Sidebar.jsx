// client/src/components/layout/Sidebar.jsx

import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const linkClasses = (path) =>
    `block py-2 px-4 rounded ${
      location.pathname === path ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r p-4">
      <nav className="space-y-2">
        <Link to="/dashboard" className={linkClasses("/dashboard")}>
          📊 Dashboard
        </Link>
        <Link to="/bugs" className={linkClasses("/bugs")}>
          🐛 Bugs
        </Link>
        <Link to="/profile" className={linkClasses("/profile")}>
          👤 Profile
        </Link>
        <Link to="/" className={linkClasses("/")}>
          🚪 Logout
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
