import React from "react";
import { ThemeContext, themes } from '../context';
import Toolbar from "./toolbar";
import Value from "./value";


const Index = () => {
  const [theme, setTheme] = React.useState(themes.light);

  const toggleTheme = () => {
    setTheme(theme => theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <section>
      <h4>Theme useContext</h4>
      <div style={{ border: '1px solid #ddd', padding: '15px' }}>
        <ThemeContext.Provider value={theme}>
          <Value />
          <Toolbar changeTheme={toggleTheme} />
        </ThemeContext.Provider>
      </div>
    </section>
  )
}

export default Index;