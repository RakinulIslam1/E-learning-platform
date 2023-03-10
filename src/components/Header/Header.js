import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <div class="bg-gray-900 nav">
      <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="relative flex items-center justify-between">
          <div
            aria-label="Company"
            title="Smart learners"
            class="inline-flex items-center"
          >
            <svg
              class="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              Smart learners
            </span>
            <div className="flex ml-5 lg:hidden items-center">
              <span>
                <img
                  title={user?.displayName}
                  className="photo rounded-lg"
                  src={user?.photoURL}
                  alt=""
                />
              </span>
            </div>
          </div>

          <div className="lg:hidden ml-3">
            {user?.uid ? (
              <button onClick={logout} className="btn btn-outline text-white">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-white">Login</button>
              </Link>
            )}
          </div>

          <ul class="flex items-center hidden space-x-8 lg:flex">
            <div className="flex ml-5 sm:hidden lg:flex items-center">
              <span>
                <img
                  title={user?.displayName}
                  className="photo rounded-lg"
                  src={user?.photoURL}
                  alt=""
                />
              </span>
              {/* <span className="ml-2">{user?.displayName}</span> */}
            </div>
            <li>
              <NavLink
                to="/home"
                aria-label="Our product"
                title="Home"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                aria-label="Our product"
                title="Courses"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="FAQ"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="Blog"
                title="Blog"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Blog
              </NavLink>
            </li>
            {user?.uid ? (
              <button onClick={logout} className="btn btn-outline text-white">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline text-white">Login</button>
              </Link>
            )}

            <input type="checkbox" className="toggle bg-white" />
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full z-50">
                <div class="p-5 bg-white border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <div
                        to="/"
                        aria-label="Company"
                        title="Smart learners"
                        class="inline-flex items-center"
                      >
                        <svg
                          class="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Smart learners
                        </span>
                      </div>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <NavLink
                          to="/home"
                          aria-label="Our product"
                          title="Home"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Our product"
                          title="Courses"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Our product"
                          title="FAQ"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="Our product"
                          title="Blog"
                          class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Blog
                        </NavLink>
                      </li>
                      <input
                        type="checkbox"
                        className="toggle bg-white"
                      />
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
