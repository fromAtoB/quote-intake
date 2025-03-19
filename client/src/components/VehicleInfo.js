// components/VehicleInfo.js
import React from 'react';

const VehicleInfo = ({ formData, handleChange }) => {
  // Car make and models data
  const carMakes = [
    { value: "", label: "Select Make" },
    { value: "acura", label: "Acura" },
    { value: "alfa-romeo", label: "Alfa Romeo" },
    { value: "aston-martin", label: "Aston Martin" },
    { value: "audi", label: "Audi" },
    { value: "bentley", label: "Bentley" },
    { value: "bmw", label: "BMW" },
    { value: "buick", label: "Buick" },
    { value: "cadillac", label: "Cadillac" },
    { value: "chevrolet", label: "Chevrolet" },
    { value: "chrysler", label: "Chrysler" },
    { value: "dodge", label: "Dodge" },
    { value: "ferrari", label: "Ferrari" },
    { value: "fiat", label: "Fiat" },
    { value: "ford", label: "Ford" },
    { value: "genesis", label: "Genesis" },
    { value: "gmc", label: "GMC" },
    { value: "honda", label: "Honda" },
    { value: "hyundai", label: "Hyundai" },
    { value: "infiniti", label: "Infiniti" },
    { value: "jaguar", label: "Jaguar" },
    { value: "jeep", label: "Jeep" },
    { value: "kia", label: "Kia" },
    { value: "lamborghini", label: "Lamborghini" },
    { value: "land-rover", label: "Land Rover" },
    { value: "lexus", label: "Lexus" },
    { value: "lincoln", label: "Lincoln" },
    { value: "maserati", label: "Maserati" },
    { value: "mazda", label: "Mazda" },
    { value: "mclaren", label: "McLaren" },
    { value: "mercedes-benz", label: "Mercedes-Benz" },
    { value: "mini", label: "MINI" },
    { value: "mitsubishi", label: "Mitsubishi" },
    { value: "nissan", label: "Nissan" },
    { value: "porsche", label: "Porsche" },
    { value: "ram", label: "RAM" },
    { value: "rivian", label: "Rivian" },
    { value: "rolls-royce", label: "Rolls-Royce" },
    { value: "subaru", label: "Subaru" },
    { value: "tesla", label: "Tesla" },
    { value: "toyota", label: "Toyota" },
    { value: "volkswagen", label: "Volkswagen" },
    { value: "volvo", label: "Volvo" }
  ];

  // Car models by make
  const carModelsByMake = {
    "acura": ["ILX", "Integra", "MDX", "RDX", "TLX"],
    "alfa-romeo": ["Giulia", "Stelvio", "Tonale"],
    "aston-martin": ["DB11", "DBX", "Vantage"],
    "audi": ["A3", "A4", "A5", "A6", "A7", "A8", "e-tron", "Q3", "Q5", "Q7", "Q8"],
    "bentley": ["Bentayga", "Continental", "Flying Spur"],
    "bmw": ["2 Series", "3 Series", "4 Series", "5 Series", "7 Series", "X1", "X3", "X5", "X7"],
    "buick": ["Enclave", "Encore GX", "Envision"],
    "cadillac": ["CT4", "CT5", "Escalade", "XT4", "XT5", "XT6"],
    "chevrolet": ["Blazer", "Bolt", "Camaro", "Colorado", "Corvette", "Equinox", "Malibu", "Silverado", "Suburban", "Tahoe", "Trailblazer", "Traverse"],
    "chrysler": ["300", "Pacifica"],
    "dodge": ["Challenger", "Charger", "Durango"],
    "ferrari": ["296", "812", "F8", "Roma", "SF90"],
    "fiat": ["500X"],
    "ford": ["Bronco", "Edge", "Escape", "Explorer", "F-150", "Maverick", "Mustang"],
    "genesis": ["G70", "G80", "G90", "GV70", "GV80"],
    "gmc": ["Acadia", "Canyon", "Sierra", "Terrain", "Yukon"],
    "honda": ["Accord", "Civic", "CR-V", "HR-V", "Odyssey", "Pilot"],
    "hyundai": ["Elantra", "Ioniq", "Kona", "Palisade", "Santa Fe", "Sonata", "Tucson"],
    "infiniti": ["Q50", "QX50", "QX55", "QX60", "QX80"],
    "jaguar": ["E-PACE", "F-PACE", "F-TYPE", "I-PACE", "XF"],
    "jeep": ["Cherokee", "Compass", "Gladiator", "Grand Cherokee", "Renegade", "Wagoneer", "Wrangler"],
    "kia": ["Carnival", "EV6", "Forte", "K5", "Niro", "Seltos", "Sorento", "Soul", "Sportage", "Telluride"],
    "lamborghini": ["Aventador", "Huracan", "Urus"],
    "land-rover": ["Defender", "Discovery", "Range Rover", "Range Rover Evoque", "Range Rover Sport", "Range Rover Velar"],
    "lexus": ["ES", "IS", "LC", "LS", "LX", "NX", "RX", "UX"],
    "lincoln": ["Aviator", "Corsair", "Nautilus", "Navigator"],
    "maserati": ["Ghibli", "Grecale", "Levante", "MC20"],
    "mazda": ["CX-30", "CX-5", "CX-9", "CX-90", "Mazda3", "Mazda6", "MX-5 Miata"],
    "mclaren": ["Artura", "GT", "720S"],
    "mercedes-benz": ["A-Class", "C-Class", "E-Class", "GLA", "GLC", "GLE", "GLS", "S-Class"],
    "mini": ["Clubman", "Countryman", "Hardtop"],
    "mitsubishi": ["Eclipse Cross", "Outlander", "Outlander Sport"],
    "nissan": ["Altima", "Armada", "Frontier", "Kicks", "Leaf", "Murano", "Pathfinder", "Rogue", "Sentra", "Versa"],
    "porsche": ["718", "911", "Cayenne", "Macan", "Panamera", "Taycan"],
    "ram": ["1500", "2500", "3500", "ProMaster"],
    "rivian": ["R1S", "R1T"],
    "rolls-royce": ["Cullinan", "Dawn", "Ghost", "Phantom", "Wraith"],
    "subaru": ["Ascent", "Crosstrek", "Forester", "Impreza", "Legacy", "Outback", "WRX"],
    "tesla": ["Model 3", "Model S", "Model X", "Model Y"],
    "toyota": ["4Runner", "Camry", "Corolla", "Highlander", "Prius", "RAV4", "Sequoia", "Sienna", "Tacoma", "Tundra"],
    "volkswagen": ["Atlas", "Golf", "ID.4", "Jetta", "Passat", "Taos", "Tiguan"],
    "volvo": ["S60", "S90", "V60", "V90", "XC40", "XC60", "XC90"]
  };

  // Generate year dropdown options (2025-2005)
  const generateYearOptions = () => {
    const years = [];
    for (let year = 2025; year >= 2005; year--) {
      years.push(
        <option key={year} value={year}>
          {year}
        </option>
      );
    }
    return years;
  };

  // Get models for selected make
  const getModelsForMake = (make) => {
    if (!make || make === "") return [];
    return carModelsByMake[make] || [];
  };

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
              <select
                id="vehicleYear"
                name="vehicleYear"
                value={formData.vehicleYear}
                onChange={handleChange}
                required={formData.hasVehicle}
              >
                <option value="">Select Year</option>
                {generateYearOptions()}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleMake">Make *</label>
              <select
                id="vehicleMake"
                name="vehicleMake"
                value={formData.vehicleMake}
                onChange={handleChange}
                required={formData.hasVehicle}
              >
                {carMakes.map(make => (
                  <option key={make.value} value={make.value}>
                    {make.label}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="vehicleModel">Model *</label>
              <select
                id="vehicleModel"
                name="vehicleModel"
                value={formData.vehicleModel}
                onChange={handleChange}
                required={formData.hasVehicle}
                disabled={!formData.vehicleMake}
              >
                <option value="">Select Model</option>
                {getModelsForMake(formData.vehicleMake).map(model => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
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