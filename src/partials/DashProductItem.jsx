import React from "react";

function DashProductItem({ product }) {
  return (
    <div className="flex-col text-center bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-10 p-4 py-3 max-w-md md:max-w-2xl">
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        {product.name}
      </h4>
      <p className="text-gray-600 text-center mb-5">{product.email}</p>
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        Product Name: {product.productName}
      </h4>
      <p className="block text-gray-600 text-center mb-5">
        {product.productDesc}
      </p>
      <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
        Social Link
      </h4>
      <p className="text-gray-600 text-center mb-5">{product.productSocialLink}</p>
    </div>
  );
}

export default DashProductItem;
