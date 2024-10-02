import React from 'react';
import { Product } from '@/lib/types/generated';
import Image from 'next/image';
import AnimateHeight from 'react-animate-height';

type ProductItemProps = {
  product: Product | undefined | null;
}

export const ProductItem: React.FC<ProductItemProps> = (
  { product },
) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <div
      className="w-full relative"
      onMouseEnter={() => {
        setCollapsed(true);
      }}
      onMouseLeave={() => setCollapsed(false)}
    >
      <div className="w-full cursor-pointer relative"
           style={{ position: 'relative', height: 300, marginBottom: 10 }}>
        <AnimateHeight
          id="example-panel"
          duration={500}
          height={collapsed ? 'auto' : 0}
          style={{ position: 'absolute', top: 0, left: 0, zIndex: 100, backgroundColor: 'rgba(50,50,50,.6)' }}
        >
          <div className="text-white p-4">{product?.description}</div>
        </AnimateHeight>
        <Image src={product?.images[0] as string} alt={product?.title as string} fill className="rounded-lg" />

        <div className="w-full top-0"
             style={{
               display: 'flex',
               justifyContent: 'space-between',
               alignItems: 'center',
               padding: 10,
               position: 'absolute',
               width: '100%',
             }}>
          <div
            className='rounded-lg'
            style={{ backgroundColor: 'black', color: 'white', transform: 'uppercase', padding: 5 , fontSize:12}}
            >{product?.category.name || 'Sin Categoria'}</div>
          <div
            className='rounded-lg font-bold'
            style={{ backgroundColor: '#CCFF00', color: 'black', transform: 'uppercase', padding: 5 , fontSize:16 }}>$ {product?.price || 0}</div>
        </div>


      </div>
      <div className="text-white">{product?.title}</div>
    </div>
  );
};