import { AsyncLocalStorage } from "node:async_hooks";
type AsyncLocalStorageType = {
  correlationID: String;
};

export const asyncLocalStorage = new AsyncLocalStorage<AsyncLocalStorageType>();

export const getCorrelationID = () => {
  const asyncStore = asyncLocalStorage.getStore();
  return asyncStore?.correlationID || "Some Thibg Went Wrong";
};
