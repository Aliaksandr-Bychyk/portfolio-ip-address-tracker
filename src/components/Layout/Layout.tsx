import { FC } from 'react';
import './Layout.css';

const Layout: FC = () => (
  <div className="layout">
    <h1>IP Address Tracker</h1>
    <div>
      <input type="text" placeholder="Search for any IP address or domain" />
      <input type="button" />
    </div>
    <ul>
      <li>
        <div>IP Address</div>
        <div>0.0.0.0</div>
      </li>
      <li>
        <div>Location</div>
        <div>Brooklyn, NY 10001</div>
      </li>
      <li>
        <div>Timezone</div>
        <div>UTC-5:00</div>
      </li>
      <li>
        <div>ISP</div>
        <div>SpaceX Starlink</div>
      </li>
    </ul>
  </div>
);

export default Layout;
