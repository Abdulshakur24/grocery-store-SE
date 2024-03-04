import { useContext } from "react";
import { ModalContext } from "../contexts/ModalProvider";

function useModal() {
  return useContext(ModalContext);
}

export default useModal;
