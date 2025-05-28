import { useEffect } from "react";

const List = ({ filterFunction }) => {
      useEffect(() => {
    console.log("List Component Rendered!");
  });
  return (
  
    <ul>
      {filterFunction().map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
export default List