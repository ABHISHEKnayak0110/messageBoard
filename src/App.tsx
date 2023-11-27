import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageBoard from './screen/MessageBoard';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
     <MessageBoard/>
     <ToastContainer
          position="top-center"
          // type="success"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          draggable={false}
          rtl={true}
        />
    </div>
  );
}

export default App;
