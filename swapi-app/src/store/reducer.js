import { FETCH_DATA, CLEAR_DATA } from "./actions";

const initialState = {
  data: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, data: action.payload };

    case CLEAR_DATA:
      return { ...state, data: null };

    default:
      return state;
  }
} 