import Actions from "./Actions";
import axios from "axios";
import { baseUrl, queryParamForCity } from "../utils/Apis";

export const weatherDetail = (payload: Object) => {
  return {
    type: Actions.GET_WEATHER_DETAILS,
    payload: payload
  };
};

export const hitApi = () => {
  return {
    type: Actions.HITTING_API
  };
};

export const resetWeatherDetail = () => {
  return {
    type: Actions.RESET_WEATHER_DETAILS
  };
};

export const getWeatherDetail = (city: string) => {
  console.log("fired weather details");
  console.log(city);
  const url = baseUrl + queryParamForCity + city;
  console.log(url);
  return (dispatch: any) => {
    dispatch(hitApi);
    axios
      .get(url)
      .then(Response => {
        console.log(Response);
        // const data = Response.data;
        // dispatch(resetWeatherDetail);
        // dispatch(weatherDetail(data));
      })
      .catch(err => console.log(err));
  };
};
