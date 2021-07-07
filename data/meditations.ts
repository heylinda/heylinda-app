import { ImageSourcePropType } from "react-native";
import { v4 as uuid } from "uuid";

export interface Meditation {
  id: string;
  title: string;
  subtitle: string;
  time: number;
  order: number;
  image: ImageSourcePropType;
}
export interface MeditationItem {
  item: Meditation;
}

export const short: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Morning",
    subtitle: "Wake Up Refreshed",
    time: 3,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: uuid(),
    order: 3,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
];

export const medium: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
];

export const long: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
];

export const meditations = {
  short,
  medium,
  long,
};
