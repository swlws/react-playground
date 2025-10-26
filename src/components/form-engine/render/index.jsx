// 组件
import { useComponentTree } from "@fe/context/component-tree";
import ComponentWrap from "./components/component-wrap";
import DyncComponent from "./components/dync-component";

// 变量
import { ENUM_FORM_MODE } from "@fe/constants";

export default function FormRenderer({ mode = ENUM_FORM_MODE.EDIT } = {}) {
  const componentTree = useComponentTree();
  console.log("========", componentTree);

  return (
    <div className="form-renderer">
      {componentTree.map((componentSchema) => (
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
