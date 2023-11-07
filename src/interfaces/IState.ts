import { LatLngExpression } from 'leaflet';

interface IState {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  coords: [lat: number, lon: number] | LatLngExpression;
}

export default IState;
