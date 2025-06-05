import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';
import toast from 'react-hot-toast';
import { Link } from "react-router-dom";

const SignUpPage  = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ 
    fullName: "",
    email: "", 
    password: "" 
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };

   const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
     <div className="min-h-screen grid lg:grid-cols-1 bg-black">
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="text-center mb-8">
            <div className="flex flex-col items-center gap-2 group">
              <div
                className="size-12 rounded-xl bg-primary/10 flex items-center justify-center 
              group-hover:bg-primary/20 transition-colors"
              >
                <img src="/to-do.png" alt="chat" className="size-12 text-primary" />
              </div>
              <h1 className="text-2xl font-bold mt-2 text-white">Create Account</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/user.png" alt="email" className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  className={`input input-bordered w-full pl-10 p-1 mt-1 rounded-md`}
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/email.png" alt="email" className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  className={`input input-bordered w-full pl-10 p-1 mt-1 rounded-md`}
                  placeholder="your@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-white">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src="/lock.png" alt="" className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className={`input input-bordered w-full pl-10 p-1 mt-1 rounded-md`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <img src="/ofeye.png" alt="offeye" className="h-5 w-5 text-base-content/40"/>
                  ) : (
                    <img src="/eye.png" alt="eye" className="h-5 w-5 text-base-content/40"/>
                  )} 
                </button>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full text-white bg-orange-400 p-2 mt-1 rounded-md" disabled={isSigningUp}>
              {isSigningUp ? (
                <>
                  <img src="/loading.png" alt="load" className="h-5 w-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-base-content/60 text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary text-orange-400">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUpPage;
