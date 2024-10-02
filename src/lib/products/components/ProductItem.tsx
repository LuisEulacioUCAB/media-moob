import React, { useRef } from 'react';
import { Product } from '@/lib/types/generated';
import Image from 'next/image';

type ProductItemProps = {
  product: Product | undefined | null;
}

export const ProductItem: React.FC<ProductItemProps> = (
  { product },
) => {
  const [showDescription, setShowDescription] = React.useState(false);

  return (
    <div className="w-full ">

      <div className="w-full h-[300px] mb-2 relative cursor-pointer"
           onMouseEnter={() => setShowDescription(true)}
           onMouseLeave={() => setShowDescription(false)}
      >
        <div className='transition-[transform 0.5s ease-in] top-0 left-0 w-full bg-[rgba(50,50,50,.6)] absolute z-10 h-auto text-white'>
          {product?.description}
        </div>
        <Image src={product?.images[0] as string} alt={product?.title as string} fill className="rounded-lg" />
        <div
          className="absolute bg-black text-white uppercase p-2 rounded-lg text-xs top-0 ml-3 mt-3">{product?.category.name || 'Sin Categoria'}</div>
      </div>
      <div className="text-white">{product?.title}</div>
    </div>
  );
};