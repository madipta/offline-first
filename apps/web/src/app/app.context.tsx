import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DonasiSumContext = createContext({
  sum: 0,
  setSum: (val) => val
});

export const DonasiSumProvider = (props) => {
  // Initial values are obtained from the props
  const { sum: initialSum, children } = props;

  // Use State to keep the values

  const [sum, setSum] = useState(initialSum);

  // Make the context object:
  const sumContext = {
    sum,
    setSum,
  };

  // pass the value in provider and return
  return (
    <DonasiSumContext.Provider value={sumContext}>
      {children}
    </DonasiSumContext.Provider>
  );
};

DonasiSumProvider.propTypes = {
  sum: PropTypes.number,
};

DonasiSumProvider.defaultProps = {
  sum: 0,
};
