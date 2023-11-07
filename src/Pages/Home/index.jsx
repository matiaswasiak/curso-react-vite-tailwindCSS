import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, setSearchTerm, searchTerm, filteredItems } =
    useContext(ShoppingCartContext);

  // useParams to get the category from the URL
  const { category } = useParams();

  useEffect(() => {
    if (category !== undefined) {
      setSearchTerm(category);
    } else {
      setSearchTerm("");
    }
  }, [category, setSearchTerm]);

  const results = searchTerm.length > 0 ? filteredItems : items;

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search for products"
        className="rounded-lg border border-black w-80 p-4 mb-6 focus:outline-none"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {results.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        {results.length === 0 && (
          <div className="flex items-center justify-center w-full col-span-4">
            <h1 className="font-medium text-xl">No products found</h1>
          </div>
        )}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
