import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

interface Props {
  latitude: number;
  longitude: number;
}

const MapComponentGot: React.FC<Props> = ({ latitude, longitude }) => {
  useEffect(() => {
    const map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
    
    return () => {
      map.remove();
    };
  }, [latitude, longitude]);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}></div>
  );
};

export default MapComponentGot;
