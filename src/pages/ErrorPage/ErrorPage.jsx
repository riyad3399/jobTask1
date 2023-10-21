import { Link } from "react-router-dom";
import errorImg from '../../assets/error.jpg'

const ErrorPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <img className="object-cover w-[50%] mx-auto" src={errorImg} alt="error" />
        <h1 className="text-4xl text-gray-700 font-bold">404 - Not Found</h1>
        <p className="text-lg text-gray-600">
          The requested page does not exist.
        </p>
        <Link to='/' className="text-blue-600 font-semibold hover:underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
