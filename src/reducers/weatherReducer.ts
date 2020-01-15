import Action from "../actions/Actions";
import {
  IAction,
  IWeather,
} from "../utils/InterfacePools";

const weatherModel: IWeather = {
  location: {},
  current_observation: {},
  forecast: []
};

const initState = {
  weather: weatherModel
};

const weatherReducer = (state: Object = initState, action: IAction) => {
  switch (action.type) {
    case Action.GET_WEATHER_DETAILS:
      return {
        ...state,
        weather: action.payload
      };
    default:
      return state;
  }
};

export default weatherReducer;
