import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import { OrderCard } from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <p className="mb-3">My Order</p>
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
