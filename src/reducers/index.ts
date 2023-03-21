import { combineReducers, Action } from "redux";
import { StalkPrice } from "@/types";

interface KabuAction extends Action {
  price: StalkPrice;
}

const initialState = {
  sunday: 0,
  monam: 0,
  monpm: 0,
  tueam: 0,
  tuepm: 0,
  wedam: 0,
  wedpm: 0,
  thuram: 0,
  thurpm: 0,
  friam: 0,
  fripm: 0,
  satam: 0,
  satpm: 0,
  kabuAmount: 0,
};

export const kabu = (state = initialState, action: KabuAction) => {
  switch (action.type) {
    case "SET_SUNDAY":
      return Object.assign({}, state, {
        sunday: action.price,
      });
    case "SET_MON_AM":
      return Object.assign({}, state, {
        monam: action.price,
      });
    case "SET_MON_PM":
      return Object.assign({}, state, {
        monpm: action.price,
      });
    case "SET_TUE_AM":
      return Object.assign({}, state, {
        tueam: action.price,
      });
    case "SET_TUE_PM":
      return Object.assign({}, state, {
        tuepm: action.price,
      });
    case "SET_WED_AM":
      return Object.assign({}, state, {
        wedam: action.price,
      });
    case "SET_WED_PM":
      return Object.assign({}, state, {
        wedpm: action.price,
      });
    case "SET_THUR_AM":
      return Object.assign({}, state, {
        thuram: action.price,
      });
    case "SET_THUR_PM":
      return Object.assign({}, state, {
        thurpm: action.price,
      });
    case "SET_FRI_AM":
      return Object.assign({}, state, {
        friam: action.price,
      });
    case "SET_FRI_PM":
      return Object.assign({}, state, {
        fripm: action.price,
      });
    case "SET_SAT_AM":
      return Object.assign({}, state, {
        satam: action.price,
      });
    case "SET_SAT_PM":
      return Object.assign({}, state, {
        satpm: action.price,
      });
    case "SET_KABU_AMOUNT":
      return Object.assign({}, state, {
        kabuAmount: action.price,
      });
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const reducers = combineReducers({
  kabu,
});
