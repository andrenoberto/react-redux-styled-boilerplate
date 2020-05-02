import React, { Suspense } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';

import { RouteSwitch } from 'containers';
import { history, store } from 'redux/store';
import { GlobalStyle } from 'styles/components';
import { DarkTheme } from 'styles/themes';

function App() {
  return (
    <Provider {...{ store }}>
      <ConnectedRouter {...{ history }}>
        <DarkTheme>
          <GlobalStyle />
          <Suspense fallback={<h1>Loading...</h1>}>
            <RouteSwitch />
          </Suspense>
        </DarkTheme>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
