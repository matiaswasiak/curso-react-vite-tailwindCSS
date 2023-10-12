import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import CloseIcon from "../../../assets/icons/CloseIcon";

const ProductDetail = () => {
  const { isProductDetailOpen, toggleProductDetail, productToShow } =
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
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg object-cover"
          src={productToShow.images}
          alt={productToShow.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productToShow.price}
        </span>
        <span className="font-medium text-md">{productToShow.title}</span>
        <span className="font-light text-sm">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
