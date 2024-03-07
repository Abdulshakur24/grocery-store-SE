import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../redux/slicers/userSlice";
import { clearToken, updateToken } from "../../redux/slicers/tokenSlice";
import toast from "react-hot-toast";
import { extractErrorMessage } from "../../utils/helper";
import api from "../../utils/api";
import { connectToSocket } from "../../utils/socket-io";

function LoginPage() {
  const [isSignUpMode, setIsSignUpMode] = useState(false);
  const { token } = useSelector((state) => state.userToken);
  const [toastOnce, setToastOnce] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  console.log(token);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };
  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  const formikSignIn = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: () =>
      Yup.object({
        email: Yup.string().email("Invalid Email").required("Required*"),
        password: Yup.string()
          .min(5, "Must be at least 5 characters")
          .required("Required*"),
      }),
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);

      try {
        const {
          data: { user },
        } = await api.post("/user/login", values);
        setLoading(false);
        dispatch(loadUser({ user }));
        dispatch(updateToken(user.token));
        toast.success(`Welcome ${user.username}!`);
      } catch (error) {
        if (error?.response) {
          toast.error(
            extractErrorMessage(error.response.data.message) ||
              "An error occurred"
          );
        } else {
          toast.error("Please check your connection");
        }
        setLoading(false);
      }
    },
  });

  const formikSignUp = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: () =>
      Yup.object({
        username: Yup.string().min(3).required("Required*"),
        email: Yup.string().email("Invalid Email").required("Required*"),
        password: Yup.string()
          .min(5, "Must be at least 5 characters")
          .required("Required*"),
      }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const {
          data: { user },
        } = await api.post("/user/register", values);
        console.log(user);
        setLoading(false);
        dispatch(loadUser({ user }));
        dispatch(updateToken(user.token));
        toast.success(`Welcome ${user.username}!`);
      } catch (error) {
        if (error?.response) {
          toast.error(
            extractErrorMessage(error.response.data.message) ||
              "An error occurred"
          );
        } else {
          toast.error("Please check your connection");
        }
        setLoading(false);
      }
    },
  });

  return (
    <div className={`loginContainer ${isSignUpMode ? "sign-up-mode" : ""}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form
            onSubmit={formikSignIn.handleSubmit}
            className="sign-in-form loginForm"
          >
            <h2 className="title">Sign In</h2>

            <div className="input-field">
              <i className="icofont-envelope my-auto mx-auto"></i>
              <input
                className="loginInput"
                type="email"
                placeholder="Email"
                // id="email"
                name="email"
                value={formikSignIn.values.email}
                onChange={formikSignIn.handleChange}
              />
            </div>
            <div className="input-field">
              <i className="icofont-lock my-auto mx-auto"></i>
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                // id="password"
                name="password"
                label="password"
                value={formikSignIn.values.password}
                onChange={formikSignIn.handleChange}
              />
            </div>
            <button className="btn" type="submit">
              Sign In
            </button>
            <p className="social-text-loginp">Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="icofont-brand-google my-auto mx-auto"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="icofont-linkedin my-auto mx-auto"></i>
              </a>
            </div>
          </form>
          <form
            className="sign-up-form loginForm"
            onSubmit={formikSignUp.handleSubmit}
          >
            <h2 className="title">Sign Up</h2>

            <div className="input-field">
              <i className="icofont-user-alt-7 my-auto mx-auto"></i>
              <input
                className="loginInput"
                type="text"
                placeholder="Username"
                // id="username"
                name="username"
                label="username"
                value={formikSignUp.values.username}
                onChange={formikSignUp.handleChange}
              />
            </div>
            <div className="input-field">
              <i className="icofont-envelope my-auto mx-auto"></i>
              <input
                className="loginInput"
                type="email"
                placeholder="Email"
                // id="email"
                name="email"
                label="email"
                value={formikSignUp.values.email}
                onChange={formikSignUp.handleChange}
              />
            </div>
            <div className="input-field">
              <i className="icofont-lock my-auto mx-auto"></i>
              <input
                className="loginInput"
                type="password"
                placeholder="Password"
                // id="password"
                name="password"
                label="password"
                value={formikSignUp.values.password}
                onChange={formikSignUp.handleChange}
              />
            </div>
            <button className="btn" type="submit">
              Sign Up
            </button>
            <p className="social-text-loginp">Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="icofont-brand-google my-auto mx-auto"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="icofont-linkedin my-auto mx-auto"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3 className="loginh3">New Here?</h3>
            <p className="loginp">Feel free to join us.</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
          <img
            src="src/assets/images/category/login1.png"
            className="image"
            alt=""
          />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3 className="loginh3">One Of Us?</h3>
            <p className="loginp">Welcome back!</p>
            <button
              onClick={handleSignInClick}
              className="btn transparent"
              id="sign-in-btn"
            >
              Sign In
            </button>
          </div>
          <img src="src/assets/images/category/login2.png" className="image" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
