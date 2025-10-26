// 组件
import Title from "./ui/title";
import Material from "./ui/material";
import DrawBoard from "./ui/draw-board";
import Attribute from "./ui/attribute";
import FormEditorContextProvider from "./components/form-editor-context-provider";

// 样式
import "./index.scss";

export default function FormEditor() {
  return (
    <FormEditorContextProvider>
      <article className="form-editor">
        <header className="form-editor__header">
          <Title title="Editor" />
        </header>

        <section className="form-editor__left-section">
          <Material />
        </section>

        <main className="form-editor__main">
          <DrawBoard />
        </main>

        <section className="form-editor__right-section">
          <Attribute />
        </section>
      </article>
    </FormEditorContextProvider>
  );
}
