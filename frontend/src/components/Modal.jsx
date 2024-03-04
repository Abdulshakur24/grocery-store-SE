import { AnimatePresence, motion } from "framer-motion";
import useModal from "../hooks/useModal";

function Modal() {
  const { isOpen, toggleModal, children } = useModal();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => toggleModal(false)}
          className="fixed z-[999] inset-0 bg-black/60 dark:bg-black/40 flex justify-center items-center"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
