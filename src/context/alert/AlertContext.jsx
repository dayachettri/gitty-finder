import { createContext, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

function AlertProvider({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Set an alert
  const setAlert = (msg, type) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }), 3000);
  };

  const values = { alert: state, setAlert };

  return (
    <AlertContext.Provider value={values}>{children}</AlertContext.Provider>
  );
}

export default AlertContext;
export { AlertProvider };
