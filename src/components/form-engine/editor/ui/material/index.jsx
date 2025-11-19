import CardList from "./components/card-list";
import { materialList } from "@/components/form-engine/material";

export default function Material() {
  return (
    <div className="form-editor__material">
      {materialList.map((item) => (
        <div key={item.type} className="form-editor__material-group">
          <header className="form-editor__material-group__title">
            {item.name}
          </header>
          <CardList list={item.children} />
        </div>
      ))}
    </div>
  );
}
