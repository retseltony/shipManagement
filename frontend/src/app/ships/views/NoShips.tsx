import React from "react";

const NoShips = () => {
  return (
    <div className="card text-white bg-warning row d-flex m-5">
      <h4 className="alert-heading">No ships to list</h4>
      <p>
        {" "}
        No ship has been registered in the system. You can start adding the
        first one by pressing the "+" (add) button on the top right side on the
        screen.
      </p>
    </div>
  );
};

export default NoShips;