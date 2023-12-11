import { BaseEventBus } from "./event-bus.types";

export class EventBus {
  private static instance?: BaseEventBus;

  constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new BaseEventBus();
    }

    return this.instance;
  }
}
