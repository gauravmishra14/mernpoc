import React from "react";
import { IRadioProps } from "../../utils/InterfacePools";
// import "../../../src/Radio.css"

class Radio extends React.Component<IRadioProps, {}> {
  render() {
      const {id, value, name, label, changed} = this.props
    return (
      <div className="RadioButton">
        <input
          id={id}
          onChange={(changed) => console.log(this.props)}
          value={value}
          type="radio"
          name={name}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}

export default Radio;
