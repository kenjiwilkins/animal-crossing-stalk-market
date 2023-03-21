import { ChartMap } from "@/types";
const [BOMB_TYPE, WAVE_TYPE, STABLE_TYPE, DECLINE_TYPE] = [
  "BOMB",
  "WAVE",
  "STABLE",
  "DECLINE",
];

export const getStalkChart = (data: ChartMap, sunday: number): string => {
  if (data[0] > sunday) {
    return WAVE_TYPE;
  } else {
    return STABLE_TYPE;
  }
};

export const getProfit = (
  data: ChartMap,
  sunday: number,
  kabuAmount: number
): number => {
  // find the index of the last non-zero value
  const lastNonZeroIndex = data.reduce((acc, val, index) => {
    if (val > 0) {
      return index;
    } else {
      return acc;
    }
  });
  if (lastNonZeroIndex <= 0) {
    return 0;
  } else {
    return kabuAmount * (data[lastNonZeroIndex] - sunday);
  }
};
