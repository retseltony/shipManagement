
export interface Ship {
    id: string;
    name: string;
    length: number;
    width: number;
    code: string;
}

export type ShipTableType = { ships: Ship[], rowActive: string | undefined, currentShip: Ship | undefined, hasShips: boolean, setCurrentShip: (value: any) => void, deleteShip: (id: string) => void }
export type ShipRowType = { ship: Ship, rowActive: string | undefined, setCurrentShip: (value: any) => void, currentShip: Ship | undefined, deleteShip: (id: string) => void }
