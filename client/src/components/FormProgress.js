import React from 'react';

const FormProgress = ({ currentStep, totalSteps }) => {
  return (
    <div className="form-progress">
      <div className="progress-bar">
        <div 
          className="progress-completed" 
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      <div className="step-indicator">
        Step {currentStep} of {totalSteps}
      </div>
    </div>
  );
};

export default FormProgress;

// components/FormNavigation.js
import React from 'react';

const FormNavigation = ({ currentStep, totalSteps, prevStep, nextStep, handleSubmit }) => {
  return (
    <div className="form-navigation">
      {currentStep > 1 && (
        <button type="button" onClick={prevStep} className="prev-button">
          Previous
        </button>
      )}
      
      {currentStep < totalSteps ? (
        <button type="button" onClick={nextStep} className="next-button">
          Next
        </button>
      ) : (
        <button type="submit" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      )}
    </div>
  );
};

export default FormNavigation;