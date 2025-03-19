// components/PersonalInfo.js
import React from 'react';

const PersonalInfo = ({ formData, handleChange }) => {
  // Helper function for DOB selection
  const handleDOBChange = (e) => {
    const { name, value } = e.target;
    
    // Get current values
    const currentMonth = formData.dobMonth || '';
    const currentDay = formData.dobDay || '';
    const currentYear = formData.dobYear || '';
    
    // Update the specific part of the date
    let newMonth = name === 'dobMonth' ? value : currentMonth;
    let newDay = name === 'dobDay' ? value : currentDay;
    let newYear = name === 'dobYear' ? value : currentYear;
    
    // Create the full date string if all parts are available
    let fullDate = '';
    if (newYear && newMonth && newDay) {
      fullDate = `${newYear}-${newMonth.padStart(2, '0')}-${newDay.padStart(2, '0')}`;
    }
    
    // Update form with both the individual parts and the full date
    const e1 = { target: { name: name, value: value } };
    const e2 = { target: { name: 'dateOfBirth', value: fullDate } };
    
    handleChange(e1);
    handleChange(e2);
  };
  
  // Generate options for dropdowns
  const generateYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 100;
    const years = [];
    
    for (let year = currentYear; year >= startYear; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    
    return years;
  };
  
  const generateMonthOptions = () => {
    const months = [];
    for (let month = 1; month <= 12; month++) {
      const monthValue = month.toString();
      const monthDisplay = month.toString().padStart(2, '0');
      months.push(
        <option key={monthValue} value={monthValue}>
          {monthDisplay}
        </option>
      );
    }
    return months;
  };
  
  const generateDayOptions = () => {
    const days = [];
    for (let day = 1; day <= 31; day++) {
      const dayValue = day.toString();
      const dayDisplay = day.toString().padStart(2, '0');
      days.push(
        <option key={dayValue} value={dayValue}>
          {dayDisplay}
        </option>
      );
    }
    return days;
  };
  
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
  
  return (
    <div className="form-section">
      <h2>Personal Information</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      
      <div className="form-group">
        <label>Date of Birth *</label>
        <div className="form-row dob-row">
          <div className="form-group">
            <select
              id="dobMonth"
              name="dobMonth"
              value={formData.dobMonth || ""}
              onChange={handleDOBChange}
              required
            >
              <option value="">Month</option>
              {generateMonthOptions()}
            </select>
          </div>
          <div className="form-group">
            <select
              id="dobDay"
              name="dobDay"
              value={formData.dobDay || ""}
              onChange={handleDOBChange}
              required
            >
              <option value="">Day</option>
              {generateDayOptions()}
            </select>
          </div>
          <div className="form-group">
            <select
              id="dobYear"
              name="dobYear"
              value={formData.dobYear || ""}
              onChange={handleDOBChange}
              required
            >
              <option value="">Year</option>
              {generateYearOptions()}
            </select>
          </div>
        </div>
        {/* Hidden field to store the full date */}
        <input
          type="hidden"
          name="dateOfBirth"
          value={formData.dateOfBirth || ""}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="address">Street Address *</label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="city">City *</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="state">State *</label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
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
          <label htmlFor="zipCode">Zip Code *</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;