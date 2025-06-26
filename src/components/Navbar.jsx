import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(auth)

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <img
          src="https://source.unsplash.com/random/40x40?logo"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-xl font-semibold text-gray-800">StoreApp</span>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center">
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}>Contact</NavLink>

        {auth.isAuthenticated ? (
          <>
            <NavLink to="/cart" className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition">
              Cart
            </NavLink>

            {/* Admin-only Link */}
            {auth.user?.admin && (
              <NavLink to="/admin-cart" className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition">
                Admin Cart
              </NavLink>
            )}

            <button
              onClick={handleLogout}
              className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition">
              Login
            </NavLink>
            <NavLink to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
