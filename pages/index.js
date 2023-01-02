import Banner from "../comps/banner/Banner";
import Categories from "../comps/categories/Categories";
import Feature from "../comps/feature/Feature";
import Products from "../comps/products/Products";

export default function Home({ products }) {
  return (
    <div>
      <main>
        <Banner />
        <Feature />
        <Categories />
        <Products products={products.slice(0, 3)} title="New Arrivals" />
        <Products products={products.slice(-3)} title="Random" />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://ecommerce-mern-api.vercel.app/api/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
