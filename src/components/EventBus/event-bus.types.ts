export interface BaseEvent {
  type: string;
  id: number;
}

type Subscriber<T extends BaseEvent = BaseEvent> = {
  type: string;
  callback: (event: T) => void;
};

export class BaseEventBus<T extends BaseEvent = BaseEvent> {
  subs = new Set<Subscriber<T>>();

  subscribe(sub: Subscriber<T>) {
    this.subs.add(sub);

    return () => this.subs.delete(sub);
  }

  dispatch(event: T) {
    this.subs.forEach(({ type, callback }) => {
      if (type === event.type) {
        callback(event);
      }
    });
  }
}
