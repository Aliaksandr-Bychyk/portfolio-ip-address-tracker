import { createContext, useReducer } from 'react';
import { SubmitHandler } from 'react-hook-form';
import Background from '../Background/Background.tsx';
import Layout from '../Layout/Layout.tsx';
import './App.css';
import IFormInputs from '../../interfaces/IFormInputs.ts';
import IDataContext from '../../interfaces/IDataContext.ts';
import reducer from '../../utils/reducer.tsx';
import ActionTypes from '../../interfaces/ActionTypes.ts';

const DataContext = createContext<IDataContext>({
  onSubmit: () => {},
  ip: '',
  location: '',
  timezone: '',
  isp: '',
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    ip: '0.0.0.0',
    location: 'Brooklyn, NY 10001',
    timezone: 'UTC-5:00',
    isp: 'SpaceX Starlink',
  });

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    fetch(
      `http://ip-api.com/json/${data.ip}?fields=status,message,country,city,zip,timezone,isp,query`
    )
      .then((res) => res.json())
      .then((value) => {
        console.log(value);
        dispatch({ type: ActionTypes.SHOW_IP, ip: value.query });
        dispatch({
          type: ActionTypes.SHOW_LOCATION,
          city: value.city,
          zip: value.zip,
          country: value.country,
        });
        dispatch({ type: ActionTypes.SHOW_TIMEZONE, timezone: value.timezone });
        dispatch({ type: ActionTypes.SHOW_ISP, isp: value.isp });
      });
  };
  return (
    <div className="app">
      <DataContext.Provider value={{ onSubmit, ...state }}>
        <Layout />
        <Background />
      </DataContext.Provider>
    </div>
  );
};

export default App;
export { DataContext };
