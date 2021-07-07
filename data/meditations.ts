import { ImageSourcePropType } from "react-native";

export interface Meditation {
  id: string;
  title: string;
  subtitle: string;
  time: number;
  image: ImageSourcePropType;
}
export interface MeditationItem {
  item: Meditation;
}

export const short: Meditation[] = [
  {
    id: "1",
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: "2",
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
];

export const medium: Meditation[] = [
  {
    id: "3",
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: "4",
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
];

export const long: Meditation[] = [
  {
    id: "5",
    title: "Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: "6",
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
