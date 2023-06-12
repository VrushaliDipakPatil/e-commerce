import React, { useState } from "react";
import bcrypt from 'bcryptjs';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "../../node_modules/react-router-dom/dist/index";
import { useDispatch } from "../../node_modules/react-redux/es/exports";
import { addUser } from "../redux/ReduxSlice";

const Login = () => {
const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const saltRounds = 10; // The number of salt rounds for hashing (can be adjusted based on security requirements)

    try {
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const userData = {
        name,
        email,
        hashedPassword,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      dispatch(addUser(userData))
      navigate('/');
    } catch (error) {
      console.error('Error encrypting password:', error);
    }
  };
 

  return (
    <>

<div className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-black">
      <div className="relative">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
        ></div>
        <div className="relative bg-white p-8 rounded-lg shadow-lg z-20">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <label htmlFor="password" className="block font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent border border-gray-300 rounded-md p-2"
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
              >
                Register
              </button>
              <button
                type="button"
                // onClick={onClose}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-md ml-4"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
   
    </>
  );
};

export default Login;
