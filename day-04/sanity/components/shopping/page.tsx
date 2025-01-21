
import React from 'react'
import Header from '../header/page'
import Image from 'next/image'


export default function Shoping() {
  return (
    <>
 <Header/>
 <div className="bg-gray-200 w-full m-2 px-4 sm:px-10 lg:px-40 pt-10 pb-16 text-custom-purple">
  {/* Header */}
  <h1 className="text-2xl sm:text-3xl text-center lg:text-left">Your Shopping Cart</h1>

  {/* Grid Container */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-10">
    {/* Product Section */}
    <div className="col-span-2 border-2 p-4">
      <h1 className="text-lg font-semibold">Product</h1>

      {/* Product List */}
      <div className="divide-y mt-8">
        {/* Product 1 */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Image
              src="/Product Image.png"
              width={20}
              height={20}
              alt="Product 1"
              className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div>
              <h1 className="text-base sm:text-lg font-medium">Graystone Vase</h1>
              <p className="text-sm text-gray-600">A timeless ceramic vase with a tri-color grey glaze.</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:gap-4">
            <p className="text-sm sm:text-base font-medium">Quantity: <span className="font-semibold">1</span></p>
            <p className="text-sm sm:text-base font-medium">£85</p>
          </div>
        </div>

        {/* Product 2 */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <Image
              width={20}
              height={20}
              src="/Product Image 2.png"
              alt="Product 2"
              className="w-20 h-20 sm:w-28 sm:h-28 transition-transform duration-300 ease-in-out hover:scale-105"
            />
            <div>
              <h1 className="text-base sm:text-lg font-medium">Basic White Vase</h1>
              <p className="text-sm text-gray-600">Beautiful and simple, this is one for the classics.</p>
            </div>
          </div>
          <div className="flex flex-col items-center sm:flex-row sm:gap-4">
            <p className="text-sm sm:text-base font-medium">Quantity: <span className="font-semibold">1</span></p>
            <p className="text-sm sm:text-base font-medium">£85</p>
          </div>
        </div>
      </div>
    </div>

    {/* Total Section */}
    <div className="border-2 p-4">
      <h1 className="text-lg font-semibold">Total</h1>
      <div className="mt-10 space-y-6">
        <div className="flex justify-between">
          <p className="text-base font-medium">Graystone Vase</p>
          <p className="text-base font-medium">£85</p>
        </div>
        <div className="flex justify-between">
          <p className="text-base font-medium">Basic White Vase</p>
          <p className="text-base font-medium">£85</p>
        </div>
        <hr className="border-gray-300 my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <p>Subtotal</p>
          <p>£170</p>
        </div>
        <p className="text-sm text-gray-500">Taxes and shipping are calculated at checkout</p>
      </div>
      <button className="bg-custom-purple w-full mt-6 py-3 text-white rounded hover:bg-purple-700 transition">
        Go to Checkout
      </button>
    </div>
  </div>
</div>


 </>
  )
}
