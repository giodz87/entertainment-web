import React, { useContext, useEffect, useState } from "react";
import { Box, Section } from "../stylesComponents/MoviesStyles";
import { MyContext } from "../App";

export default function Recommended() {
  const [searchData, setSearchData] = useState([]);

  const context = useContext(MyContext);
  const handelSaveItem = (item) => {
    const index = context.movieData.indexOf(item);
    const clone = [...context.movieData];
    clone[index].isBookmarked = !clone[index].isBookmarked;
    context.setMovieData(clone);
  };

  useEffect(() => {
    const filterMovies = context.movieData.filter((item) =>
      item.title.toLowerCase().includes(context.search)
    );
    setSearchData(filterMovies);
  }, [context.search]);

  return (
    <Box>
      {" "}
      {!context.search ? (
        <h2>Recommended for you</h2>
      ) : (
        <h2>
          Found {searchData.length} results for '{context.search}'
        </h2>
      )}
      <Section style={{ placeItems: "center" }}>
        {!context.search ? (
          context.movieData
            .filter((item) => !item.isTrending)
            .map((item, index) => (
              <div key={index}>
                <img
                  src={
                    item.isBookmarked
                      ? "./assets/whpath.svg"
                      : "./assets/unpath.svg"
                  }
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
                    <img
                      className="iconMovie"
                      src={"./assets/icon-category-movie.svg"}
                      alt=""
                    />
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
                  src={
                    item.isBookmarked
                      ? "./assets/whpath.svg"
                      : "./assets/unpath.svg"
                  }
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
                    <img
                      className="iconMovie"
                      src={"./assets/icon-category-movie.svg"}
                      alt=""
                    />
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
