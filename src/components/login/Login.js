import React from 'react';
import RegisterLogo from '../../assets/RegisterLogo.svg';

function Login() {
  return (
    <div className="mx-16 my-32 md:my-0">
      <main className="flex flex-col max-w-full m-auto justify-evenly items-center min-h-screen md:flex-row">
        <div className="">
          <img src={RegisterLogo} alt="Logo" className="" />
        </div>
        <form
          action=""
          className="flex flex-col w-full lg:w-1/4 md:w-1/2 md:mx-4 h-full items-center"
        >
          <h1 className="text-4xl font-bold my-4">Sign in</h1>
          <p className="text-xl text-gray-500 mb-8">
            Sign in to access your account
          </p>
          <p className="text-xl self-start">Email Address</p>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <p className="self-start text-xl">Password</p>
          <input
            type="text"
            name="Password"
            id="Password"
            placeholder="Password"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <button
            name=""
            id=""
            className="mt-6 mb-2 border-none h-12 bg-blue-500 font-semibold text-white w-full text-xl rounded-xl xs:h-full xs:p-4"
          >
            Create Account
          </button>
          <p className="text-center w-4/5 text-lg text-gray-400 ">
            Don't have an account yet?&nbsp;
            <a href="" className="text-blue-400">
              Sign up
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
