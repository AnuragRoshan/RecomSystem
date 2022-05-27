import React, { createContext, useEffect,  useState } from "react";
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import CastDetail from "./Pages/CastDetail";
import Header from "./Component/Header";
import { makeStyles } from '@material-ui/core'
import Footer from "./Component/Footer";
import Detailview from "./Pages/Detailview";
// import { initialState, reducer } from "./Usereducer/Usereducer";
import TrendingToday from "./Pages/TrendingToday";
import Upcoming from "./Pages/Upcoming";
import NotFound from "./Pages/NotFound"

export const userContext = createContext();


function App() {
  const useStyles = makeStyles(() => ({
    App: {
      display: "flex",
      flexDirection: "column",
      // minHeight: '100vh'
    },
    footer: {
      bottom: 0
    }

  }))

  const classes = useStyles();
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  console.log(user);
  
  return (
      <BrowserRouter>
        <div className={classes.App}>
          <Header user={user} />
          <Routes>

            < Route exact path="/" element={<Home />} />
            <Route exact path="/detail/:id" element={<Detailview />} />
            < Route exact path="/trending" element={<TrendingToday />} />
            < Route exact path="/login" element={user? <Navigate to="/"/> :<Login />} />
            < Route exact path="/casts/:id" element={<CastDetail />} />
            < Route exact path="/upcoming" element={user?<Upcoming />:<Navigate to="/login"/>} />
            <Route path="*" element={<NotFound/>}  />
          </Routes>
          <Footer className={classes.footer} />


        </div>
      </BrowserRouter>
  );
}

export default App;
