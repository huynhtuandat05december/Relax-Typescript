export type Obj = {
  a: "a";
  a1: "a1";
  a2: "a2";
  b: "a";
  b1: "b1";
  b2: "b2";
};

type ValueOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K];
};

type newUnion = ValueOfKeysStartingWithA<Obj>;
