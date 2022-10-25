import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <form>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col">
              <div className="text-center lg:text-left">
                <h1 className="text-gray-800 text-5xl font-bold">Login now!</h1>
              </div>
              <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter you email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Enter your password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="******"
                      className="input input-bordered"
                      name="password"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                  <p className="text-xs text-center sm:px-6 dark:text-gray-400">
                    Don't have an account? 
                     <Link
                      rel="noopener noreferrer"
                      to="/signup"
                      className="underline dark:text-gray-100"
                    > 
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Login;