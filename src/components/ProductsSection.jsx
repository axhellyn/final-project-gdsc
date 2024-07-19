import React from "react";
import ProductList from "./ProductList";
import Button from "./ui/Button";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

export default function ProductsSection() {
  Aos.init({ once: true });

  const navigate = useNavigate();

  function showMoreItems() {
    navigate("/Product");
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="mb-16 md:mb-0 min-h-fit p-8 md:px-16 md:pb-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="h-full flex flex-col gap-8 flex-wrap items-center justify-center">
        <div className="flex gap-3">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">Our</h1>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darkPink">
            Menu
          </h1>
        </div>
        <ProductList />
        <div>
          <Button textButton="Load more" onClick={showMoreItems} />
        </div>
      </div>
    </div>
  );
}
