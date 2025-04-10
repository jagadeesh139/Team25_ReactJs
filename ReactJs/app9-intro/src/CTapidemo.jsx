import { createContext } from "react";

export const UserContext = createContext();
export const UserContextProvider = UserContext.Provider;
export const UserContextComsumer = UserContext.Consumer;