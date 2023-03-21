import { StalkPrice } from "@/types";
export const setSunday = (price: StalkPrice) => ({
  type: "SET_SUNDAY",
  price,
});

export const setMondayAm = (price: StalkPrice) => ({
  type: "SET_MON_AM",
  price,
});

export const setMondayPm = (price: StalkPrice) => ({
  type: "SET_MON_PM",
  price,
});

export const setTuesdayAm = (price: StalkPrice) => ({
  type: "SET_TUE_AM",
  price,
});

export const setTuesdayPm = (price: StalkPrice) => ({
  type: "SET_TUE_PM",
  price,
});

export const setWednesdayAm = (price: StalkPrice) => ({
  type: "SET_WED_AM",
  price,
});

export const setWednesdayPm = (price: StalkPrice) => ({
  type: "SET_WED_PM",
  price,
});

export const setThursdayAm = (price: StalkPrice) => ({
  type: "SET_THUR_AM",
  price,
});

export const setThursdayPm = (price: StalkPrice) => ({
  type: "SET_THUR_PM",
  price,
});

export const setFridayAm = (price: StalkPrice) => ({
  type: "SET_FRI_AM",
  price,
});

export const setFridayPm = (price: StalkPrice) => ({
  type: "SET_FRI_PM",
  price,
});

export const setSaturdayAm = (price: StalkPrice) => ({
  type: "SET_SAT_AM",
  price,
});

export const setSaturdayPm = (price: StalkPrice) => ({
  type: "SET_SAT_PM",
  price,
});

export const setKabuAmount = (price: StalkPrice) => ({
  type: "SET_KABU_AMOUNT",
  price,
});

export const reset = () => ({
  type: "RESET",
});
