import type { ActionKind } from "./ActionsKind";

export interface Action {
    type: ActionKind;
    payload?: any;
}