import { createContext } from "react";

const userContext = createContext<String[]>([])
export const userContextProvider = userContext.Provider
export const userContextConsumer = userContext.Consumer