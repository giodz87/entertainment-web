import { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "../data.json";
import GlobalStyled from "../GlobalStyled";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Search from "./components/Search";
import Header from "./components/Header";
import TvSeries from "./components/TvSeries";
import Movies from "./components/Movies";
import Home from "./pages/Home";
import SaveMovies from "./components/SaveMovies";
export const MyContext = createContext({});
function App() {
  const [movieData, setMovieData] = useState(data);
  const [search, setSearch] = useState("");

  return (
    <MyContext.Provider
      value={{
        movieData,
        setMovieData,
        search,
        setSearch,
      }}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      ></link>

      <BrowserRouter>
        {}
        <div>
          <Header />
        </div>
        <div>
          <Search />

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="tv-series" element={<TvSeries />} />
            <Route path="/save-movies" element={<SaveMovies />} />
          </Routes>
        </div>
      </BrowserRouter>

      <GlobalStyled />
    </MyContext.Provider>
  );
}

export default App;
