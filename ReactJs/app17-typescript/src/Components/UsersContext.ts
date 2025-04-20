import { createContext } from "react";

const UserContext = createContext<String[]>([])
export const UserContextProvider = UserContext.Provider
export const UserContextConsumer = UserContext.Consumer