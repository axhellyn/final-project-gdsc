import React, { useState } from "react";
import ProductList from "./ProductList";
import Button from "./ui/Button";

export default function ProductsSection() {
  const [visible, setVisible] = useState(3);

  function showMoreItems() {
    setVisible(visible + 3);
  }

  return (
    <div className="min-h-screen p-8 md:px-16 md:pb-20">
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
