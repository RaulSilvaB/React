import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Raul", "Vivian", "King-Kong", "teste"]);

  return (
    <div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <ol>
        <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
        <li>{list[3]}</li>
      </ol>
    </div>
  );
};

export default ListRender;
