import { useContext } from "react";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="flex justify-center items-center relative w-80 mb-6">
        <h1>My Orders</h1>
      </div>
      {order.map(({ id, totalPrice, totalProducts }, index) => {
        <Link key={index} to={`/my-orders/${id}`}>
          <OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />;
        </Link>;
      })}
    </>
  );
}

export { MyOrders };
