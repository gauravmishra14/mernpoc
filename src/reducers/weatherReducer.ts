import Actions from "../actions/Actions";
import { IAction, IWeather } from "../utils/InterfacePools";

const weatherModel: IWeather = {
  location: {},
  current_observation: {},
  forecasts: []
};

const initState = {
  weather: weatherModel
};

const weatherReducer = (state: Object = initState, action: IAction) => {
  switch (action.type) {
    case Actions.RESET_WEATHER_DETAILS:
      return initState;

    case Actions.GET_WEATHER_DETAILS:
      console.log("firing details");
      console.log(action.payload);
      return {
        ...state,
        weather: action.payload
      };

    case Actions.HITTING_API:
      console.log("hitting api");
      return state;

    default:
      return state;
  }
};

export default weatherReducer;
