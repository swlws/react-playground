import { FormEditor, FormRuntime } from "@/components/form-engine";

export default function FormEngine() {
  return (
    <div className="page-form-engine" style={{ height: "100vh" }}>
      <FormEditor />
      {/* <FormRuntime /> */}
    </div>
  );
}
