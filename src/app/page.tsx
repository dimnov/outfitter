import Hero from "./components/Home/Hero/Hero";
import Brands from "./components/Home/Brands/Brands";
import HomeProducts from "./components/Home/HomeProducts/HomeProducts";
import Categories from "./components/Home/Categories/Categories";
import Customers from "./components/Home/Customers/Customers";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <HomeProducts />
      <Categories />
      <Customers />
    </>
  );
}
