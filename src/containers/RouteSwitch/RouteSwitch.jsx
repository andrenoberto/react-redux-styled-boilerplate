import React from 'react';
import { Switch } from 'react-router';

import { RoutingList } from 'components';
import { routes } from 'routes';

function RouteSwitch() {
  return (
    <Switch>
      <RoutingList {...{ routes }} />
    </Switch>
  );
}

export default RouteSwitch;
