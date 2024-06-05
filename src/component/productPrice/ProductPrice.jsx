import React from 'react'

const ProductPrice = ({price, isLarge}) => {
  return (
    <div className="relative">
      <div className="absolute bg-light-grey h-10 rounded-full top-0 w-10 -z-1"></div>
      <p className={`font-krona text-${isLarge? "lg" : "md"} pt-2 ml-4`}>{price} &#8364;</p>
    </div>
  );
}

export default ProductPrice