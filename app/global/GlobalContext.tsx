"use client";

import React, { FC, ReactNode, createContext, useState } from "react";

interface iContext {
  children: ReactNode;
  staffToggle?: boolean;
  setStaffToggle?: React.Dispatch<React.SetStateAction<boolean>>;

  companyName?: string;
  setCompanyName?: React.Dispatch<React.SetStateAction<string>>;

  email?: string;
  setEmail?: React.Dispatch<React.SetStateAction<string>>;

  password?: string;
  setPassword?: React.Dispatch<React.SetStateAction<string>>;

  plan?: string;
  setPlan?: React.Dispatch<React.SetStateAction<string>>;

  reference?: string;
  setReference?: React.Dispatch<React.SetStateAction<string>>;

  planCost?: number;
  setPlanCost?: React.Dispatch<React.SetStateAction<number>>;
}

export const ContextProvider = createContext({});

export const GlobalContext: FC<iContext> = ({ children }) => {
  const [staffToggle, setStaffToggle] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [plan, setPlan] = useState<string>("");
  const [planCost, setPlanCost] = useState<number>(0);
  const [companyName, setCompanyName] = useState<string>("");
  const [reference, setReference] = useState<string>("");

  return (
    <ContextProvider.Provider
      value={{
        staffToggle,
        setStaffToggle,
        planCost,
        setPlanCost,
        companyName,
        setCompanyName,
        plan,
        setPlan,
        password,
        setPassword,
        email,
        setEmail,
        reference,
        setReference,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};
