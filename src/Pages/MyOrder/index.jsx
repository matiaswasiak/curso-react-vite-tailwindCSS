import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { OrderCard } from "../../Components/OrderCard";
import ArrowLeft from "../../../assets/icons/ArrowLeft";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex justify-center items-center relative w-80">
        <Link to="/my-orders" className="absolute left-0">
          <ArrowLeft className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order.length === 0 && (
          <p className="text-center ">
            You don&apos;t have any orders yet. <Link to="/">Go shopping!</Link>
          </p>
        )}
        {order.slice(-1)[0].products.map((product, index) => (
          <OrderCard
            key={index}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export { MyOrder };
