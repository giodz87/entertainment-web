import { Box, Section } from "../stylesComponents/LoginStyles";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const userLogin = (e) => {
    const users = JSON.parse(localStorage.getItem("users"));

    if (
      users?.some((item) => {
        if (item.email == watch("email") && item.password == watch("password"))
          return true;
      })
    )
      navigate("/");
  };

  return (
    <Box>
      <img src={"./assets/logo.svg"} alt="logo" />
      <Section>
        <form onSubmit={handleSubmit(userLogin)}>
          <h2>Login</h2>
          <div className="InputBox">
            <div className="input-errors">
              <input
                type="email"
                placeholder="Email address"
                {...register("email", { required: "Can’t be empty" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="input-errors">
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Can’t be empty",
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
          </div>
          <div className="btn">
            <button type="submit">Login to your account</button>
            <span>
              Don’t have an account? <Link to="/signUp"> Sign Up </Link>
            </span>
          </div>
        </form>
      </Section>
    </Box>
  );
}
