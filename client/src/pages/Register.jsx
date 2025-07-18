import RegisterForm from "../components/Auth/RegisterForm";

const Register = ({ onRegister }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <RegisterForm onRegister={onRegister} />
      </div>
    </div>
  );
};

export default Register;
