import Hero from "@/app/components/Home/Hero/Hero";
import Brands from "@/app/components/Home/Brands/Brands";
import HomeProducts from "@/app/components/Home/HomeProducts/HomeProducts";
import Categories from "@/app/components/Home/Categories/Categories";
import Customers from "@/app/components/Home/Customers/Customers";

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
