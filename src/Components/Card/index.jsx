import { useContext, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import PropTypes from "prop-types";
import PlusIcon from "../../../assets/icons/PlusIcon";

const Card = ({ data }) => {
  const { count, setCount } = useContext(ShoppingCartContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
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
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => setCount(count + 1)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </div>
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
