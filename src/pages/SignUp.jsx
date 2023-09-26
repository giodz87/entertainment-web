import { Box, Section } from "../stylesComponents/LoginStyles";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function SignUp() {
  const navigate = useNavigate();

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const Submit = (e) => {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    if (prevUsers) {
      localStorage.setItem(
        "users",
        JSON.stringify([...prevUsers, { email: e.email, password: e.password }])
      );
    } else {
      localStorage.setItem(
        "users",
        JSON.stringify([{ email: e.email, password: e.password }])
      );
    }
    navigate("/login");
  };

  return (
    <Box>
      <img src={"./public/assets/logo.svg"} alt="logo" />
      <Section>
        <form onSubmit={handleSubmit(Submit)}>
          <h2>Sign Up</h2>
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

            <div className="input-errors">
              <input
                type="password"
                placeholder="Repeat Password"
                {...register("repeatPassword", {
                  required: "Repeat Password can't be empty",
                })}
                aria-invalid={errors.repeatPassword ? "true" : "false"}
              />
              {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
            </div>
          </div>
          <div className="btn">
            <button type="submit"> Create an account</button>
            <span>
              Alread have an account? <Link to="/login"> Login </Link>
            </span>
          </div>
        </form>
      </Section>
    </Box>
  );
}
