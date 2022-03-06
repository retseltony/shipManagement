import type { Ship } from "./Ship";

interface ShipsStore {
  // State
  ships: Ship[] | undefined;
  shipSelected: Ship | undefined;
  isLoading: boolean;
  isUpdating: boolean;

  // Actions
  loadShips(): Promise<Ship[]>;
  getShip(shipId: string): Promise<Ship>
  setShip(ship: Ship): void;
  updateShip(ship: Ship): Promise<string>;
  createShip(ship: Ship): Promise<string>;
  deleteShip(ship: Ship): Promise<string>;
}

export type { ShipsStore };