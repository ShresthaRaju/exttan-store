import Image from "next/image"
import { Product } from "../lib/slices/createProductSlice"
import { useAppStore } from "../lib/store"

export const ProductCard = (product: Product) => {

    const { addToCart } = useAppStore()

    return (
        <div className="rounded-md bg-[#22252D]">
            <div className="w-full h-40 relative">
                <Image src={product?.images[0]} alt={product?.title} layout='fill' className='rounded-md shadow-lg' />
                <span className="bg-black rounded-full py-0.5 px-3 text-white text-xs absolute top-1 left-1 font-light">{product?.category?.name}</span>
            </div>

            <div className="px-2 py-3 text-sm text-gray-300">
                <h3 className="font-medium text-lg mb-1">{product?.title}</h3>
                <p className="text-gray-500 text-ellipsis mb-3">{`${product?.description.substring(0, 50)}...`}</p>

                <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold">${product?.price}</p>
                    <button type="button" className="py-1.5 px-3 rounded-md bg-[#161A1E] hover:ring-1 hover:ring-[#161A1E]" onClick={() => addToCart(product)}>Add To Cart</button>
                </div>

            </div>

        </div>
    )
}
