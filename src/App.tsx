import { useState } from 'react';
import './App.css';
import Header from './components/navigation/Header';
import Login from './pages/authentication/Login';

function App() {
  const [auth, setAuth] = useState(false);
  return (
    <>
      {auth && <Header />}
      {!auth && <Login />}
    </>
  );
}

export default App;
