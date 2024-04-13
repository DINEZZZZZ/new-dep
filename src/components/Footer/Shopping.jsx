import React from 'react';

const ShoppingPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Online Shopping Platforms</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <a href="https://www.swiggy.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse1.mm.bing.net/th?id=OIP.Qw11nbTP2pBb08x-H2WDSAHaE8&pid=Api&P=0&h=180" alt="Swiggy" className="w-24 h-24 mb-4" />
          <span>Swiggy</span>
        </a>
        <a href="https://www.zomato.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse2.mm.bing.net/th?id=OIP.XV8GTolcOQ15kl4IhPd8TwHaEK&pid=Api&P=0&h=180" alt="Zomato" className="w-24 h-24 mb-4" />
          <span>Zomato</span>
        </a>
        <a href="https://www.amazon.in/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse4.mm.bing.net/th?id=OIP.WGxtnw81X7exO2PxiVlL9QHaEK&pid=Api&P=0&h=180" alt="Amazon" className="w-24 h-24 mb-4" />
          <span>Amazon</span>
        </a>
        <a href="https://www.flipkart.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="data:image/png;base64,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" alt="Flipkart" className="w-24 h-24 mb-4" />
          <span>Flipkart</span>
        </a>
        <a href="https://www.medplusmart.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://www.paubox.com/hubfs/Imported_Blog_Media/34.png" alt="MedPlus" className="w-24 h-24 mb-4" />
          <span>MedPlus</span>
        </a>
       
      
        <a href="https://www.blinkit.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center bg-gray-200 p-4 rounded-md">
          <img src="https://tse2.mm.bing.net/th?id=OIP.eyux7K0cVNHAA-dXKOYKJQHaEK&pid=Api&P=0&h=180" alt="Blinkit" className="w-24 h-24 mb-4" />
          <span>Blinkit</span>
        </a>
      </div>
    </div>
  );
};

export default ShoppingPage;
