'use client';
import React, { useState, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './styles.css';

interface Localizacao {
  latitude: number;
  longitude: number;
}

const MapComponent = () => {
  const [localizacao, setLocalizacao] = useState<Localizacao | null>(null);

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      console.error('O navegador não suporta Geolocation.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocalizacao({ latitude, longitude });
      },
      (error) => {
        console.error('Erro ao obter a localização', error);
      }
    );
  }, []);

  useEffect(() => {
    if (!localizacao) return;

    const map = L.map('map').setView([localizacao.latitude, localizacao.longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker([localizacao.latitude, localizacao.longitude]).addTo(map)
     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
     .openPopup();

    return () => {
      map.remove();
    };
  }, [localizacao]);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}></div>
  );
};

export default MapComponent;

