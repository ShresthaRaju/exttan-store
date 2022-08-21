import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { CartItem } from '../components/CartItem'
import { ProductCard } from '../components/ProductCard'
import { Product } from '../lib/slices/createProductSlice'
import { useAppStore } from '../lib/store'

const Home: NextPage = () => {

  const { products, fetchProducts, cart, showCart, toggleCart } = useAppStore()

  const [mProducts, setMProducts] = useState<Product[]>([])
  const [mCart, setMCart] = useState<Product[]>([])

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity!, 0)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    setMProducts(products)
  }, [products])

  useEffect(() => {
    setMCart(cart)
    calculateTotal()
  }, [cart])


  return (
    <div className="min-h-screen bg-[#161A1E] relative">
      <Head>
        <title>exTTan Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='py-8 px-10 xl:px-16'>
        {/* title */}
        <div className="title flex justify-center">
          <h1 className="font-bold text-7xl xl:text-9xl text-center inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500">exTTan</h1>
        </div>

        {/* catalogs */}
        <div className="flex items-center justify-between mt-5">
          <h4 className='font-semibold text-xl xl:text-3xl text-white uppercase'>Catalogs</h4>
          <div className="relative">
            <button type='button' className='py-1.5 px-3 flex items-center space-x-1 rounded-md text-sm bg-blue-600 text-gray-200 hover:ring-1 hover:ring-blue-600' onClick={toggleCart}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              <span>My Cart</span>
            </button>
            <span className="absolute -right-2 -top-2 bg-amber-400 rounded-full text-xs px-1.5 py-0.5 font-semibold animate-bounce">{mCart?.length}</span>
          </div>
        </div>

        {/* products */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 mt-8">
          {mProducts?.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      </main>

      {/* cart */}
      <div className={`absolute right-0 top-0 h-full w-1/4 bg-[#1b1c1f] p-5 ${showCart ? 'block' : 'hidden'}`}>
        <div className="flex items-center justify-between text-gray-400">
          <h4 className='font-semibold text-xl xl:text-2xl'>My Cart</h4>
          <button type='button' onClick={toggleCart}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {/* cart items */}
        {mCart?.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)}
        {mCart?.length > 0 &&
          <div className="mt-5 text-center">
            <p className="text-gray-500 uppercase">Total</p>
            <h4 className='font-semibold text-4xl text-white'>${calculateTotal()}</h4>
          </div>
        }
      </div>
    </div>
  )
}

export default Home
