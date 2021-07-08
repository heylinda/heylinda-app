import * as React from "react";
import { StyleSheet } from "react-native";

import { Calendar as DefaultCalendar } from "react-native-calendars";
import { useThemeColor } from "../../../components/Themed";

export default function Calendar() {
  const white = useThemeColor({}, "white");
  const primary = useThemeColor({}, "primary");
  const gray900 = useThemeColor({}, "gray900");
  const text = useThemeColor({}, "text");

  return (
    <DefaultCalendar
      style={styles.calendar}
      theme={{
        backgroundColor: white,
        calendarBackground: white,
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: white,
        todayTextColor: primary,
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: white,
        arrowColor: gray900,
        monthTextColor: text,
        indicatorColor: "blue",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16,
      }}
    />
  );
}

const styles = StyleSheet.create({
  calendar: {
    marginRight: 14,
    marginBottom: 30,
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
