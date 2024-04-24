import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utlis/firebase/firebase.utils";
//import { useDispatch } from 'react-redux';
//import { signUpUser } from '../../reducers/authSlice';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  //const dispatch = useDispatch()

  const resetFormFields = () => {
    setEmail("");
    setPassword("");
    setRememberMe(false);
    setConfirmPassword("");
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  /*
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      //await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      setCurrentUser(user);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
*/
  function generateUserId() {
    return "user_" + Date.now(); // Creating a user ID based on timestamp
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userId = generateUserId(); // Generate or fetch the user ID (you may use a function or library to generate unique IDs)
    try {
      const response = await fetch("http://localhost:9001/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, userId }),

        // dispatch(signUpUser({email, password}))
      });

      if (response.ok) {
        // Handle successful sign-up
        localStorage.setItem("userId", userId);
        window.location.href = "http://localhost:5173/login";
      } else {
        // Handle sign-up errors
      }
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              onChange={handleEmailChange}
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              onChange={handlePasswordChange}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleConfirmPassword}
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            onClick={handleSignUp}
            className="w-full text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

{
  /*  <div className="flex justify-center items-center h-screen">
      <form className="w-72 border border-gray-300 rounded-lg p-4 shadow-md">
        <h2  style={{ color: 'black' }} >Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block"></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter email"
            style={{ color: 'black' }} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Enter password"
            style={{ color: 'black' }} 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block"></label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
            className="w-full mb-2 px-2 py-1 border rounded outline-none shadow-inner"
            placeholder="Confirm password"
            style={{ color: 'black' }} 
          />
        </div>
        <div className="flex justify-between items-center mb-4">
        <label className="text-gray-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={handleRememberMeChange}
              className="mr-1"
            />
            Accept Terms and Conditions
          </label>
          
        
        </div>
        
        <button
          onClick={handleSignUp}
          className="w-full py-2 bg-green-500 text-white rounded-full cursor-pointer mb-2"
          type="submit"
        >
          Sign Up
        </button>
       
      </form>
    </div>
  */
}
