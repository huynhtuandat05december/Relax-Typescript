import * as React from "react";

const MyComponent = (prop: { enable: boolean }) => {
  return null;
};

class MyClassComponent extends React.Component<{
  enable: boolean;
}> {}

type PropComponent<IComponent> = IComponent extends React.FC<infer Props>
  ? Props
  : IComponent extends React.Component<infer Props>
  ? Props
  : never;

const prop: PropComponent<typeof MyComponent> = {
  enable: true,
};

const prop1: PropComponent<MyClassComponent> = {
  enable: true,
};
