import React from 'react';

const VehicleInfo = ({ formData, handleChange }) => {
  return (
    <div className="form-section">
      <h2>Vehicle Information</h2>
      
      <div className="form-group checkbox-group">
        <input
          type="checkbox"
          id="hasVehicle"
          name="hasVehicle"
          checked={formData.hasVehicle}
          onChange={handleChange}
        />
        <label htmlFor="hasVehicle">I need auto insurance</label>
      </div>
      
      {formData.hasVehicle && (
        <>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="vehicleYear">Year *</label>
              <input
                type="number"
                id="vehicleYear"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                required={formData.hasVehicle}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleMake">Make *</label>
              <input
                type="text"
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                required={formData.hasVehicle}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleModel">Model *</label>
              <input
                type="text"
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required={formData.hasVehicle}
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="vin">VIN (Vehicle Identification Number)</label>
            <input
              type="text"
              id="vin"
              name="vin"
              value={formData.vin}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mileage">Annual Mileage *</label>
              <input
                type="number"
                id="mileage"
                name="mileage"
                value={formData.mileage}
                onChange={handleChange}
                required={formData.hasVehicle}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="primaryUse">Primary Use *</label>
              <select
                id="primaryUse"
                name="primaryUse"
                value={formData.primaryUse}
                onChange={handleChange}
                required={formData.hasVehicle}
              >
                <option value="">Select Usage</option>
                <option value="commute">Commute to Work/School</option>
                <option value="pleasure">Pleasure/Personal</option>
                <option value="business">Business</option>
              </select>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VehicleInfo;