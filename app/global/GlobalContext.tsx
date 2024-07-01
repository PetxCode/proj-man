"use client";

import React, { FC, ReactNode, createContext, useState } from "react";

interface iContext {
  children: ReactNode;
  staffToggle?: boolean;
  setStaffToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContextProvider = createContext({});

export const GlobalContext: FC<iContext> = ({ children }) => {
  const [staffToggle, setStaffToggle] = useState<boolean>(false);
  return (
    <ContextProvider.Provider value={{ staffToggle, setStaffToggle }}>
      {children}
    </ContextProvider.Provider>
  );
};
