'use client'

import React, { useState } from 'react';
import AddHourlyRate from './addHourlyRate';
import GetAllRate from './getAllRate';
import GetAllRateCalculeComponenent from './getAllRateCalculeComponenent';
import ModifyHourlyRate from './modifyHourlyRate';

const NavigationButtons: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<string>('');

  const navButtonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  };

  const activeStyle = {
    ...navButtonStyle,
    boxShadow: '0px 0px 12px rgba(0, 123, 255, 0.5)',
  };

  const getButtonStyle = (name: string) => {
    return activeComponent === name ? activeStyle : navButtonStyle;
  };

  const handleComponentSwitch = (componentName: string) => {
    setActiveComponent(componentName);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'add':
        return <AddHourlyRate />;
      case 'allRate':
        return <GetAllRate />;
      case 'allRateCalc':
        return <GetAllRateCalculeComponenent />;
      case 'modifyRate':
        return <ModifyHourlyRate />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <button style={getButtonStyle('add')} onClick={() => handleComponentSwitch('add')}>
          Add Hourly Rate
        </button>
        <button style={getButtonStyle('allRate')} onClick={() => handleComponentSwitch('allRate')}>
          View All Rates
        </button>
        <button style={getButtonStyle('allRateCalc')} onClick={() => handleComponentSwitch('allRateCalc')}>
          Calculate Rates
        </button>
        <button style={getButtonStyle('modifyRate')} onClick={() => handleComponentSwitch('modifyRate')}>
          Modify Rates
        </button>
      </div>
      <div>
        {renderComponent()}
      </div>
    </div>
  );
};

export default NavigationButtons;
