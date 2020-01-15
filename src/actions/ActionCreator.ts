import Actions from "./Actions";
import axios from 'axios';

export const weatherDetail = (payload: Object) => {
  return {
    type: Actions.GET_WEATHER_DETAILS,
    payload: payload
  };
}


export const getWeatherDetails = () => {
  return (dispatch:any) => {
    axios.get('url', {})
  }
}



