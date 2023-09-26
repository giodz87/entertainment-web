import { styled } from "styled-components";
import React, { useContext } from "react";
import { MyContext } from "../App";
import { useLocation } from "react-router-dom";
export default function Search() {
  const context = useContext(MyContext);
  const location = useLocation().pathname;
  const placeholderText =
    location === "/"
      ? "Search for movies or TV series"
      : location === "/movies"
      ? "Search for movies"
      : location === "/tv-series"
      ? "Search for TV series"
      : location === "/save-movies"
      ? "Search for bookmarked shows"
      : "";

  const handleSearch = (e) => {
    const searchMovies = e.target.value.toLowerCase();

    context.setSearch(searchMovies);
  };
  return location != "/login" && location != "/signUp" ? (
    <Section>
      <div>
        <img
          className="search"
          src={"./public/assets/icon-search.svg"}
          alt=""
        />

        <input
          type="text"
          placeholder={placeholderText}
          onChange={handleSearch}
        />
      </div>
    </Section>
  ) : null;
}
const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 26px 0 24px 16px;

  input {
    display: inline-flex;
    padding-right: 0px;
    justify-content: center;
    align-items: center;
    gap: 16px;

    color: #fff;
    background: var(--Dark-Blue, #10141e);
    border: none;
    width: 257px;
    height: 24px;
    padding: 0 0 0 40px;
    outline: none;
  }
  div {
    width: 365px;
  }
  p {
    color: var(--Pure-White, #fff);
    font-family: Outfit;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    opacity: 0.4979;
  }
  .search {
    width: 24px;
    height: 24px;
    position: absolute;
  }
  @media (min-width: 768px) {
    padding: 26px 0 24px 25px;
    div {
      width: 740px;
    }

    input {
      width: 400px;
      font-size: 24px;
      padding: 0 0 0 60px;
    }
  }
  @media (min-width: 1440px) {
    margin: 39px 0 35px 0;

    .search {
      width: 32px;
      height: 32px;
    }
  }
`;
