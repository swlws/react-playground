import FormDataCenter from "./data-center";
import FormEventBus from "./event-bus";
import FormSchema from "./schema";

export default class FormStore {
  constructor() {
    this.dataCenter = new FormDataCenter();
    this.eventBus = new FormEventBus();
    this.schema = new FormSchema();
  }
}
