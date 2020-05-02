import React from 'react';

import { Routing } from 'components';

function RoutingList({ routes }) {
  function renderRoute({ component, exact, key, path }) {
    return <Routing {...{ component, exact, key, path }} />;
  }

  return routes.map(renderRoute);
}

export default RoutingList;