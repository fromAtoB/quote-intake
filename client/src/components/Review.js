import React from 'react';

const Review = ({ formData }) => {
  return (
    <div className="form-section">
      <h2>Review Your Information</h2>
      <p>Please review the information below before submitting your quote request.</p>
      
      <div className="review-section">
        <h3>Personal Information</h3>
        <div className="review-item">
          <span>Name:</span> {formData.firstName} {formData.lastName}
        </div>
        <div className="review-item">
          <span>Email:</span> {formData.email}
        </div>
        <div className="review-item">
          <span>Phone:</span> {formData.phone}
        </div>
        <div className="review-item">
          <span>Date of Birth:</span> {formData.dateOfBirth}
        </div>
        <div className="review-item">
          <span>Address:</span> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}
        </div>
      </div>
      
      {formData.hasVehicle && (
        <div className="review-section">
          <h3>Vehicle Information</h3>
          <div className="review-item">
            <span>Vehicle:</span> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
          </div>
          {formData.vin && (
            <div className="review-item">
              <span>VIN:</span> {formData.vin}
            </div>
          )}
          <div className="review-item">
            <span>Annual Mileage:</span> {formData.mileage}
          </div>
          <div className="review-item">
            <span>Primary Use:</span> {formData.primaryUse}
          </div>
        </div>
      )}
      
      {formData.hasProperty && (
        <div className="review-section">
          <h3>Property Information</h3>
          <div className="review-item">
            <span>Property Address:</span> {formData.propertyAddress}, {formData.propertyCity}, {formData.propertyState} {formData.propertyZipCode}
          </div>
          <div className="review-item">
            <span>Property Type:</span> {formData.propertyType}
          </div>
          <div className="review-item">
            <span>Year Built:</span> {formData.yearBuilt}
          </div>
          <div className="review-item">
            <span>Square Footage:</span> {formData.squareFootage}
          </div>
        </div>
      )}
      
      <div className="review-section">
        <h3>Coverage Information</h3>
        <div className="review-item">
          <span>Desired Coverage:</span> {formData.desiredCoverage}
        </div>
        <div className="review-item">
          <span>Currently Insured:</span> {formData.currentlyInsured ? 'Yes' : 'No'}
        </div>
        {formData.currentlyInsured && (
          <div className="review-item">
            <span>Current Provider:</span> {formData.currentProvider}
          </div>
        )}
        {formData.additionalComments && (
          <div className="review-item">
            <span>Additional Information:</span> {formData.additionalComments}
          </div>
        )}
      </div>
      
      <div className="consent-section">
        <p>
          By submitting this form, you consent to be contacted by phone, email, or text regarding your insurance quote request.
        </p>
      </div>
    </div>
  );
};

export default Review;