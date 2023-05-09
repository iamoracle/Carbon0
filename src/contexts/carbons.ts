import { createContext } from "react";

export const initialState = {
  carbons: [],
  initializeCarbons: (carbons: Array<object>) => {
  },
};

const CarbonsContext = createContext(initialState);

export default CarbonsContext;
