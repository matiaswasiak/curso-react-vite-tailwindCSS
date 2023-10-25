import PropTypes from "prop-types";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>{Date.now()}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export { OrdersCard };
