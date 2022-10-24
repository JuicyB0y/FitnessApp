import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <InfinitySpin />
    </div>
  );
};

export default Loader;
