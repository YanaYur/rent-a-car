import { SET_CAR_LIST, SET_PARAMS } from "../types";

export function setAvailableCars(cars) {
  debugger
  return { type: SET_CAR_LIST, payload: cars };
}
export function setParams(params) {
  return { type: SET_PARAMS, payload: params };
}
