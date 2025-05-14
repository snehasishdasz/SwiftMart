import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { showSuccessToast, showErrorToast } from "../../utils/toastUtils";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {email,password},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        if(res.data.success){
          showSuccessToast(res.data.message);
          navigate("/");
        }
    }
    catch (error) {
      showErrorToast(error.response.data.message);
      console.error("Login error:", error);
    }
  }
  return (
    <Layout title={"Login - SwiftMart"}>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-100">
        <div className="flex w-full max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
          {/* Left Side: User Icon & Welcome */}
          <div
            className="hidden md:flex flex-col justify-center items-center w-2/5 px-8 py-8"
            style={{
              background:
                "linear-gradient(to bottom, #2563eb 0%, #e3ebff 60%, #fff 100%)",
            }}
          >
            {/* Animated User Emoji Icon */}
            <div className="mb-2">
              <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-white/60 to-indigo-200 shadow-lg text-[3rem] animate-bounce">
                👨‍💼
              </span>
            </div>
            <h2 className="text-xl font-bold mb-1 text-slate-800">
              Welcome Back!
            </h2>
            <p className="text-xs font-semibold text-slate-800 opacity-90 text-center mb-1">
              Log in to continue shopping smarter.
            </p>
          </div>

          {/* Right Side: Login Form */}
          <div className="w-full md:w-3/5 px-8 py-8 flex flex-col justify-center">
            <h2 className="text-xl font-bold text-slate-800 mb-1 text-center">
              Login to your account
            </h2>
            <p className="text-xs text-slate-500 text-center mb-4">
              Welcome back to SwiftMart!
            </p>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:border-indigo-400 transition"
                  placeholder="you@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="block mb-1 text-xs font-medium text-slate-600">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:border-indigo-400 transition"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-indigo-500 text-white font-semibold text-base shadow hover:bg-indigo-600 transition"
              >
                Login
              </button>
            </form>
            <div className="text-center text-xs text-slate-500 mt-2">
              Don't have an account?
              <a
                href="/register"
                className="ml-1 text-indigo-500 font-medium hover:underline"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
