import React, { useContext, useState, useEffect } from "react";
import unpath from "../../public/assets/unpath.svg";
import iconPath from "../../public/assets/whpath.svg";
import { Box, Section } from "../stylesComponents/MoviesStyles";
import { MyContext } from "../App";
import movie from "../../public/assets/icon-category-movie.svg";

export default function Movies() {
  const [searchData, setSearchData] = useState([]);

  const context = useContext(MyContext);

  const handelSaveItem = (item) => {
    const index = context.movieData.indexOf(item);
    const clone = [...context.movieData];
    clone[index].isBookmarked = !clone[index].isBookmarked;
    context.setMovieData(clone);
  };
  useEffect(() => {
    const filterMovies = context.movieData.filter(
      (item) =>
        item.title.toLowerCase().includes(context.search) &&
        item.category === "Movie"
    );
    setSearchData(filterMovies);
  }, [context.search]);

  return (
    <Box>
      {!context.search ? (
        <h2>Movies</h2>
      ) : (
        <h2>
          Found {searchData.length} results for '{context.search}'
        </h2>
      )}
      <Section style={{ placeItems: "center" }}>
        {!context.search ? (
          context.movieData
            .filter((item) => item.category === "Movie")

            .map((item, index) => (
              <div key={index}>
                <img
                  src={item.isBookmarked ? iconPath : unpath}
                  alt=""
                  className="save"
                  onClick={() => {
                    handelSaveItem(item);
                  }}
                />

                <img
                  className="regSmall"
                  src={item.thumbnail.regular.small}
                  alt=""
                />
                <img
                  className="regMedium"
                  src={item.thumbnail.regular.medium}
                  alt=""
                />
                <img
                  className="regLarge"
                  src={item.thumbnail.regular.large}
                  alt=""
                />
                <div className="reiting">
                  <p>{item.year}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="2"
                    viewBox="0 0 2 2"
                    fill="none"
                  >
                    <circle opacity="0.5" cx="1" cy="1" r="1" fill="white" />
                  </svg>
                  <div className="category">
                    <img className="iconMovie" src={movie} alt="" />
                    <p>{item.category}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="2"
                    viewBox="0 0 2 2"
                    fill="none"
                  >
                    <circle opacity="0.5" cx="1" cy="1" r="1" fill="white" />
                  </svg>
                  <p>{item.rating}</p>
                </div>
                <h4>{item.title}</h4>
              </div>
            ))
        ) : (
          <>
            {searchData.map((item, index) => (
              <div key={index}>
                <img
                  src={item.isBookmarked ? iconPath : unpath}
                  alt=""
                  className="save"
                  onClick={() => {
                    handelSaveItem(item);
                  }}
                />

                <img
                  className="regSmall"
                  src={item.thumbnail.regular.small}
                  alt=""
                />
                <img
                  className="regMedium"
                  src={item.thumbnail.regular.medium}
                  alt=""
                />
                <img
                  className="regLarge"
                  src={item.thumbnail.regular.large}
                  alt=""
                />
                <div className="reiting">
                  <p>{item.year}</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="2"
                    viewBox="0 0 2 2"
                    fill="none"
                  >
                    <circle opacity="0.5" cx="1" cy="1" r="1" fill="white" />
                  </svg>
                  <div className="category">
                    <img className="iconMovie" src={movie} alt="" />
                    <p>{item.category}</p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2"
                    height="2"
                    viewBox="0 0 2 2"
                    fill="none"
                  >
                    <circle opacity="0.5" cx="1" cy="1" r="1" fill="white" />
                  </svg>
                  <p>{item.rating}</p>
                </div>
                <h4>{item.title}</h4>
              </div>
            ))}
          </>
        )}
      </Section>
    </Box>
  );
}
