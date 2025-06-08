import { useEffect } from "react";
import { useAuthStore } from "./store/useAuthStore";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import TodoPage from "./pages/TodoPage";

const App = () => {

  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser});

  if(isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading....
      </div>
    );
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={authUser ? <TodoPage /> : <Navigate to="/login" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
