import React from "react";

function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold">{product.name}</h2>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-2xl font-bold">₹{product.price}</p>
        <button
          className="
    inline-flex items-center gap-2
    rounded-xl
    border border-red-200
    bg-red-50
    px-4 py-2
    text-sm font-semibold text-red-600
    shadow-sm
    transition-all duration-200
    hover:border-red-300
    hover:bg-red-100
    hover:text-red-700
    hover:shadow-md
    active:scale-95
    cursor-pointer
    m-4
  "
        >
           Delete
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
