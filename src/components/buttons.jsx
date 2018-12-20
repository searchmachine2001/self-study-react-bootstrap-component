import React, { Component } from "react";
import Button from "./elements/button";
import ButtonGroup from "./elements/buttonGroup";

class Buttons extends Component {
  state = {
    group1: {
      name: "group1",
      rActive: 2
    },
    group2: {
      name: "group2",
      rActive: 1
    }
  };

  handleClick = () => {
    alert("call");
  };

  onRadioClick = selected => {
    this.setState({ rActive: selected });
  };

  render() {
    return (
      <div>
        <Button
          btnClass="btn-primary"
          label="Primary Button"
          iconClass="fa fa-home"
          iconPosition="left"
          isDisabled={false}
          handleClick={this.handleClick}
          tag="a"
          href="/"
        />
        <Button
          btnClass="btn-secondary"
          label="Secondary Button"
          iconClass="fa fa-home"
          iconPosition="left"
          isDisabled={false}
          tag="button"
        />
        <Button
          btnClass="btn-success"
          label="Success Button"
          iconClass="fa fa-home"
          iconPosition="left"
          isDisabled={false}
          tag="button"
        />
        <Button
          btnClass="btn-warning"
          label="Warning Button"
          iconClass="fa fa-dashboard"
          iconPosition="right"
          isDisabled={false}
          tag="a"
          href="google.com"
        />
        <Button
          btnClass="btn-outline-primary"
          label="Outline Primary"
          iconClass="fa fa-dashboard"
          iconPosition="right"
          isDisabled={false}
        />

        <Button
          btnClass="btn-outline-primary btn-lg"
          label="Outline Primary"
          iconClass="fa fa-dashboard"
          iconPosition="right"
          isDisabled={false}
        />

        <Button
          btnClass="btn-outline-primary btn-sm"
          label="Outline Primary"
          iconClass="fa fa-dashboard"
          iconPosition="right"
          isDisabled={false}
        />
        <Button
          btnClass="btn-outline-primary btn-block"
          label="Outline Primary"
          iconClass="fa fa-dashboard"
          iconPosition="right"
          isDisabled={false}
        />

        <h2 className="mt-4">Button Group</h2>
        <ButtonGroup type="radio" name={"group1"}>
          <Button
            btnClass="btn-secondary"
            label="Radio 1"
            onRadioClick={() => this.onRadioClick(1)}
            active={this.state.rActive === 1}
          />
          <Button
            btnClass="btn-secondary"
            label="Radio 2"
            onRadioClick={() => this.onRadioClick(2)}
            active={this.state.rActive === 2}
          />
          <Button
            btnClass="btn-secondary"
            label="Radio 3"
            onRadioClick={() => this.onRadioClick(3)}
            active={this.state.rActive === 3}
          />
        </ButtonGroup>
        <p>Selected: {this.state.rActive}</p>

        <h2 className="mt-10">Button Group</h2>
        <ButtonGroup type="radio" name="group2">
          <Button
            btnClass="btn-secondary"
            label="Radio 1"
            onRadioClick={() => this.onRadioClick(1)}
            active={this.state.rActive === 1}
          />
          <Button
            btnClass="btn-secondary"
            label="Radio 2"
            onRadioClick={() => this.onRadioClick(2)}
            active={this.state.rActive === 2}
          />
          <Button
            btnClass="btn-secondary"
            label="Radio 3"
            onRadioClick={() => this.onRadioClick(3)}
            active={this.state.rActive === 3}
          />
        </ButtonGroup>
        <p>Selected: {this.state.rActive}</p>
      </div>
    );
  }
}

export default Buttons;
