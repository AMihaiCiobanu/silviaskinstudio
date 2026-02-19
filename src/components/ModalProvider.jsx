/** @format */

import React, { createContext, useContext, useMemo, useState } from "react";

const ModalContext = createContext({
  hasModalOpen: false,
  setHasModalOpen: () => {},
});

export const ModalProvider = ({ children }) => {
  const [hasModalOpen, setHasModalOpen] = useState(false);

  const value = useMemo(
    () => ({
      hasModalOpen,
      setHasModalOpen,
    }),
    [hasModalOpen],
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalState = () => useContext(ModalContext);

