import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

const AdminCartPage = () => {
  const { auth } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [cartData, setCartData] = useState(null);
  const [error, setError] = useState('');

  const handleFetchCart = async () => {
    try {
      const res = await axios.get(`/api/admin/cart/${email}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`
        }
      });
      setCartData(res.data);
      setError('');
    } catch (err) {
      setCartData(null);
      setError(err.response?.data?.message || 'Error fetching cart');
    }
  };

  if (!auth.user?.admin) {
    return <div className="p-4 text-red-600 font-semibold">Access denied: Admins only</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin: View User Cart</h2>
      
      <div className="flex gap-2 mb-4">
        <input
          type="email"
          value={email}
          placeholder="Enter user email"
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        />
        <button
          onClick={handleFetchCart}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Cart
        </button>
      </div>

      {error && <p className="text-red-600 mb-4">{error}</p>}

      {cartData && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Products in Cart:</h3>
          <ul className="space-y-2">
            {cartData.products.map((item, idx) => (
              <li key={idx} className="border p-3 rounded shadow-sm">
                <p><strong>Name:</strong> {item.productId.name}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminCartPage;
