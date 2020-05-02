import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import { history, store } from 'redux/store';
import { RouteSwitch } from 'containers';

function App() {
  return (
    <Provider {...{ store }}>
      <ConnectedRouter {...{ history }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <RouteSwitch />
        </Suspense>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
