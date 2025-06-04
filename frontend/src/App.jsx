import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import TodoPage from './pages/TodoPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  if (isLoggedIn) return <TodoPage onLogout={() => setIsLoggedIn(false)} />;

  return (
    <>
      {showLogin ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Register onRegister={() => setIsLoggedIn(true)} />
      )}
      <p>
        {showLogin ? "Don't have an account?" : "Already registered?"}
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "Register" : "Login"}
        </button>
      </p>
    </>
  );
};

export default App;
