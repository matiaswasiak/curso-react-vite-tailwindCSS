import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { apiUrl } from "../api";

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  // Shopping Cart - Add product
  const [cartProducts, setCartProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Open and close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const toggleProductDetail = () =>
    setIsProductDetailOpen(!isProductDetailOpen);

  // Checkot Side Menu - Open and close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);

  const toggleCheckoutSideMenu = () =>
    setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen);

  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({});

  // Get products
  const [items, setItems] = useState([]);

  // Get products - Filter by title
  const [filteredItems, setFilteredItems] = useState([]);

  // Get products - Search by [title or category]
  const [searchTerm, setSearchTerm] = useState("");

  // Get products - Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/products`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Get products - Filter by title or category
  const filterItems = (items, searchTerm) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerCaseSearch) ||
        item.category.name.toLowerCase().includes(lowerCaseSearch)
    );
  };

  useEffect(() => {
    setFilteredItems(filterItems(items, searchTerm));
  }, [items, searchTerm]);

  return (
    <ShoppingCartContext.Provider
      value={{
        isProductDetailOpen,
        toggleProductDetail,
        productToShow,
        setProductToShow,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        toggleCheckoutSideMenu,
        order,
        setOrder,
        items,
        searchTerm,
        setSearchTerm,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ShoppingCartContext, ShoppingCartProvider };
