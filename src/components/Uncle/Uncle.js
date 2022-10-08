import React, { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = ({ house }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <section>
        <p>
          <small>House:{house}</small>
        </p>
        <p>
          <small>Money{money}</small>
        </p>
      </section>
    </div>
  );
};

export default Uncle;
