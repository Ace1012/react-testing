import { useCallback, useRef } from "react";

export type Store = {
  firstName: string;
  lastName: string;
};

type Subscriber = () => void;
type Unsubscriber = () => void;

export type RStore = {
  get: () => Store;
  set: (val: Partial<Store>) => void;
  subscribe: (cb: Subscriber) => Unsubscriber;
};

function useStoreData(): RStore {
  const store = useRef<Store>({
    firstName: "",
    lastName: "",
  });

  const subscribers = useRef(new Set<() => void>());

  const get = useCallback(() => store.current, []);

  const set = useCallback((value: Partial<Store>) => {
    store.current = {
      ...store.current,
      ...value,
    };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((subscriber: Subscriber) => {
    subscribers.current.add(subscriber);
    return () => subscribers.current.delete(subscriber);
  }, []);

  return {
    get,
    set,
    subscribe,
  };
}

export { useStoreData };
