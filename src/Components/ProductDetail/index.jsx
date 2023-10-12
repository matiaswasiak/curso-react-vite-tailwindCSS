import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../../assets/icons/CloseIcon";

const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isProductDetailOpen ? "flex" : "hidden"
      }  flex-col fixed top-[68px] right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-68px)]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={() => toggleProductDetail()}>
          <CloseIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
    </aside>
  );
};

export { ProductDetail };
