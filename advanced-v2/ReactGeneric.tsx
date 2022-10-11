import * as React from "react";

interface ITable<IItem> {
  items: IItem[];
  render: (item: IItem) => React.ReactNode;
}

function Table<IItem>(props: ITable<IItem>) {
  return null;
}

export default function App() {
  return (
    <Table<{ id: number; name: string }>
      items={[{ id: 1, name: "hello" }]}
      render={(item) => <div>{item.name}</div>}
    ></Table>
  );
}
