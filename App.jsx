import React from "react";
import Dvdlist from "./components/Dvdlist";
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

const App = () => {
  const languages = ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Pyotr Ilyich Tchaikovsky"];
  const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
};

  return (
    <BrowserRouter>
      <div>
        <h1>composer DVD</h1>
        <ul>
          {" "}
          <li>
            <Link to="/Ludwig van Beethoven">Ludwig van Beethoven</Link>
          </li>
          <li>
            <Link to="/Wolfgang Amadeus Mozart">Wolfgang Amadeus Mozart</Link>
          </li>
          <li>
            <Link to="/Pyotr Ilyich Tchaikovsky">Pyotr Ilyich Tchaikovsky</Link>
          </li>
        </ul>
        <hr /> 
        <Route
          exact
          path="/Ludwig van Beethoven"
          render={
            (props) => 
            <Dvdlist language={languages[0]}
            getData={keyword=>getDataFromAPI(keyword)}
             />
            }
        />
        <Route
          path="/Wolfgang Amadeus Mozart"
          render={
            (props) => 
            <Dvdlist language={languages[1]}
            getData={keyword=>getDataFromAPI(keyword)}
            />
          }
        />
        <Route 
        path="/Pyotr Ilyich Tchaikovsky"
         render={
           (props) =>
            <Dvdlist language={languages[2]}
            getData={keyword=>getDataFromAPI(keyword)}
             />
             }
        />
      </div>
    </BrowserRouter>
  );
};
export default App;