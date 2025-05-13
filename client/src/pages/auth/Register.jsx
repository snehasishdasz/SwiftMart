import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { Flip, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
          const res = await axios.post(
            "http://localhost:8080/api/v1/auth/register",
            { name, email, password, phone, address },
            {
              headers: {
                "Content-Type": "application/json",
              },
              withCredentials: true,
            }
          );
          console.log(res.data.message);
          if (res.data.success) {
            toast.success(res.data.message, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              transition: Flip,
            });
            setTimeout(() => {
              navigate("/login");
            }, 1500); // wait 2 seconds
          }
        } 
        catch (error) {
          console.log(error);
          // Show correct toast from backend response
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
          });
        }

    }


    return (
        <Layout title={"Register - SwiftMart"}>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 to-indigo-100">
                <div className="flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
                    {/* Left Side: User Icon & Welcome */}
                    <div
                        className="hidden md:flex flex-col justify-center items-center w-2/5 px-8 py-4"
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
                            Welcome to SwiftMart
                        </h2>
                        <p className="text-xs font-semibold text-slate-800 opacity-90 text-center mb-1">
                            Your one-stop shop for everything you need.
                        </p>
                    </div>

                    {/* Right Side: Register Form */}
                    <div className="w-full md:w-3/5 px-12 py-4 flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-slate-800 mb-1 text-center">
                            Create your account
                        </h2>
                        <p className="text-xs text-slate-500 text-center mb-4">
                            Sign up to start shopping smarter
                        </p>
                        <form className="space-y-2" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-1 text-xs font-medium text-slate-600">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:border-indigo-400 transition"
                                    placeholder="Your Name"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
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
                            <div>
                                <label className="block mb-1 text-xs font-medium text-slate-600">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:border-indigo-400 transition"
                                    placeholder="Phone Number"
                                    required
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-xs font-medium text-slate-600">
                                    Address
                                </label>
                                <textarea
                                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm bg-slate-50 focus:outline-none focus:border-indigo-400 transition"
                                    placeholder="Your Address"
                                    rows={1}
                                    required
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 rounded-md bg-indigo-500 text-white font-semibold text-base shadow hover:bg-indigo-600 transition"
                            >
                                Register
                            </button>
                        </form>
                        <div className="text-center text-xs text-slate-500 mt-2">
                            Already have an account?
                            <a
                                href="/login"
                                className="ml-1 text-indigo-500 font-medium hover:underline"
                            >
                                Login
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Register;
