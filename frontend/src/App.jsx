import { useEffect, useState } from "react";
import "./App.css";
import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/slicers/userSlice";
import { clearToken } from "./redux/slicers/tokenSlice";
import toast from "react-hot-toast";
import { connectToSocket } from "./utils/socket-io";
import ScrollToTop from "./components/ScrollToTop";

const socket = connectToSocket();

function App() {
  const { token } = useSelector((state) => state.tokenState);
  const [toastOnce, setToastOnce] = useState(true);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleAutoLogin = (payload) => {
      if (payload.status === "success") {
        dispatch(loadUser({ ...payload, token }));
        setLoading(false);
      } else {
        if (toastOnce) {
          dispatch(clearToken());
          toast.error(payload.message, {});
          setToastOnce(false);
        }
        setLoading(false);
      }
    };
    if (token) {
      setLoading(true);
      socket.emit("try-login", { token });
      socket.on("user-login", handleAutoLogin);
    }

    return () => {
      socket.off("user-login", handleAutoLogin);
      socket.off("try-login");
    };
  }, [dispatch, token, toastOnce]);

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <div className="min-vh-100">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
