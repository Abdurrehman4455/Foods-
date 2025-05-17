import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-8">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Login to Foodie Delight
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              placeholder="Your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="inline-flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-orange-500 focus:ring-orange-400"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-semibold text-orange-600 hover:text-orange-800"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-bold rounded-md hover:bg-orange-700 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a
            href="#"
            className="font-semibold text-orange-600 hover:text-orange-800"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}

export default Login;
