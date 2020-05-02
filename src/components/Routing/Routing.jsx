import React from 'react';
import { Route } from 'react-router-dom';

function Routing({ component, exact, key, path }) {
  return (
    <Route {...{ component, exact, key, path }} />
  );
}

export default Routing;