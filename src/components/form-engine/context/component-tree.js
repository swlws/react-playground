import { createContext, useContext } from "react";

export const ComponentTreeContext = createContext([]);

export const useComponentTree = () => {
  return useContext(ComponentTreeContext);
};

export const ComponentTreeDispatchContext = createContext({});

export const useComponentTreeDispatch = () => {
  return useContext(ComponentTreeDispatchContext);
};
