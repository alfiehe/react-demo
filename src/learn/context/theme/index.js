import React from "react";
import { ThemeContext, themes } from '../context';
import Toolbar from "./toolbar";
import Value from "./value";


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }));
    };
  }
  render () {
    return (
      <section>
        <h4>Theme</h4>
        <div style={{ border: '1px solid #ddd', padding: '15px' }}>
          <ThemeContext.Provider value={this.state.theme}>
            <Value />
            <Toolbar changeTheme={this.toggleTheme} />
          </ThemeContext.Provider>
        </div>
      </section>
    )
  }
}

export default Index;