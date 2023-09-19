import { Link } from 'react-router-dom';
import error_pic from '../../assets/error_pic.jpg';
const PageNotFound = () => {
  return (
    <div className="container mx-auto max-w-4xl font-Montserrat ">
      <h1 className="text-3xl p-6">Page not Found</h1>
      <img className="max-w-lg p-5 " src={error_pic} alt="page not found" />
      <Link
        to="/"
        className="text-xl  font-semibold underline  text-blue hover:text-green"
      >
        Click to Home page
      </Link>
    </div>
  );
};

export default PageNotFound;
