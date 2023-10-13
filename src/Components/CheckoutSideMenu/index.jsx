import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../../assets/icons/CloseIcon";

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, toggleCheckoutSideMenu } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckoutSideMenuOpen ? "flex" : "hidden"
      }  flex-col fixed top-[68px] right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={() => toggleCheckoutSideMenu()}>
          <CloseIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export { CheckoutSideMenu };
