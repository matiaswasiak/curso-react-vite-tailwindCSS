import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import CloseIcon from "../../../assets/icons/CloseIcon";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, toggleCheckoutSideMenu, cartProducts } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  flex-col fixed top-[68px] right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)] overflow-scroll overflow-x-hidden`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => toggleCheckoutSideMenu()}>
          <CloseIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <div className="px-6">
        {cartProducts.map((product, index) => (
          <OrderCard
            key={index}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
