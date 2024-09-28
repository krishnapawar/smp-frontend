import React, { useState } from 'react';

const MultistepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <form id="msform">
      {/* progressbar */}
      <ul id="progressbar">
        <li className={step === 1 ? 'active' : ''}>Account Setup</li>
        <li className={step === 2 ? 'active' : ''}>Social Profiles</li>
        <li className={step === 3 ? 'active' : ''}>Personal Details</li>
      </ul>

      {/* fieldsets */}
      <fieldset>
      <div className="fieldset">
        {step === 1 && (
          <>
            <h2 className="fs-title">Create your account</h2>
            <h3 className="fs-subtitle">This is step 1</h3>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="pass" placeholder="Password" />
            <input type="password" name="cpass" placeholder="Confirm Password" />
            <button className="next action-button" onClick={nextStep}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="fs-title">Social Profiles</h2>
            <h3 className="fs-subtitle">Your presence on the social network</h3>
            <input type="text" name="twitter" placeholder="Twitter" />
            <input type="text" name="facebook" placeholder="Facebook" />
            <input type="text" name="gplus" placeholder="Google Plus" />
            <button className="previous action-button" onClick={prevStep}>
              Previous
            </button>
            <button className="next action-button" onClick={nextStep}>
              Next
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="fs-title">Personal Details</h2>
            <h3 className="fs-subtitle">We will never sell it</h3>
            <input type="text" name="fname" placeholder="First Name" />
            <input type="text" name="lname" placeholder="Last Name" />
            <input type="text" name="phone" placeholder="Phone" />
            <textarea name="address" placeholder="Address"></textarea>
            <button className="previous action-button" onClick={prevStep}>
              Previous
            </button>
            <a href="https://twitter.com/GoktepeAtakan" className="submit action-button" target="_top">
              Submit
            </a>
          </>
        )}
      </div>
      </fieldset>
    </form>
  );
};

export default MultistepForm;
