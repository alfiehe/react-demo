import React from "react";
import { ThemeContext  } from "../context";

class Button extends React.Component {

  // 使用静态方法挂裁 ThemeContext
  static contextType = ThemeContext;

  componentDidMount() {
    console.log('Button componentDidMount..., this.context', this.context);
  }
  componentDidUpdate() {
    console.log('Button componentDidUpdate..., this.context', this.context);
  }

  render() {
    let props = this.props;
    let theme = this.context;
    console.log('Button render..., this.context', this.context);
    return (
        <button
          { ...props }
          style={{ backgroundColor: theme.background }}
        >theme button</button>
    );
  }
}

// Button.contextType = ThemeContext;

export default Button;
