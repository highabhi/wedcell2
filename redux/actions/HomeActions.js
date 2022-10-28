import axios from "axios";
import { PROXY } from '../../config'

export const Getallitems = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Mehndi",
      }
    );

    console.log(response);

    dispatch({
      type: "FETCH_MEHNDI",
      payload: response.data,
    });

    console.log("working", response);
  } catch (error) {
    dispatch({
      type: "MEHNDI_REJECTED",
      payload: error.response,
    });
  }
};

export const Gethotels = () => async (dispatch) => {
  try {
    const response = await axios.post(
      `${PROXY}/item/getAll`,
      {
        category: "Hotel",
      }
    );

    dispatch({
      type: "FETCH_HOTEL",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "HOTEL_REJECTED",
      payload: error.response,
    });
  }
};
