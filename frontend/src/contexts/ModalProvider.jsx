import { useState, createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  toggleModal: () => {},
  children: null,
  setChildren: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const toggleModal = (value) => {
    const newState = value !== undefined ? value : !isOpen;

    setIsOpen(newState);

    if (!newState) {
      setModalChildren(null);
    }
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        toggleModal,
        children: modalChildren,
        setChildren: setModalChildren,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
