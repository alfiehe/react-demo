import React from "react";

export const themes = {
  light: {
    foreground: '#000000',
    background: 'yellow',
  },
  dark: {
    foreground: '#ffffff',
    background: 'red',
  }
};

/**
 * * 创建一个 Context 对象
 */
export const ThemeContext = React.createContext(themes.light); // themes.light

ThemeContext.displayName = 'MyThemeContext';

console.log('创建一个Context对象', ThemeContext);
