import { FC, useContext } from 'react';
import './Layout.css';
import { useForm } from 'react-hook-form';
import IFormInputs from '../../interfaces/IFormInputs.ts';
import { DataContext } from '../App/App.tsx';

const Layout: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({});

  const { onSubmit, ip, location, timezone, isp } = useContext(DataContext);

  return (
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
        <input type="submit" className="input-submit" value={''} disabled={!isValid} tabIndex={2} />
      </form>
      <ul className="control-panel">
        <li className="control-panel__element">
          <div>IP Address</div>
          <div>{ip}</div>
        </li>
        <div className="vl"></div>
        <li className="control-panel__element">
          <div>Location</div>
          <div>{location}</div>
        </li>
        <div className="vl"></div>
        <li className="control-panel__element">
          <div>Timezone</div>
          <div>{timezone}</div>
        </li>
        <div className="vl"></div>
        <li className="control-panel__element">
          <div>ISP</div>
          <div>{isp}</div>
        </li>
      </ul>
    </div>
  );
};

export default Layout;
