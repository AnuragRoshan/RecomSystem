import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./Component/Header";


import { makeStyles } from '@material-ui/core'
import Footer from "./Component/Footer";
import Detailview from "./Pages/Detailview";



function App() {
  const useStyles = makeStyles(() => ({
    App: {
      display: "flex",
      flexDirection: "column",
      // minHeight: '100vh'
    },
    footer:{
      bottom:0
    }

  }))

  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>

          < Route exact path="/" element={<Home />} />
          <Route path="/details/:id" element={<Detailview/>} />
          < Route exact path="/signup" element={<Signup />} />
          < Route exact path="/login" element={<Login />} />

        </Routes>
        <Footer className={classes.footer}/>


      </div>
    </BrowserRouter>
  );
}

export default App;
