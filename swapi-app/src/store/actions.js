import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const CLEAR_DATA = "CLEAR_DATA";

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://swapi.py4e.com/api/people/1/");
      dispatch({
        type: FETCH_DATA,
        payload: res.data,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const clearData = () => ({
  type: CLEAR_DATA,
}); 