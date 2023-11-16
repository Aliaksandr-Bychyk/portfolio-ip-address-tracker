import { FC, useContext } from 'react';
import './Controls.css';
import { useForm } from 'react-hook-form';
import IFormInputs from '../../interfaces/IFormInputs.ts';
import { DataContext } from '../App/App.tsx';

function getUTCOffsetString(timezone: string) {
  const date = new Date();
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: timezone,
    timeZoneName: 'longOffset',
  });
  const gmt = formatter.formatToParts(date).find((part) => part.type === 'timeZoneName')?.value;

  return gmt?.replace('GMT', 'UTC');
}

const Controls: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({});

  const { onSubmit, ip, location, timezone, isp, showControlPanel } = useContext(DataContext);

  const controlPanelElements = [
    { id: 0, name: 'IP Address', value: ip },
    { id: 1, name: 'Location', value: location },
    { id: 2, name: 'Timezone', value: getUTCOffsetString(timezone) },
    { id: 3, name: 'ISP', value: isp },
  ];

  return (
    <div className="background">
      <div className="layout">
        <h1 className="title">IP Address Tracker</h1>
        <form className="form-box" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="input-search"
            placeholder="Search for any IP address or domain"
            {...register('ip', { required: true })}
            tabIndex={1}
          />
          <input
            type="submit"
            className="input-submit"
            value={''}
            disabled={!isValid}
            tabIndex={2}
          />
        </form>
        <ul className={`control-panel ${showControlPanel}`}>
          {controlPanelElements.map((el) => (
            <li key={el.id} className="control-panel__element">
              <div className="element-title">{el.name}</div>
              <div className="element-value" title={el.value}>
                {el.value}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Controls;
