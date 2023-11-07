import { FC, useContext } from 'react';
import './Background.css';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon, LatLngExpression } from 'leaflet';
import markerIcon from '../../assets/icon-location.svg';
import { DataContext } from '../App/App.tsx';

const SetCenter: FC<{ coords: LatLngExpression }> = ({ coords }) => {
  const map = useMap();
  map.setView(coords);
  return null;
};

const Background: FC = () => {
  const { coords } = useContext(DataContext);
  return (
    <>
      <div className="background" />
      <MapContainer center={coords} zoom={13} scrollWheelZoom={false} className="map">
        <SetCenter coords={coords} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} icon={new Icon({ iconUrl: markerIcon, iconAnchor: [23, 56] })} />
      </MapContainer>
    </>
  );
};

export default Background;
