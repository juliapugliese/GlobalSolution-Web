import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./styles.css"

const MapComponent = () => {

  useEffect(() => {
    const map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([51.5, -0.09]).addTo(map)
       .bindPopup('A pretty CSS popup.<br> Easily customizable.')
       .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div id="map" style={{ height: "400px", width: "100%" }}></div>
  );
};

export default MapComponent;
