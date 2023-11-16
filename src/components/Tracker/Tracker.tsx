import { FC } from 'react';
import Controls from '../Controls/Controls.tsx';
import Map from '../Map/Map.tsx';
import './Tracker.css';

const Tracker: FC = () => {
  return (
    <section id="tracker" className="section-tracker">
      <Controls />
      <Map />
    </section>
  );
};

export default Tracker;
