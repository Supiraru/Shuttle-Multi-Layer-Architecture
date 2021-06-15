import React from 'react';
import RegisterLogo from '../../assets/RegisterLogo.svg';

function Register() {
  return (
    <div className="mx-16 my-32 md:my-0">
      <main className="flex flex-col max-w-full m-auto justify-evenly items-center min-h-screen md:flex-row">
        <div className="h-2/3">
          <img src={RegisterLogo} alt="Logo" />
        </div>
        <form
          action=""
          className="flex flex-col w-full h-full items-center lg:w-1/4 md:w-1/2 md:mx-4"
        >
          <h1 className="text-4xl font-bold my-4">Sign Up</h1>
          <input
            type="text"
            name="Fullname"
            id="Fullname"
            placeholder="Full Name"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <input
            type="text"
            name="Password"
            id="Password"
            placeholder="Password"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <input
            type="text"
            name="Confirm_password"
            id="Confirm_password"
            placeholder="Confirm Password"
            className="p-4 my-3 h-12 border-2 w-full rounded-xl xs:h-full"
          />
          <button
            name=""
            id=""
            className="mt-8 mb-2 border-none h-12 bg-blue-500 font-semibold text-white w-full text-xl rounded-xl xs:h-full xs:p-4"
          >
            Create Account
          </button>
          <p className="text-center w-4/5 text-sm text-gray-400">
            By Signing up. you agree to the Terms of Service and Privacy policy
          </p>
        </form>
      </main>
    </div>
  );
}

export default Register;
