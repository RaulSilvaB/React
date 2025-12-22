import { useState } from "react";

const ManageData = () => {
  const [number, serNumber] = useState(0 + 0);

  return (
    <div>
      <p>
        <strong className={number ? "btn-red" : ""}>
          Soma de 356 + 456 = {number}
        </strong>
      </p>
      <button onClick={() => serNumber(356 + 456)}> Ver resultado </button>
    </div>
  );
};

export default ManageData;
