import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Raul", "Vivian", "King-Kong", "teste"]);

  const [user] = useState([
    { id: 1, name: "raul", age: 23 },
    { id: 2, name: "vivian", age: 19 },
    { id: 3, name: "King-Kong", age: 0 },
    { id: 4, name: "teste", age: 0 },
  ]);

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ol>
        {user.map((use) => (
          <li key={use.id}>
            {use.id} - {use.name} - {use.age}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ListRender;
