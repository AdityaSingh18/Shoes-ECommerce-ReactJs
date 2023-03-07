import { Fragment } from 'react';

import ShoesSummary from './ShoesSummary';
import AvailableShoes from './AvailableShoes';

const Shoes = () => {
  return (
    <Fragment>
      <ShoesSummary />
      <AvailableShoes />
    </Fragment>
  );
};

export default Shoes;
