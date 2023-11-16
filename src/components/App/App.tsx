import { createContext, useReducer } from 'react';
import { SubmitHandler } from 'react-hook-form';
import './App.css';
import IFormInputs from '../../interfaces/IFormInputs.ts';
import IDataContext from '../../interfaces/IDataContext.ts';
import reducer from '../../utils/reducer.tsx';
import ActionTypes from '../../interfaces/ActionTypes.ts';
import IState from '../../interfaces/IState.ts';
import Attribution from '../Attribution/Attribution.tsx';
import Tracker from '../Tracker/Tracker.tsx';

const initValues: IState = {
  ip: '0.0.0.0',
  location: 'Brooklyn, NY 10001',
  timezone: 'Europe/Warsaw',
  isp: 'SpaceX Starlink',
  coords: [52.2323, 21.0061],
  showControlPanel: 'hide',
};

const DataContext = createContext<IDataContext>({
  onSubmit: () => {},
  ...initValues,
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initValues);

  const onSubmit: SubmitHandler<IFormInputs> = async (data) => {
    fetch(
      `http://ip-api.com/json/${data.ip}?fields=status,message,country,city,zip,timezone,isp,query`
    )
      .then((res) => res.json())
      .then((value) => {
        dispatch({ type: ActionTypes.SHOW_IP, ip: value.query });
        dispatch({
          type: ActionTypes.SHOW_LOCATION,
          city: value.city,
          zip: value.zip,
          country: value.country,
        });
        dispatch({ type: ActionTypes.SHOW_TIMEZONE, timezone: value.timezone });
        dispatch({ type: ActionTypes.SHOW_ISP, isp: value.isp });
        dispatch({ type: ActionTypes.SHOW_CONTROL_PANEL });
        fetch(
          `https://nominatim.openstreetmap.org/search?q=${value.city},+${value.country}&format=json`
        )
          .then((res) => res.json())
          .then((v) => {
            dispatch({
              type: ActionTypes.SHOW_MAP,
              coords: [v[0].lat, v[0].lon],
            });
          });
      });
  };
  return (
    <DataContext.Provider value={{ onSubmit, ...state }}>
      <Tracker />
      <Attribution />
    </DataContext.Provider>
  );
};

export default App;
export { DataContext };
