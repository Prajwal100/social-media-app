import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import api from "../../services/api";
const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email address.")
    .required("Please enter email address."),

  password: Yup.string().required("Please enter your password."),
});

export default function Login() {
  const [failedMsg, setFailedMsg] = useState("");
  const router = useRouter();
  const handleSubmit = async (loginData) => {
    try {
      const res = await api.post(`/api/v1/auth/login`, loginData);
      if (res && res.status) {
        localStorage.setItem("accessToken", res.accessToken);
      }
      const userData = res.user;
      localStorage.setItem("userData", JSON.stringify(userData));
      router.push("/");
    } catch (e) {
      setFailedMsg(e.message);
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
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
              <Field
                name="email"
                placeholder="Email"
                type="email"
                className="loginInput"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-danger"
              />
              <Field
                name="password"
                placeholder="Password"
                type="password"
                minLength="6"
                className="loginInput"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-danger"
              />
              <button className="loginButton" type="submit">
                Login
              </button>
              <span className="loginForgot">Forgot Password?</span>
              <Link href="/register">
                <button type="submit" className="loginRegisterButton">
                  Create a New Account
                </button>
              </Link>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
