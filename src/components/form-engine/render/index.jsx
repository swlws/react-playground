// 组件
import withComponentWrap from "./components/with-component-wrap";
import DyncComponent from "./components/dync-component";

// 方法
import { useComponentTree } from "@fe/context/component-tree";

// 变量
import { ENUM_FORM_MODE } from "@fe/constants";

export default function FormRenderer({ mode = ENUM_FORM_MODE.EDIT } = {}) {
  const componentTree = useComponentTree();
  const WrappedDyncComponent = withComponentWrap(DyncComponent);

  return (
    <div className="form-renderer">
      {componentTree.map((component) => (
        <WrappedDyncComponent
          key={component.id}
          componentId={component.id}
          mode={mode}
        />
      ))}
    </div>
  );
}
