import { BrowserRouter } from 'react-router-dom';
import './App.css';
import React from "react";
import { AppRouter } from './Routes/AppRouter';
import {Navbar} from "./Common/Navbar"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
