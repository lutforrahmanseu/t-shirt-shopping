import React from "react";
import Special from "../Special/Special";

const Myself = ({ house }) => {
  return (
    <div>
      <h3>My self</h3>
      <p>
        <small>House:{house}</small>
        <section>
          <Special></Special>
        </section>
      </p>
    </div>
  );
};

export default Myself;
