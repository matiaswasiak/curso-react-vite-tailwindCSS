import PropTypes from "prop-types";
import ArrowRight from "../../../assets/icons/ArrowRight";

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <div className="flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col ">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} articles</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-2xl">${totalPrice}</span>
          <ArrowRight className="h-5 w-5 mt-0.5 text-black cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export { OrdersCard };
