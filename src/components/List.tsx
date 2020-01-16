import React, { Component } from "react";
import "../App.css";
import { IListState } from "../utils/InterfacePools";
import Radio from "./common/Radio";
import { connect } from "react-redux";
import { getWeatherDetail, weatherDetail, hitApi, resetWeatherDetail } from "../actions/ActionCreator";
import axios from 'axios';
import store from "../store";

const dispatchMapToProps = (dispatch: any) => {
  return {
    getWeatherDetail: (a: string) => dispatch(getWeatherDetail(a))
  };
};

class List extends Component<{}, IListState> {
  state = {
    selectedOption: "",
    submitHasError: false
  };
  private handleOptionChange = (e: any) => {
    this.setState({
      selectedOption: e.target.value,
      submitHasError: false
    });
  };
  handleApiCall = (a: string) => {
    const url = "http://localhost:5000/city?city=" + a;
    store.dispatch(hitApi());
    store.dispatch(resetWeatherDetail());
    axios
      .get(url)
      .then(res => {
        console.log(res.data[0])
        const app = res.data[0];
        store.dispatch(weatherDetail(app))
      })
      .catch(err => console.log(err));
  };
  private handleSubmit = () => {
    let selectedCity = this.state.selectedOption;
    if (selectedCity) {
      this.setState({ submitHasError: false });
      this.handleApiCall(selectedCity);
    } else {
      this.setState({ submitHasError: true });
    }
  };
  render() {
    const { submitHasError } = this.state;
    return (
      <div className="list_wrapper">
        <p>Select a City and click submit button to get weather details</p>
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
