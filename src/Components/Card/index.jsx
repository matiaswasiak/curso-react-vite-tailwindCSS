import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import PropTypes from "prop-types";
import PlusIcon from "../../../assets/icons/PlusIcon";
import CheckIcon from "../../../assets/icons/CheckIcon";

const Card = ({ data }) => {
  const {
    isProductDetailOpen,
    toggleProductDetail,
    setProductToShow,
    cartProducts,
    setCartProducts,
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
  } = useContext(ShoppingCartContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const showProductDetail = (productDetail) => {
    setProductToShow(productDetail);
    if (!isProductDetailOpen) {
      toggleProductDetail();
    }
    if (isCheckoutSideMenuOpen) {
      toggleCheckoutSideMenu();
    }
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, productData]);
    if (!isCheckoutSideMenuOpen) {
      toggleCheckoutSideMenu();
    }
    if (isProductDetailOpen) {
      toggleProductDetail();
    }
  };

  const renderIcon = (id) => {
    const isInCard = cartProducts.find((product) => product.id === id);

    if (isInCard) {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => {
            addProductsToCart(event, data);
          }}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category?.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={
            !imageError
              ? data.images[0]
              : "https://picsum.photos/seed/picsum/200/300"
          }
          alt={data.title}
          onError={handleImageError}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.object.isRequired,
};

export { Card };
