"use client"
import React from 'react'
import Image from "next/image"
import { Product } from './type'



export default function productDetail({ params , product }: { params: Promise<{ id: string }> , product:Product}) {
  return (
    <div>
       <section>
        
        <div className="w-full h-auto mt-8 flex flex-col lg:flex-row whitespace-nowrap"
        >
          <div className="flex justify-center h-auto w-auto lg:w-[721px] lg:h-[759px] mb-8 lg:mb-0">
            <Image src={product.imageUrl} alt="The Dandy Chair" height={759} width={721} />
          </div>
            
          <div className="lg:pt-12 lg:pl-14 space-y-4 px-4 sm:px-8 lg:px-0">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl">{product.name}</h1>

            <p className="text-lg sm:text-xl">{product.price}</p>

            <div className="pt-[30px] space-y-7 gap-[16px]">
              <h1 className="text-xl sm:text-2xl">Description</h1>
              description
              <p className="text-base sm:text-lg min-w-full ">
                {product.description}
              </p>

              <ul className="list-disc pl-4">
                <li>Premium material</li>
                <li>Handmade upholstery</li>
                <li>Quality timeless classic</li>
              </ul>

              <div className="space-x-12 pt-2">
                <h1 className="text-xl sm:text-2xl">Dimensions</h1>
                <table className="min-w-auto table-auto mt-8 border-collapse">
                  <thead>
                    <tr className="border-b ">
                      <th className="px-4 py-2 text-left">Height</th>
                      <th className="px-4 py-2 text-left">Width</th>
                      <th className="px-4 py-2 text-left">Depth</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-4 py-2">110cm</td>
                      <td className="px-4 py-2">75cm</td>
                      <td className="px-4 py-2">50cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h1 className="text-xl sm:text-xl">Amount</h1>
              <div className="flex items-center space-x-4 mt-2">
            
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-4 sm:space-y-0">
                  {/* <button
                    onClick={Decrement}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    -
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                    {count}
                  </button> */}
                
                  {/* <button
                    onClick={increment}
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                  >
                    +
                  </button> */}
              </div>
              
              </div>
          </div>
          <div>
            <button className=" block bg-red-500 pt-1 pb-1 pl-8 pr-8 rounded text-white">Add to Cart</button>
                </div>
          </div>
        </div>
    </section>
    </div>
  )
}
