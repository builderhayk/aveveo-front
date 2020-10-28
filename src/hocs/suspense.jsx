import React, { Suspense } from 'react';

const suspense = (Component, loader = <div />) => (props) => (
  <Suspense fallback={loader}>
    <Component {...props} />
  </Suspense>
);

export default suspense;
