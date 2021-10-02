import React from "react";
import { ThemeContext  } from "../context";

const Button = (props) => {

  const theme = React.useContext(ThemeContext);

  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor: theme.background }}
    >theme button</button>
  );
};

export default Button;
