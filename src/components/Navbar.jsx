import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import auth_user from '../api/firebase-auth';

const Navbar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth_user);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-gray-800">
            TheInsaneCrudFirebase
          </Link>
          <div className="space-x-4">
            <Link to="/products" className="text-gray-600 hover:text-gray-900">
              Products
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-600 hover:text-gray-900"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;