import { useReducer } from "react";
import { componentStateReducer } from "@fe/action/component-state-reducer";
import {
  ComponentStateContext,
  ComponentStateDispatchContext,
} from "@fe/context/component-state";
import {
  ComponentTreeContext,
  ComponentTreeDispatchContext,
} from "@fe/context/component-tree";
import { componentTreeReducer } from "@fe/action/conmponent-tree-reducer";

export default function FormEditorContextProvider({ children }) {
  const [componentTree, dispatchComponentTree] = useReducer(
    componentTreeReducer,
    []
  );
  const [componentState, dispatchComponentState] = useReducer(
    componentStateReducer,
    {}
  );

  return (
    <ComponentTreeContext.Provider value={componentTree}>
      <ComponentTreeDispatchContext.Provider value={dispatchComponentTree}>
        <ComponentStateContext.Provider value={componentState}>
          <ComponentStateDispatchContext.Provider
            value={dispatchComponentState}
          >
            {children}
          </ComponentStateDispatchContext.Provider>
        </ComponentStateContext.Provider>
      </ComponentTreeDispatchContext.Provider>
    </ComponentTreeContext.Provider>
  );
}
