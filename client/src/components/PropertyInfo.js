// components/PropertyInfo.js
import React from 'react';

const PropertyInfo = ({ formData, handleChange }) => {
  // All US states array
  const usStates = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' }
  ];
  
  // Handle same as personal address checkbox
  const handleSameAddressChange = (e) => {
    const isChecked = e.target.checked;
    
    // Create a custom event to update the isSameAddress field
    const sameAddressEvent = {
      target: {
        name: 'isSameAddress',
        value: isChecked,
        type: 'checkbox',
        checked: isChecked
      }
    };
    
    // Update fields conditionally based on checkbox state
    if (isChecked) {
      // Copy personal address to property address
      const events = [
        {
          target: {
            name: 'propertyAddress',
            value: formData.address
          }
        },
        {
          target: {
            name: 'propertyCity',
            value: formData.city
          }
        },
        {
          target: {
            name: 'propertyState',
            value: formData.state
          }
        },
        {
          target: {
            name: 'propertyZipCode',
            value: formData.zipCode
          }
        }
      ];
      
      // Update isSameAddress first
      handleChange(sameAddressEvent);
      
      // Update all address fields
      events.forEach(event => handleChange(event));
    } else {
      // Just update the checkbox state
      handleChange(sameAddressEvent);
    }
  };
  
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
          <div className="form-group checkbox-group">
            <input
              type="checkbox"
              id="isSameAddress"
              name="isSameAddress"
              checked={formData.isSameAddress || false}
              onChange={handleSameAddressChange}
            />
            <label htmlFor="isSameAddress">Is the address of the property to be insured the same as your personal address?</label>
          </div>
          
          <div className="form-group">
            <label htmlFor="propertyAddress">Property Address *</label>
            <input
              type="text"
              id="propertyAddress"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              required={formData.hasProperty}
              disabled={formData.isSameAddress}
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
                disabled={formData.isSameAddress}
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
                disabled={formData.isSameAddress}
              >
                <option value="">Select State</option>
                {usStates.map(state => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
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
                disabled={formData.isSameAddress}
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
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                id="squareFootage"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
                required={formData.hasProperty}
                className="no-spinner"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PropertyInfo;