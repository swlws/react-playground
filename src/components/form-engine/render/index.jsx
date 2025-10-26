// 组件
import ComponentWrap from "./components/component-wrap";
import DyncComponent from "./components/dync-component";

// 变量
import { ENUM_FORM_MODE } from "@fe/constants";

export default function FormRenderer({
  mode = ENUM_FORM_MODE.EDIT,
  componentSchemaList = [],
} = {}) {
  return (
    <div className="form-renderer">
      {componentSchemaList.map((componentSchema) => (
        <ComponentWrap
          key={componentSchema.componentId}
          mode={mode}
          schema={componentSchema}
        >
          <DyncComponent schema={componentSchema} />
        </ComponentWrap>
      ))}
    </div>
  );
}
