import React from 'react';
import { ThemeProvider } from 'styled-components';

export const lightTheme = {
  background: {
    color: '#282C34',
  },
  color: {
    default: 'white',
  },
  font: {
  },
};

function LightTheme({ children }) {
  return (
    <ThemeProvider {...{ theme: lightTheme }}>
      {children}
    </ThemeProvider>
  );
}

export default LightTheme;