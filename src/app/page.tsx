'use client';
import { Product, useProductsLazyQuery } from '@/lib/types/generated';
import { useEffect, useState } from 'react';
import { ProductItem } from '@/lib/products/components/ProductItem';
import { SkeletonProductItem } from '@/lib/products/components/SkeletonProductItem';

export default function Home() {
  const [{ page, pageSize }, setPaginate] = useState({ page: 0, pageSize: 9 });
  const [callProducts, { data, loading }] = useProductsLazyQuery();


  useEffect(() => {
    callProducts({
      variables: {
        limit: pageSize,
        offset: page,
      },
    });
  }, [callProducts, page, pageSize]);

  const nextPage = () => {
    setPaginate({ page: page + 1, pageSize });
  };

  const prevPage = () => {

    if (page <= 0) return null;
    setPaginate({ page: page - 1, pageSize });

  };

  const products = (data?.products || []) as Product[];

  const content = loading ? (<div className="grid grid-cols-3 gap-6 mb-4">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, key) => <SkeletonProductItem key={key} />)}
  </div>) : (
    <div className="grid grid-cols-3 gap-6 mb-4">
      {products.map((product) => (<ProductItem product={product} key={product.id} />))}
    </div>
  );

  return (
    <main className=" w-screen min-h-screen bg-neutral-800 p-4">
      <h1 className=" pt-4 text-center text-neutral-100 font-bold text-3xl mb-4">
        Productos
      </h1>
      <div className="container mx-auto">
        {content}

        <div className="flex justify-between items-center">
          <div className="bg-gray-400 rounded-lg py-2 px-4 cursor-pointer" onClick={() => prevPage()}>{'<'}</div>
          <div className="text-white text-2xl">{page + 1}</div>
          <div className="bg-gray-400 py-2 px-4 font-bold rounded-lg cursor-pointer" onClick={() => nextPage()}>{'>'}</div>
        </div>
      </div>

    </main>
  );
}
