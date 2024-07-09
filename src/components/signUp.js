import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    // Process your form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>

        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-blue-500"
              type="name"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-blue-500"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-500 hover:text-blue-600">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
