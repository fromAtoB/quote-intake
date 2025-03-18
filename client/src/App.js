// App.js - Main component
import React, { useState } from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import VehicleInfo from './components/VehicleInfo';
import PropertyInfo from './components/PropertyInfo';
import CoverageOptions from './components/CoverageOptions';
import Review from './components/Review';
import FormProgress from './components/FormProgress';
import FormNavigation from './components/FormNavigation';

function App() {
  // Form state management
  const [formData, setFormData] = useState({
    // Personal information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Vehicle information (if applicable)
    hasVehicle: false,
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vin: '',
    mileage: '',
    primaryUse: '',
    
    // Property information (if applicable)
    hasProperty: false,
    propertyAddress: '',
    propertyCity: '',
    propertyState: '',
    propertyZipCode: '',
    propertyType: '',
    yearBuilt: '',
    squareFootage: '',
    
    // Coverage preferences
    desiredCoverage: '',
    currentlyInsured: false,
    currentProvider: '',
    additionalComments: ''
  });

  // Step management
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle step navigation
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend or API
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check console for data.');
    // You could add API submission code here
  };

  // Render current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
      case 2:
        return <VehicleInfo formData={formData} handleChange={handleChange} />;
      case 3:
        return <PropertyInfo formData={formData} handleChange={handleChange} />;
      case 4:
        return <CoverageOptions formData={formData} handleChange={handleChange} />;
      case 5:
        return <Review formData={formData} />;
      default:
        return <PersonalInfo formData={formData} handleChange={handleChange} />;
    }
  };

  return (
    <div className="insurance-form-container">
      <h1>Insurance Quote Request</h1>
      <p className="form-description">
        Complete the form below to receive a personalized insurance quote.
      </p>
      
      <FormProgress currentStep={currentStep} totalSteps={totalSteps} />
      
      <form onSubmit={handleSubmit}>
        {renderStep()}
        
        <FormNavigation 
          currentStep={currentStep} 
          totalSteps={totalSteps} 
          prevStep={prevStep} 
          nextStep={nextStep} 
          handleSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default App;