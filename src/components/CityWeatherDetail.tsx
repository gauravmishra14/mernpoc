import React from "react";
import { connect } from "react-redux";
import { ICityDetailProps, IForecast } from "../utils/InterfacePools";

const mapDispatchToProps = (state: ICityDetailProps) => {
  const { weather } = state;
  return {
    weather
  };
};

const CityWeatherDetails = (props: ICityDetailProps) => {
  console.log(props.weather);
  return (
    <div>
      Look here for city weather details
      {/* {props.weather
        ? props.weather.weather.location && props.weather.weather.forecasts.map(
            (arr: IForecast, index: string) => (
              <p key={index}>
                {arr.date},{arr.text}
              </p>
            )
          )
        : null} */}
    </div>
  );
};

export default connect(mapDispatchToProps, null)(CityWeatherDetails);
