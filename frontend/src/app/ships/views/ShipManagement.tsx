import React from "react";
import { NavLink } from "react-router-dom";
import { RecoilValue, useRecoilValue, useSetRecoilState } from "recoil";
import { Ship } from "../domain/Ship";
import { getShips, shipSelected } from "../infrastructure/ShipsContainer";
import NoShips from "./NoShips";
//import useReactHoochShipsStore from '../infrastructure/ShipsContainer';
import ShipRow from "./ShipRow";
import ShipTable from "./ShipTable";

const ShipManagement = () => {
  //const { loadShips, shipsState } = useReactHoochShipsStore()
  const ships: Ship[] = useRecoilValue(getShips);
  const setCurrentShip = useSetRecoilState(shipSelected);
  const rowActive = "c804beb9-400f-4c5a-914a-75bd83c6ed35";

  return (
    <>
      <ShipTable {...{ ships, rowActive, setCurrentShip }} />
      <NoShips />
    </>
  );
};

export default ShipManagement;
