import React, { useState } from "react";
import Link from "next/link";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import api from "../../services/api";
const INITIAL_FORM_STATE = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  username: Yup.string().required("Username is required"),

  email: Yup.string().required("Email is required").email("Invalid email."),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match.")
    .required("Confirm password is required."),
});
export default function Register() {
  const [failedMsg, setFailedMsg] = useState("");
  const router = useRouter();
  const handleSubmit = async (registerData) => {
    try {
      const res = await api.post(`/api/v1/auth/register`, registerData);
      if (res && res.status) {
        localStorage.setItem("accessToken", res.accessToken);
      }
      const userData = res.user;
      localStorage.setItem("userData", userData);
      router.push("/");
    } catch (e) {
      setFailedMsg(e.message);
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with your friends all over the world.
          </span>
        </div>
        <div className="loginRight">
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <Form className="loginBox">
              {failedMsg ? (
                <span className="col-12" style={{ color: "red" }}>
                  * {failedMsg}
                </span>
              ) : (
                ""
              )}
              <div className="row">
                <div className="col-6">
                  <Field
                    name="firstName"
                    placeholder="First Name"
                    className="loginInput"
                    type="text"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-6">
                  <Field
                    name="lastName"
                    placeholder="Last Name"
                    className="loginInput"
                    type="text"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>
              <Field
                placeholder="Username"
                name="username"
                className="loginInput"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-danger"
              />
              <Field
                placeholder="Email"
                name="email"
                className="loginInput"
                type="email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
              <div className="row">
                <div className="col-6">
                  <Field
                    name="password"
                    placeholder="Password"
                    className="loginInput"
                    type="password"
                    minLength="6"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </div>

                <div className="col-6">
                  <Field
                    name="confirmPassword"
                    placeholder="Password Again"
                    className="loginInput"
                    type="password"
                  />
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-danger"
                  />
                </div>
              </div>

              <button className="loginButton" type="submit">
                Sign Up
              </button>
              <span className="loginForgot">Already have an account?</span>

              <Link href="/login">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
