import "./styles.css";
// import {moviesData} from "./movies"
import { useState } from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./components/Header"
import AppRoutes from "./AppRoutes"
export default function App() {

  const [movies, setMovies] = useState([]);
  //dynamic import using module
  // const getMovies = () => {
  //   import("./movies").then(({moviesData}) => {
  //     console.log(module)
  //     setMovies(moviesData)
  //   })
  // }

  //dynamic import using async-await

  // const getData = async() => {
  //   const movies =(await import("./movies")).moviesData //very careful of syntax and without .moviesData, it will give the module.
  //   console.log(movies)
  //   setMovies(movies)
  // }


  return (
    <div>
      {/* <h2> This is the app component. </h2>
      <button onClick={getMovies}>Get Movies</button>
      <pre>{movies.length > 0 ? JSON.stringify(movies, null, 2) : ""} </pre> */}
      <Router>
        <Header/>
        <AppRoutes/>
      </Router>

    </div>
  );
}
