import React from 'react';
import {connect} from 'react-redux';
import {ICityDetailProps} from '../utils/InterfacePools'

const mapDispatchToProps = (state: ICityDetailProps) => {
    const {weather} = state
    return {
      weather: weather
    }
  }

const CityWeatherDetails = (props: ICityDetailProps) => {
  console.log(props.weather)
    return(
        <div>
            Look here for city weather details
        </div>
    )
}

export default connect(mapDispatchToProps,null) (CityWeatherDetails)