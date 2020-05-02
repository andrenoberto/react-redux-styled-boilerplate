import React from 'react';
import { Switch } from 'react-router';

import { RoutingList } from 'components';

function RouteSwitch() {
  return (
    <Switch>
      <RoutingList />
    </Switch>
  );
}

export default RouteSwitch;