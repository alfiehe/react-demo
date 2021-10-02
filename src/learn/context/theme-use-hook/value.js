import React from "react";
import { ThemeContext  } from "../context";

const Value = () => {
  const theme = React.useContext(ThemeContext);
  return <p>{ JSON.stringify(theme) }</p>
}

export default Value;