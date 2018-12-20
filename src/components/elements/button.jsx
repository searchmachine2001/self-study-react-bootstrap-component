import React, { Component } from "react";

class Button extends Component {
  btnContent = () => {
    const { iconClass, iconPosition, label } = this.props;
    const icon = <i className={iconClass} />;

    return iconPosition === "left" ? (
      <React.Fragment>
        {icon} {label}
      </React.Fragment>
    ) : (
      <React.Fragment>
        {label} {icon}
      </React.Fragment>
    );
  };

  render() {
    const { btnClass, isDisabled, handleClick, tag: Tag, href } = this.props;
    const TagName = Tag || "button";

    return (
      <TagName
        type={TagName === "button" ? "button" : null}
        href={href && TagName === "a" ? href : ""}
        onClick={() => handleClick && handleClick()}
        className={"btn " + btnClass}
        disabled={isDisabled}
      >
        {this.btnContent()}
      </TagName>
    );
  }
}

export default Button;
