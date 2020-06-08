import { AuthProvider } from "./Auth";
import React from "react";

const Provider: React.FC = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Provider;
