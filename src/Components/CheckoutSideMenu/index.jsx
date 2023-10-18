import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import CloseIcon from "../../../assets/icons/CloseIcon";
import { totalPrice } from "../../utils";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    toggleCheckoutSideMenu,
    cartProducts,
    setCartProducts,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  flex-col fixed top-[68px] right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] `}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => toggleCheckoutSideMenu()}>
          <CloseIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6  overflow-y-auto">
        {cartProducts.length === 0 && (
          <p className="text-center ">Your cart is empty</p>
        )}
        {cartProducts.map((product, index) => (
          <OrderCard
            key={index}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            handleDelete={() => handleDelete(product.id)}
          />
        ))}
      </div>
      <div className="px-6">
        <p className="flex justify-between items-center pt-3">
          <span className="font-light">Total:</span>
          <span className="font-medium text-2xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
