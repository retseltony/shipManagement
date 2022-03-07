import { Ship } from "./Ship";

export interface ShipsState{
    ships: Ship[];
    shipSelected: Ship | undefined;
    isLoading: boolean;
    isUpdating: boolean;
}