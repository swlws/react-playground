import { createContext } from "react";
import { ENUM_FORM_MODE } from "../constants";

export const FormContext = createContext({
  mode: ENUM_FORM_MODE.EDIT,
  componentSchemaList: [],
});
