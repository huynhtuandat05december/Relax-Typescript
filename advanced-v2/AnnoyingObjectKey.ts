interface ApiData {
  "maps:longitude": string;
  "maps:latitude": string;
  test: boolean;
}

type RemoveMapsFrom0bj<T> = {
  [K in keyof T as RemoveMaps<K>]: T[K];
};

type DesiredShape = RemoveMapsFrom0bj<ApiData>;

type RemoveMaps<T> = T extends `maps:${infer U}` ? U : T;
