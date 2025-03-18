import React from 'react';

const CoverageOptions = ({ formData, handleChange }) => {
  return (
    <div className="form-section">
      <h2>Coverage Options</h2>
      
      <div className="form-group">
        <label htmlFor="desiredCoverage">Desired Coverage Level *</label>
        <select
          id="desiredCoverage"
          name="desiredCoverage"
          value={formData.desiredCoverage}
          onChange={handleChange}
          required
        >
          <option value="">Select Coverage Level</option>
          <option value="basic">Basic Coverage</option>
          <option value="standard">Standard Coverage</option>
          <option value="premium">Premium Coverage</option>
        </select>
      </div>
      
      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="currentlyInsured"
          name="currentlyInsured"
          checked={formData.currentlyInsured}
          onChange={handleChange}
        />
        <label htmlFor="currentlyInsured">I am currently insured</label>
      </div>
      
      {formData.currentlyInsured && (
        <div className="form-group">
          <label htmlFor="currentProvider">Current Insurance Provider</label>
          <input
            type="text"
            id="currentProvider"
            name="currentProvider"
            value={formData.currentProvider}
            onChange={handleChange}
          />
        </div>
      )}
      
      <div className="form-group">
        <label htmlFor="additionalComments">Additional Information or Questions</label>
        <textarea
          id="additionalComments"
          name="additionalComments"
          value={formData.additionalComments}
          onChange={handleChange}
          rows="4"
        ></textarea>
      </div>
    </div>
  );
};

export default CoverageOptions;