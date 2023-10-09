import React, { useContext } from "react";
import { Box, Section } from "../stylesComponents/MoviesStyles";
import { MyContext } from "../App";
import { styled } from "styled-components";
export default function Trending() {
  const context = useContext(MyContext);
  const handelSaveItem = (index) => {
    const clone = [...context.movieData];
    clone[index].isBookmarked = !clone[index].isBookmarked;
    context.setMovieData(clone);
  };
  return (
    <Box>
      <h2>Trending</h2>
      <Section
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gridFap: "16px",
          paddingBottom: "24px",
        }}
      >
        <Conteiner className="wrapper">
          {context.movieData
            .filter((item) => item.isTrending)
            .map((item, index) => (
              <div className="scrol" key={index}>
                <img
                  src={
                    item.isBookmarked
                      ? "./assets/whpath.svg"
                      : "./assets/unpath.svg"
                  }
                  alt=""
                  className="save"
                  onClick={() => {
                    handelSaveItem(index);
                  }}
                />
                <img
                  className="regSmall"
                  src={item.thumbnail.trending.small}
                  alt=""
                />
                <img
                  className="regMedium"
                  src={item.thumbnail.trending.large}
                  alt=""
                />
                <img
                  className="regLarge"
                  src={item.thumbnail.regular.large}
                  alt=""
                />
                <div className="trending">
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
              </div>
            ))}
        </Conteiner>
      </Section>
    </Box>
  );
}

const Conteiner = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  overflow: auto;

  .wrapper .scrol .save {
    max-width: 375px;
    height: 110px;
    line-height: 110px;
    text-align: center;
  }
  .trending {
    position: absolute;
    bottom: 16px;
    margin-left: 16px;
  }
  .regSmall {
    width: 240px;
    height: 140px;
  }
  .save {
    margin-left: 200px;
  }
  h4 {
    width: 150px;
  }
  @media (min-width: 768px) {
    .regSmall {
      display: none;
    }
    .regMedium {
      width: 470px;
      height: 230px;
      flex-shrink: 0;
    }
    .save {
      transform: translate(215px, 10px);
    }
    h4 {
      font-size: 24px;
    }
    p {
      font-size: 15px;
    }
    .iconMovie {
      width: 12px;
      height: 12px;
    }
    .trending {
      margin-left: 24px;
    }
  }
`;
