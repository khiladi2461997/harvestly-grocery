import React, { useState, useEffect } from "react";
import Icon from "../assets/icon-0.svg";
import Heart from "../assets/Heart.svg";
import Bag from "../assets/Bag.svg";
import searchIcon from "../assets/Search.svg";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
import { logout } from "../../reducers/authSlice";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [productId, setProductId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const { user, status, error } = useSelector((state) => state.auth);
  

  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
    window.addEventListener("beforeunload", handleBeforeUnload);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const handleBeforeUnload = async () => {
    // Perform logout operation before the window unloads
    await handleLogout();
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("https://harvestlyy.onrender.com/api/currentuser");
      if (response.ok) {
        const { loggedInUsers } = await response.json();
        if (loggedInUsers.length > 0) {
          const userId = loggedInUsers[0].userId;
          const logoutResponse = await fetch(
            "https://harvestlyy.onrender.com/api/logout",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ userId }),
            }
          );
  
          if (logoutResponse.ok) {
            localStorage.removeItem("token");
            setIsLoggedIn(false); // Update isLoggedIn state to false
            dispatch(logout());
            console.log("Logout successful");
            // Redirect or perform any other actions after logout
          } else {
            console.error("Logout failed");
          }
        } else {
          console.error("No logged-in user found");
        }
      } else {
        console.error("Failed to fetch current user");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  

  // const history = useHistory();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://harvestlyy.onrender.com/api/products?search=${searchTerm}`
      );
      if (response.ok) {
        const products = await response.json();
        if (products.length > 0) {
          let foundProductId = products[0].id;
          console.log(foundProductId);
          setProductId(foundProductId); //lt is the desired product
          // history.push(`/products/${productId}`);
        } else {
          console.error("Product not found");
        }
      } else {
        console.error("Failed to fetch search results");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Icon} alt="Icon" class="h-8" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-green-900">
            Harvestly
          </span>
        </Link>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
           
           {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <Link to="/products/wishlist" className="mr-px">
                  <img src={Heart} alt="Heart" className="h-8" />
                </Link>
                <p className="text-green-900 text-2xl font-semibold"> | </p>
                <Link to="/products/cart">
                  <img src={Bag} alt="Bag" className="h-8" />
                </Link>
                <button className={`rounded-lg px-4 py-2 ml-4 ${status === "succeeded" ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`} onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login" className="flex items-center gap-8">
                <button className="bg-green-500 text-white rounded-lg px-4 py-2 ml-4">
                  Login / Signup
                </button>
              </Link>
            )}
            
            
            
          </div>
          
          

    
        </div>
        <div class="flex md:order-1">
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden  md:block">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <div className='search-container flex items-center'>
            <input
              type="text"
              onChange={handleInputChange}
              id="search-navbar"
              class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
             <Link to={`/products/${productId}`}>
          <button
            className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'
            onClick={handleSearch}
          >
            Search
          </button>
      </Link>
      </div>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
   
      </div>
    </nav>
  );
};

export default Navbar;

{
  /*
    <div>
      <div className='navbar flex justify-between items-center px-4 shadow-md bg-white'>
        <Link to= '/' className='flex items-center gap-8'>
          <img src={Icon} alt='Icon' />
          <p className='text-green-900 text-2xl font-semibold'>Harvestly</p>
        </Link>
        <div className='search-container flex items-center'>
          <input
            type='search'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleInputChange}
            className='bg-no-repeat bg-left border border-gray-300 rounded-md py-2 px-10 w-72 focus:outline-none focus:ring focus:border-blue-300'
            style={{
              backgroundImage: `url(${searchIcon})`,
              backgroundSize: '20px',
              color: 'black' ,
            }}
          />
       <Link to={`/products/${productId}`}>
          <button
            className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'
            onClick={handleSearch}
          >
            Search
          </button>
      </Link>
      
        </div>
        {isLoggedIn ? (
          <button className='bg-red-500 text-white rounded-lg px-4 py-2 ml-4' onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to='/login' className='flex items-center gap-8'>
            <button className='bg-green-500 text-white rounded-lg px-4 py-2 ml-4'>
              Login / Signup
            </button>
          </Link>
        )}
        
      </div>
        </div>*/
}
