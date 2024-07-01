import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   navigate('/home');
  };

  return (
    <>
      <div className="h-screen flex">
        {/* Left side */}
        <div className="w-1/2 bg-gray-100 flex flex-col justify-end items-center p-8">
          <div className="max-w-md mb-24">
            <h1 className="text-3xl mb-14">
              <span className="text-blue-600 underline underline-offset-8">fin</span>
              <span className="text-gray-500 no-underline">kraft.</span>
            </h1>
            <h2 className="text-4xl font-semibold text-gray-900 mb-6">Start your <br /> journey with us</h2>
            <p className="text-lg font-semibold text-gray-700 mb-2">Seamless onboarding</p>
            <p className="text-gray-800 mb-4">Discover the oasis of reconciliation, where efficiency and precision converge in perfect equilibrium.</p>
            <div className="bg-white rounded-md shadow-md mt-12 p-6">
              <p className="mt-2 text-sm text-gray-600 italic">"Krafting a welcoming experience that leaves no room for confusion."</p>
              <div className="flex mt-6 items-center">
                <img src='../img1.webp' className='h-12 w-12 rounded-md object-cover' alt="Profile Picture" />
                <div className='ml-4 '>
                  <div className="text-lg leading-6 font-medium text-gray-900">
                    Rohit Anand
                  </div>
                  <p className="text-gray-500">Founder of Finkraft.ai</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <span className="bg-blue-500 h-2 w-2 rounded-full mx-1"></span>
              <span className="bg-gray-400 h-2 w-2 rounded-full mx-1"></span>
              <span className="bg-gray-400 h-2 w-2 rounded-full mx-1"></span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="w-1/2 bg-white flex p-8 flex-col justify-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-sm text-gray-400 mb-4">Welcome</h2>
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Sign in</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="space-y-4">
                <div>
                  <label htmlFor="email-address" className="block text-sm placeholder-gray-400 text-gray-400">Email</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm text-gray-400 placeholder-gray-400">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Continue
                </button>
              </div>

              <div className="text-center mt-4">
                <div className="my-12 border-b text-center">
                  <div className="lading-none px-2 inline-block text-sm text-gray-400 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or
                  </div>
                </div>
                <button
                  type="button"
                  className="mt-2 w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Log in with OTP
                </button>
              </div>
            </form>

            <div className="text-center text-sm text-gray-600 mt-8">
              <p>Don't have an account? <a href="#" className="font-medium text-blue-600 hover:text-blue-500">Sign up</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn;