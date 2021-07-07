import { Meditation, meditations } from "../data/meditations";

export const useMeditation = (id: string): Meditation => {
  // @ts-ignore next-line
  const arr = Object.values(meditations).flat();

  const meditation = arr.find((m: Meditation) => m.id === id);
  return meditation;
};
