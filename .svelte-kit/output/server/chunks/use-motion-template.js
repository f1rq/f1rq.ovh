import sync from "framesync";
import { m as motionValue } from "./navigations.js";
const useCombineMotionValues = (values, combineValues) => {
  let subscriptions = [];
  let vals = values;
  const unsubscribe = () => {
    subscriptions.forEach((unsubscribe2) => unsubscribe2());
  };
  const subscribe = () => {
    subscriptions = vals.map((val) => val.onChange(handler));
    updateValue();
  };
  const value = motionValue(combineValues(), () => {
    unsubscribe();
    subscribe();
    return unsubscribe;
  });
  let updateValue = () => {
    value.set(combineValues());
  };
  const handler = () => {
    sync.update(updateValue, false, true);
  };
  value.reset = (_values, _combineValues) => {
    vals = _values;
    unsubscribe();
    updateValue = () => {
      value.set(_combineValues());
    };
    subscribe();
  };
  return value;
};
const useMotionTemplate = (fragments, ...values) => {
  let numFragments = fragments.length;
  const buildValue = () => {
    let output = ``;
    for (let i = 0; i < numFragments; i++) {
      output += fragments[i];
      const value2 = values[i];
      if (value2) output += values[i].get();
    }
    return output;
  };
  const value = useCombineMotionValues(values, buildValue);
  value.resetInner = value.reset;
  value.reset = (f, ...vs) => {
    numFragments = f.length;
    value.resetInner(vs, buildValue);
  };
  return value;
};
export {
  useMotionTemplate as u
};
