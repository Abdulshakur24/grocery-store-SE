import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { connectToSocket } from "../utils/socket-io";
import toast from "react-hot-toast";
import { updateUser } from "../redux/slicers/userSlice";

const socket = connectToSocket();

function PrivateRoutes({ children }) {
  const { user } = useSelector((state) => state.userState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      socket.on(`${user.userId}-user-update`, ({ user, message }) => {
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

  return user ? children : <Navigate to={"/login"} replace />;
}
export default PrivateRoutes;
