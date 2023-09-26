import Recommended from "../components/Recommended";
import React, { useContext, useEffect, useState } from "react";

import Trending from "../components/Trending";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (!users) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      {!context.search ? <Trending /> : null}
      <Recommended />
    </>
  );
}
