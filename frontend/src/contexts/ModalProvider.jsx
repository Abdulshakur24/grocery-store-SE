import { useState, createContext } from "react";

export const ModalContext = createContext({
  isOpen: false,
  toggleModal: () => {},
  children: null,
  setChildren: () => {},
  position: false,
  setPosition: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);
  const [position, setPosition] = useState(false);

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
        position,
        setPosition,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
