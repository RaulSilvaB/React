import { set } from "lodash";
import { useState } from "react";

const SomarNumeros = () => {
  const [number, SetNumber] = useState();

  return (
    <div>
      <p>Quanto é 300 + 58</p>
      <button
        onClick={() => {
          SetNumber(300 + 58);
        }}
      >
        Somar: {number}
      </button>
    </div>
  );
};

export default SomarNumeros;
