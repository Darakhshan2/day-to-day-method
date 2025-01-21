import { fourProducts } from "../../../../sanity/lib/query";
import { SanityFetch } from "@/sanity/lib/fetch"
import Link from "next/link";
import { Product } from "../../type";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Image from "next/image";
import Header from "../../header/page"
interface ProductPage {
  params: Promise<{ _id: string }>
}

export default async function GetProduct({ params }: ProductPage) {
  const start = 1
  const limit = 4
  const fourProductsty: Product[] = await SanityFetch({ query:fourProducts(start,limit)})
 
  const { _id } = await params;

    const product:Product  = await  client.fetch(
    groq`*[_type == "product" && _id == $id][0]{
       _id,
       name,
       description,
       slug,
       price,
       quantity,
       dimensions,
       features,
       category,
       "imageUrl" : image.asset->url
    }`, { id: _id }
  )
 
  if (!product) {
    console.log("not found");
    
  }

  return (
    <>
      <Header/>
       <section>
        
        <div className="w-full h-auto mt-8 flex flex-col lg:flex-row whitespace-nowrap"
        >
          <div className="flex justify-center h-auto w-auto lg:w-[721px] lg:h-[759px] mb-8 lg:mb-0">
            <Image src={product.imageUrl} alt="The Dandy Chair" height={759} width={721} />
          </div>
            
          <div className="lg:pt-12 lg:pl-14 space-y-4 px-4 sm:px-8 lg:px-0">

            <h1 className="text-2xl sm:text-3xl lg:text-4xl">{product.name}</h1>

            <p className="text-lg sm:text-xl">${product.price}</p>

            <div className="pt-[30px] space-y-7 gap-[16px]">
              <h1 className="text-xl sm:text-2xl">Description</h1>
              description
              <p className="text-base sm:text-lg min-w-full ">
                A timeless design, with premium materials features as one of our <br />
                most popular and iconic pieces. The Dandy chair is perfect for any stylish <br />
                living space with beech legs and lambskin leather upholstery.
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
                      <td className="px-4 py-2">{product.dimensions.height}</td>
                      <td className="px-4 py-2">{product.dimensions.width}</td>
                      <td className="px-4 py-2">{product.dimensions.depth}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
           
          <div>
            <button className=" block bg-red-500 pt-1 pb-1 pl-8 pr-8 rounded text-white">Order Now</button>
                </div>
          </div>
        </div>
      </section>
      
      
      <section className="mt-12 grid grid-cols-1 overflow-hidden gap-x-4 p-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {fourProductsty.map((product) => (
        <div
          key={product._id}
        >
          <div className="aspect-square w-full  relative overflow-hidden rounded-lg bg-gray-100 cursor-pointer">
            <Link href={`/components/allProducts/${product._id}`}>
              <Image
                src={product.imageUrl}
                alt={product.name! || "sanity image"}
                fill
                className="h-full w-full object-cover absolute hover:scale-[1.1] object-center transition-all ease-in-out duration-200"
              />
            </Link>
          
          </div>
          <div className="mt-4 flex justify-between">
            <div>
              <h3 className="text-black/90">{product.name}</h3>
              <div className="flex items-center gap-2">
                <p className="text-md font-semibold text-gray-900">
                  ${product.price}
                </p>
               
              </div>
            </div>
            
              <div className="hover:opacity-70 flex transition-opacity duration-300 cursor-pointer h-fit p-2 rounded  bg-red-200">
                       add to cart
               </div>
            
          </div>
        </div>
      ))}
   </section> 
    </>
  )
}

