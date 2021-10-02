import React from "react";
import { ThemeContext  } from "../context";

const Value = () => {
  return (
    <ThemeContext.Consumer>
      {
        value => <p style={{ color: 'red' }}>{ JSON.stringify(value) }</p>
      }
    </ThemeContext.Consumer>
  )
}

export default Value;