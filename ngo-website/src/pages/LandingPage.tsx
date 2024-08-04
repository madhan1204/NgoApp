import React from 'react';
import { Mission, Banner, CoreValues, Achievements } from '../components/LandingHero'; // Adjust import paths

const AboutUs: React.FC = () => {
  return (
    <div className='pt-16'>
      <Mission />
      <Banner />
      <CoreValues />
      <Achievements />
    </div>
  );
};

export default AboutUs;
