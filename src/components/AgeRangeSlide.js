import React, { useState } from 'react';

const AgeRangeSlider = () => {
  const [ageRange, setAgeRange] = useState({ min: 18, max: 30 });

  const handleSliderChange = (e) => {
    setAgeRange({ ...ageRange, [e.target.name]: parseInt(e.target.value, 10) });
  };

  return (
    <div>
      <label htmlFor="minAge">Min Age: {ageRange.min}</label>
      <input
        type="range"
        id="minAge"
        name="min"
        min={18}
        max={80}
        value={ageRange.min}
        onChange={handleSliderChange}
      />

      <label htmlFor="maxAge">Max Age: {ageRange.max}</label>
      <input
        type="range"
        id="maxAge"
        name="max"
        min={18}
        max={80}
        value={ageRange.max}
        onChange={handleSliderChange}
      />

      <p>Selected Age Range: {ageRange.min} - {ageRange.max}</p>
    </div>
  );
};

export default AgeRangeSlider;
