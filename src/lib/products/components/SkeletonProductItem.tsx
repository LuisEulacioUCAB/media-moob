import React from 'react';


export const SkeletonProductItem: React.FC = () => {
  return (
    <div>
      <div className="rounded-lg"
           style={{ height: 300, width: '100%', backgroundColor: 'rgba(50,50,50,.85)', marginBottom: 15 }}></div>
      <div className="rounded-lg" style={{ backgroundColor: 'rgba(50,50,50,.85)', height: 20 }}></div>
    </div>
  );
};