import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  bg-blue-300">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
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
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
