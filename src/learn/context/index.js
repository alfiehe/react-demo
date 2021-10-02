import React from 'react';
import Theme from './theme';
import ThemeUseHook from './theme-use-hook';

function Context() {
  return (
    <section>
      <h3>Context</h3>
      <Theme />
      <ThemeUseHook />
    </section>
  );
}

export default Context;
