import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Component/Header";


import { makeStyles } from '@material-ui/core'
import Footer from "./Component/Footer";



function App() {
  const useStyles = makeStyles(() => ({
    App: {
      display: "flex",
      flexDirection: "column",
      minHeight: '100vh'
    },

  }))

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>

          < Route exact path="/" element={<Home />} />
          < Route exact path="/signup" element={<Signup />} />
          < Route exact path="/login" element={<Login />} />

        </Routes>
        <Footer />


      </div>
    </BrowserRouter>
  );
}

export default App;
