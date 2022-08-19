import Image from "next/image"
import { Product } from "../lib/slices/createProductSlice"
import { useAppStore } from "../lib/store"

export const CartItem = (product: Product) => {

    const { updateQuantity, removeFromCart } = useAppStore()

    return (
        <div className="rounded-md bg-[#22252D] flex my-5 relative">
            <button type="button" className="absolute right-1 top-1" onClick={() => removeFromCart(product?.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </button>
            <div className="w-20 relative">
                <Image src={product?.images[0]} alt={product?.title} layout='fill' className='rounded-tl-md rounded-bl-md shadow-lg' />
            </div>
            <div className="details py-2 px-3 flex-grow">
                <h3 className="font-medium mb-1 text-gray-300">{product?.title}</h3>
                <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">${product?.price}</p>
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-300">Qty: {product?.quantity}</p>

                    <div className="flex items-center justify-end space-x-2 flex-grow text-gray-300">
                        <button type="button" onClick={() => updateQuantity(product?.id, 'decrease')}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                            </svg>
                        </button>
                        <span>{product?.quantity}</span>
                        <button type="button" onClick={() => updateQuantity(product?.id, 'increase')}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
