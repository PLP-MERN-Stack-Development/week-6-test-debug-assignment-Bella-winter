import LoginForm from "../components/Auth/LoginForm";

const Login = ({ onLogin }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Login;
