import { useState } from 'react';
import './App.css';
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import NavBar from './components/layouts/NavBar';

function App() {
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <div className="App">
      <NavBar />
      {toggleForm ? (<Login toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
    </div>
  );
}

export default App;
