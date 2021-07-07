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

export const three: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Good Morning",
    subtitle: "Wake Up Refreshed",
    time: 3,
    image: require("../assets/images/meditate1.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Good Afternoon",
    subtitle: "Keep It Up",
    time: 3,
    image: require("../assets/images/meditate2.jpg"),
  },
  {
    id: uuid(),
    order: 3,
    title: "Good Sleep",
    subtitle: "Drift Off To Sleep",
    time: 3,
    image: require("../assets/images/sleep.jpg"),
  },
];

export const five: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Good Morning",
    subtitle: "Rise And Shine",
    time: 5,
    image: require("../assets/images/meditate3.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Good Afternoon",
    subtitle: "Stay Refreshed",
    time: 5,
    image: require("../assets/images/meditate4.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Good Sleep",
    subtitle: "Get Some Rest",
    time: 5,
    image: require("../assets/images/rocks.jpg"),
  },
];

export const ten: Meditation[] = [
  {
    id: uuid(),
    order: 1,
    title: "Good Morning",
    subtitle: "Wake Up Relaxed",
    time: 10,
    image: require("../assets/images/tea.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Good Afternoon",
    subtitle: "Keep Going",
    time: 10,
    image: require("../assets/images/meditate5.jpg"),
  },
  {
    id: uuid(),
    order: 2,
    title: "Good Sleep",
    subtitle: "Drift Off To Sleep",
    time: 10,
    image: require("../assets/images/sleep2.jpg"),
  },
];

export const meditations = {
  three,
  five,
  ten,
};
