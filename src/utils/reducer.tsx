import ActionTypes from '../interfaces/ActionTypes.ts';
import IState from '../interfaces/IState.ts';

type IAction =
  | {
      type: ActionTypes.SHOW_IP;
      ip: string;
    }
  | {
      type: ActionTypes.SHOW_LOCATION;
      city: string;
      country: string;
      zip: string;
    }
  | {
      type: ActionTypes.SHOW_TIMEZONE;
      timezone: string;
    }
  | {
      type: ActionTypes.SHOW_ISP;
      isp: string;
    };

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case ActionTypes.SHOW_IP:
      return { ...state, ip: action.ip };
    case ActionTypes.SHOW_LOCATION:
      return {
        ...state,
        location: `${action.city}, ${action.country} ${action.zip}`.trim(),
      };
    case ActionTypes.SHOW_TIMEZONE:
      return { ...state, timezone: action.timezone };
    case ActionTypes.SHOW_ISP:
      return { ...state, isp: action.isp };
    default:
      return state;
  }
};

export default reducer;
