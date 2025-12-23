import { useState } from "react";



const ListRender = () => {
  const [list] = useState(["Raul", "Vivian", "King-Kong", "teste"]);

  const [user,setUser] = useState([
    { id: 1, name: "raul", age: 23 },
    { id: 2, name: "vivian", age: 19 },
    { id: 3, name: "King-Kong", age: 0 },
    { id: 4, name: "teste", age: 0 },
  ]);

  const deleteRandom = () =>{
    const randomNuber = Math.floor(Math.random() * 5)

    setUser((prevUser)  => {
        console.log(prevUser)

        return prevUser.filter((use) => randomNuber !== use.id)
    } )
  }

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
      <button onClick={deleteRandom}>Remover item</button>
    </div>
  );
};

export default ListRender;
