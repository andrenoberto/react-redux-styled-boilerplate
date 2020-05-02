import React from 'react';
import { Route } from 'react-router-dom';

function Routing({ component, exact, path }) {
  return (
    <Route {...{ component, exact, path }} />
  );
}

export default Routing;