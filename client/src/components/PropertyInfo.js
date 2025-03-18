import React from 'react';

const PropertyInfo = ({ formData, handleChange }) => {
  return (
    <div className="form-section">
      <h2>Property Information</h2>
      
      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="hasProperty"
          name="hasProperty"
          checked={formData.hasProperty}
          onChange={handleChange}
        />
        <label htmlFor="hasProperty">I need property insurance</label>
      </div>
      
      {formData.hasProperty && (
        <>
          <div className="form-group">
            <label htmlFor="propertyAddress">Property Address *</label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              required={formData.hasProperty}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="propertyCity">City *</label>
              <input
                type="text"
                id="propertyCity"
                name="propertyCity"
                value={formData.propertyCity}
                onChange={handleChange}
                required={formData.hasProperty}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="propertyState">State *</label>
              <select
                id="propertyState"
                name="propertyState"
                value={formData.propertyState}
                onChange={handleChange}
                required={formData.hasProperty}
              >
                <option value="">Select State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                {/* Add more states here */}
                <option value="WY">Wyoming</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="propertyZipCode">Zip Code *</label>
              <input
                type="text"
                id="propertyZipCode"
                name="propertyZipCode"
                value={formData.propertyZipCode}
                onChange={handleChange}
                required={formData.hasProperty}
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="propertyType">Property Type *</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                required={formData.hasProperty}
              >
                <option value="">Select Type</option>
                <option value="single-family">Single-Family Home</option>
                <option value="condo">Condominium</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
                <option value="mobile">Mobile Home</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="yearBuilt">Year Built *</label>
              <input
                type="number"
                id="yearBuilt"
                name="yearBuilt"
                value={formData.yearBuilt}
                onChange={handleChange}
                required={formData.hasProperty}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="squareFootage">Square Footage *</label>
              <input
                type="number"
                id="squareFootage"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
                required={formData.hasProperty}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyInfo;