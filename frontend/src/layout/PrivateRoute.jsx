import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "../utils/socket-io";
import { updateUser } from "src/redux/slicers/userSlice";
import toast from "react-hot-toast";

function PrivateRoutes() {
  const { user } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      socket.on(`${user.userId}-user-update`, ({ user, message }) => {
        console.log(user, message);
        if (user !== undefined) {
          dispatch(updateUser(user));
        }
        if (message) {
          toast[message.type](message.text);
        }
      });
      return () => {
        socket.off(`${user.userId}-user-update`);
      };
    }
  }, [dispatch, user]);

  return user ? <Outlet /> : <Navigate to={"/login"} replace />;
}
export default PrivateRoutes;
