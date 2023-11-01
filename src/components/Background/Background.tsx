import { FC } from 'react';
import './Background.css';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIcon from '../../assets/icon-location.svg';

const Background: FC = () => {
  return (
    <>
      <div className="background" />
      <MapContainer center={[52.2323, 21.0061]} zoom={13} scrollWheelZoom={false} className="map">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[52.2323, 21.0061]}
          icon={new Icon({ iconUrl: markerIcon, iconAnchor: [23, 56] })}
        />
      </MapContainer>
    </>
  );
};

export default Background;
