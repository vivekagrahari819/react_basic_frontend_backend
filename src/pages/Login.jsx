import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row w-100 justify-content-center">
        <div className="col-11 col-sm-8 col-md-6 col-lg-4">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">
              <h3 className="text-center mb-3 fw-bold">Login</h3>
              <p className="text-center text-muted mb-4">
                Login to access your account
              </p>

              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>

                <button className="btn btn-primary w-100 mb-3">
                  Login
                </button>

                <p className="text-center mb-0">
                  Don’t have an account?{" "}
                  <NavLink className="text-decoration-none" to="/register">
                    Register
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
