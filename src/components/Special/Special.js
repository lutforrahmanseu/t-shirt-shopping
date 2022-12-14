import React, { useContext } from "react";
import { RingContext } from "../Grandpa/Grandpa";

const Special = () => {
  const [house, setHouse] = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <section>
        <p>
          <small>Gift:{house}</small>
        </p>
        <button onClick={() => setHouse(house + 1)}>Increase</button>
      </section>
    </div>
  );
};

export default Special;
