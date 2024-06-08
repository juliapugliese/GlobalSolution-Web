'use client'
import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

interface Props {
  latitude: number;
  longitude: number;
  mapId: string;
}

const MapComponentGot: React.FC<Props> = ({ latitude, longitude, mapId }) => {
  useEffect(() => {
    let map: L.Map | null = L.map(mapId).setView([latitude, longitude], 13); // Inicializa com um mapa vazio

    if (!map) {
      map = L.map(mapId).setView([latitude, longitude], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);
      L.marker([latitude, longitude]).addTo(map)
     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
     .openPopup();

      return () => {
        if (map) {
          map.remove(); 
        }
      };
    }

    return () => {
      if (map) {
        map.remove(); 
      }
    };
  }, [latitude, longitude, mapId]);

  return (
    <div className='map-got' id={mapId} style={{ height: "400px", width: "100%" }}></div>
  );
};

export default MapComponentGot;
