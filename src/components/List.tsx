import React, { Component } from "react";
import "../App.css";
import { IListState } from "../utils/InterfacePools";
import Radio from "./common/Radio";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getWeatherDetails } from "../actions/ActionCreator";
import axios from "axios";
import {baseUrl, queryParamForCity} from '../utils/Apis'

const dispatchMapToProps = (dispatch: any) => {
  return {};
};

class List extends Component<{}, IListState> {
  state = {
    selectedOption: "",
    submitHasError: false
  };
  private handleOptionChange = (e: any) => {
    this.setState({
      selectedOption: e.target.value,
      submitHasError: false,
    });
  };
  private callCityDetailsApi = (city: string) => {
    axios.get(baseUrl+queryParamForCity+city).then(Response => console.log(Response))
  }
  private handleSubmit = () => {
    let a = this.state.selectedOption;
    if (a) {
      this.setState({ submitHasError: false });

      console.log(`selected city is ${a}`);
      this.callCityDetailsApi(a)
    } else {
      this.setState({ submitHasError: true });
      console.log(`please select a city`);
    }
  };
  render() {
    const { submitHasError } = this.state;
    return (
      <div className="list_wrapper">
        <p>Select a City and click submit button to get weather details</p>
        {/* <Radio value='sunnyvale' label='sunnyvale' name="country" changed={this.handleOptionChange}/>
          <Radio value='chicago' label='chicago' name="country"/>
          <Radio value='dallas' label='dallas' name="country"/> */}
        <form className="city_form">
          <div className="radio">
            <label>
              <input
                name="city"
                type="radio"
                value="sunnyvale"
                onChange={e => this.handleOptionChange(e)}
              />
              Sunnyvale
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="city"
                type="radio"
                value="chicago"
                onChange={e => this.handleOptionChange(e)}
              />
              Chicago
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                name="city"
                type="radio"
                value="dallas"
                onChange={e => this.handleOptionChange(e)}
              />
              Dallas
            </label>
          </div>
          <div className="link" onClick={this.handleSubmit}>
            Submit
            {submitHasError ? (
              <p className="submit-error error">Please select a city</p>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, dispatchMapToProps)(List);
