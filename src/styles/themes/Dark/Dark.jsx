import React from 'react';
import { ThemeProvider } from 'styled-components';

export const darkTheme = {
  background: {
    color: '#282C34',
  },
  color: {
    default: 'white',
  },
  font: {
    family: {
      default: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif`,
      code: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace`,
    },
    smoothing: {
      default: 'antialiased',
      osx: 'grayscale',
    }
  },
};

function DarkTheme({ children }) {
  return (
    <ThemeProvider {...{ theme: darkTheme }}>
      {children}
    </ThemeProvider>
  );
}

export default DarkTheme;