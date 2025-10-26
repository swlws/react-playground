import { createContext, useContext } from "react";
// import { useContextSelector } from "use-context-selector";

export const ComponentStateContext = createContext({});

export const useComponentState = (componentId) => {
  return useContext(ComponentStateContext)?.[componentId] || {};
};

export const ComponentStateDispatchContext = createContext({});

export const useComponentStateDispatch = () => {
  return useContext(ComponentStateDispatchContext);
};
