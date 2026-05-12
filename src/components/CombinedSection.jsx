import React from 'react';
import Projects from './Projects';
import Certificates from './Certificates';

const CombinedSection = () => {
  return (
    <div className="combined-sections">
      <Projects />
      <Certificates />
    </div>
  );
};

export default CombinedSection;