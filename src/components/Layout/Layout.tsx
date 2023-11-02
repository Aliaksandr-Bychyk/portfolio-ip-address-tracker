import { FC } from 'react';
import './Layout.css';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInputs {
  ip: string;
}

const Layout: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IFormInputs>({});

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    fetch(
      `http://ip-api.com/json/${data.ip}?fields=status,message,country,city,zip,timezone,isp,query`
    )
      .then((res) => res.json())
      .then((value) => console.log(value));
  };

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
};

export default Layout;
