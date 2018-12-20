import React, { Component } from "react";
import Button from "./button";
class ButtonGroup extends Button {
  classes(classes, selected) {
    return selected ? "btn  active " + classes : "btn " + classes;
  }
  render() {
    return (
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        {this.props.children.map(child => (
          <label
            key={child.props.label}
            className={this.classes(child.props.btnClass, child.props.active)}
            onClick={child.props.onRadioClick}
          >
            <input
              type="radio"
              name={this.props.name}
              autoComplete="off"
              value={child.props.label}
            />
            {child.props.label}
          </label>
        ))}
      </div>
    );
  }
}

export default ButtonGroup;
