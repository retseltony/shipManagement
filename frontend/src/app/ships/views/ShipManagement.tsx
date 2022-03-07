import React from "react";
import {  useRecoilState, useSetRecoilState } from "recoil";
import { Ship } from "../domain/Ship";
import { shipSelected } from "../atoms/ShipsAtoms";
import NoShips from "./NoShips";
import ShipTable from "./ShipTable";

const ShipManagement = ({ships}:{ships:Ship[]}) => {
  //const { loadShips, shipsState } = useReactHoochShipsStore()
  const [currentShip,setCurrentShip] = useRecoilState(shipSelected);
  const rowActive = currentShip ? currentShip.id: undefined;
  const hasShips = ships && ships.length > 0
  return (
    <>
      <ShipTable {...{ ships, rowActive, currentShip,setCurrentShip }} />
      {!hasShips && <NoShips/>}
    </>
  );
};

export default ShipManagement;
