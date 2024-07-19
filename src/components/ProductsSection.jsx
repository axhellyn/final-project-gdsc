import React, { useState } from "react";
import ProductList from "./ProductList";
import Button from "./ui/Button";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function ProductsSection() {
  Aos.init({once: true});
  const [visible, setVisible] = useState(3);

  function showMoreItems() {
    setVisible(visible + 3);
  }

  return (
    <div className="mb-16 md:mb-0 min-h-fit p-8 md:px-16 md:pb-20" data-aos="fade-up" data-aos-duration="1000">
      <div className="h-full flex flex-col gap-8 flex-wrap items-center justify-center">
        <div className="flex gap-3">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold">Our</h1>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-darkPink">
            Menu
          </h1>
        </div>
        <ProductList onVisible={visible}/>
        <div className={`${visible >= 9 ? "hidden":"block"}`}>
            <Button textButton="Load more" onClick={showMoreItems}/>
        </div>
      </div>
    </div>
  );
}
