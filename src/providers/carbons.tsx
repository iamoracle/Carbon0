import React, { useReducer } from "react";
import CarbonsContext, { initialState } from "../contexts/carbons";
import carbonReducer from "../reducers/carbon";

const CarbonsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carbonReducer, initialState);

  const initializeCarbons = (carbons: Array<object>) => {
    dispatch({
      type: "INITIALIZE",
      payload: carbons,
    });
  };

  return (
    <CarbonsContext.Provider
      value={{
        carbons: state,
        initializeCarbons,
      }}
    >
      {children}
    </CarbonsContext.Provider>
  );
};

export default CarbonsProvider;
