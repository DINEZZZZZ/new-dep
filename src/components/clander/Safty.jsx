import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital, faPhone, faMapMarkerAlt, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const SafetyPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate=useNavigate();

  const navi = ()=>{
    navigate('/home');
  }

  useEffect(() => {
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setErrorMessage(error.message);
        }
      );
    } else {
      setErrorMessage('Geolocation is not supported by your browser.');
    }
  }, []);

  // Function to open Google Maps with nearby locations
  const openMaps = (location) => {
    if (latitude && longitude) {
      window.open(`https://www.google.com/maps/search/${location}/@${latitude},${longitude}`, '_blank');
    } else {
      setErrorMessage('Location data is not available.');
    }
  };

  // Function to navigate to emergency phone numbers
  const navigateToPhoneNumber = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
        
      <div>
        
        <button className="absolute top-0 left-0 m-4 bg-black  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() =>navi() }>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        
      </div>
      <div className="container mx-auto px-4 py-8 mt-12">
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <h1 className="text-3xl font-bold mb-8 text-center">Women Safety Page</h1>
        <img className="mx-auto mb-6" src="https://leicestercollege.ac.uk/wp-content/uploads/2021/03/20319-Womens-safety-Facebook-banner.jpg" alt="" />
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Nearby Hospitals</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => openMaps('hospitals')}>
            <FontAwesomeIcon icon={faHospital} className="mr-2" />
            Find Hospitals
          </button>
        </div>
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-xl font-semibold mb-4">Nearby Police Stations</h2>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => openMaps('police stations')}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Find Police Stations
          </button>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Emergency Contacts</h2>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mb-4" onClick={() => navigateToPhoneNumber('100')}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Call 100
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={() => navigateToPhoneNumber('108')}>
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Call 108 (Ambulance)
          </button>
        </div>
      </div>
    </div>
  );
};

export default SafetyPage;
