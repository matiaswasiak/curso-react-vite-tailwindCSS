import { createContext } from "react";
import PropTypes from "prop-types";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShoppingCartProvider };
