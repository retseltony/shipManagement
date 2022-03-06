import type { Ship } from "../domain/Ship";
import type { ShipsStore } from "../domain/ShipsStore";

type CreateShipStore = Pick<
  ShipsStore,
  "ships" | "createShip"
>

const CreateShipUseCase = (store: CreateShipStore) => {
  const updatedCounter = store.counter
    ? updateBy(store.counter)
    : store.counter;

  if (!updatedCounter || store.counter?.value === updatedCounter?.value) return;

  store.setCounter(updatedCounter);

  return () => store.updateCounter(updatedCounter);
};

export { CreateShipUseCase };