import Header from "../header/page";
import Image from "next/image";
import Link from "next/link";
import { SanityFetch } from "@/sanity/lib/fetch"
import { allProducts } from "@/sanity/lib/query"
import { Product } from "../type";


export default async function All() {
 const products: Product[] = await SanityFetch({ query: allProducts})
  return (
    <div className="min-width-[768px]  min-width[640px] lg:w-full w-auto">
      <Header />
      <div className="lg:w-full w-auto mt-3 h-auto lg:h-[209px]">
        <Image src={"/Frame 143.png"} alt="" width={1440} height={209} />
       <h1 className="text-5xl text-slate-600 text-center m-8" style={{fontFamily:"Poppins"}}>Our Popular Products</h1>
      </div>

 <section className="mt-12 grid grid-cols-1 overflow-hidden gap-x-4 p-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
         {products.map((product) => (
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
    </div>
  );
}
