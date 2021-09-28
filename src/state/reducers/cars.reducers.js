import { SET_CAR_LIST, SET_PARAMS } from "../types";

const defaultInfo = {
  carList: null,
  params: { from: Date.now(), to: Date.now(), location: null },
};

export default function carsReducer(state = defaultInfo, action) {

  switch (action.type) {
    case SET_CAR_LIST:
      return { ...state, carList: action.payload };
    case SET_PARAMS:
      return { ...state, params: action.payload };
    default:
      return defaultInfo;
  }
}
