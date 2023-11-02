import { FC } from 'react';
import './Layout.css';

const Layout: FC = () => (
  <div className="layout">
    <h1 className="title">IP Address Tracker</h1>
    <div className="search-box">
      <input
        type="text"
        className="input-search"
        placeholder="Search for any IP address or domain"
      />
      <input type="button" className="input-submit" />
    </div>
    <ul className="control-panel">
      <li className="control-panel__element">
        <div>IP Address</div>
        <div>0.0.0.0</div>
      </li>
      <div className="vl"></div>
      <li className="control-panel__element">
        <div>Location</div>
        <div>Brooklyn, NY 10001</div>
      </li>
      <div className="vl"></div>
      <li className="control-panel__element">
        <div>Timezone</div>
        <div>UTC-5:00</div>
      </li>
      <div className="vl"></div>
      <li className="control-panel__element">
        <div>ISP</div>
        <div>SpaceX Starlink</div>
      </li>
    </ul>
  </div>
);

export default Layout;
