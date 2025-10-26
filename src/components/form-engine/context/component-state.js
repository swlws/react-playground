import { createContext, useContext } from "react";
import { useContextSelector } from "use-context-selector";

export const ComponentStateContext = createContext({});

export const useComponentState = () => {
  return useContextSelector(ComponentStateContext, (state) => state);
};

export const ComponentStateDispatchContext = createContext({});

export const useComponentStateDispatch = () => {
  return useContext(ComponentStateDispatchContext);
};
