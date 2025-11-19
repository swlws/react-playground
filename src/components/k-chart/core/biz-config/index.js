export default class BizConfig {
  constructor() {
    this.config = {};
  }

  mergeConfig(config = {}) {
    this.config = { ...this.config, ...config };
  }
}
