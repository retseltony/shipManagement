import React from "react";

const NoShips = () => {
  return (
    <div className="card text-white bg-warning row d-flex m-5">
      <div className="card-header">No ships to list</div>
      <div className="card-body">
      <h4 className="card-title">No ship has been registered in the system.</h4>
      <p className="card-text">
        You can start adding the first one by pressing the Add button on the top right side on the screen.
      </p>
    </div>
    </div>
  );
};

export default NoShips;