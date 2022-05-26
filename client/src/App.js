import React, { createContext, useReducer } from "react";
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import CastDetail from "./Pages/CastDetail";
import Header from "./Component/Header";
import { makeStyles } from '@material-ui/core'
import Footer from "./Component/Footer";
import Detailview from "./Pages/Detailview";
import { initialState, reducer } from "./Usereducer/Usereducer";
import TrendingToday from "./Pages/TrendingToday";
import Upcoming from "./Pages/Upcoming";


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
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{ state: state, dispatch: dispatch }}>
      <BrowserRouter>
        <div className={classes.App}>
          <Header />
          <Routes>

            < Route exact path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detailview />} />
            < Route exact path="/signup" element={<Signup />} />
            < Route exact path="/trending" element={<TrendingToday />} />
            < Route exact path="/login" element={<Login />} />
            < Route exact path="/casts/:id" element={<CastDetail />} />
            < Route exact path="/upcoming" element={<Upcoming />} />

          </Routes>
          <Footer className={classes.footer} />


        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
