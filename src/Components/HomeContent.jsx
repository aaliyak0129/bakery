import React from 'react';
import Welcome from './Welcome';
import Cards from './Cards';
import Highlight from './Highlight';
import Service from './Service';
import Chefsection from './Chefsection';
import Customer from './Customer';
import Videoslider from './Videoslider';
import Slider from './Slider';

const HomeContent = () => {
  return (
    <>
    <Slider/>
      <Welcome />
      <Videoslider />
      <Cards />
      <Highlight />
      <Service />
      <Chefsection />
      <Customer />
    </>
  );
};

export default HomeContent;
