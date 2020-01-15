export interface IRadioProps {
  id?: string,
  changed?: undefined | void | Function,
  value?: string,
  label?: string,
  name?: string,
}

export interface IListState {
  selectedOption?: string,
  submitHasError: boolean,
}

export interface ILocation {
  woeid: number,
  city: string,
  region: string,
  country: string
  lat?: number,
  long?: number,
  timezone_id?: string,
}

export interface IWind {
  chill?: number,
  direction?: number,
  speed?: number,
}

export interface IAtmosphere {
  humidity?: number,
  visibility?: number,
  pressure?: number,
  rising?: number,
}

export interface IAstronomy {
  sunrise?: string,
  sunset?: string,
}

export interface ICondition {
  text?: string,
  code?: number,
  temperature?: number,
}

export interface ICurrentObservation {
  wind?: IWind,
  atomsphere?: IAtmosphere,
  astronomy?: IAstronomy,
  condition?: ICondition,
}

export interface IForecast {
  day: string,
  date: number,
  low: number,
  high: number,
  text: string,
  code: string,
}

export interface IWeather {
  location?: ILocation | {},
  current_observation?: ICurrentObservation | {},
  forecast?: IForecast[] | [],
}

export interface ICityDetailProps {
    weather?: IWeather,
  }

export interface IAction {
  type: string,
  payload: Object,
}
