import create from 'zustand'
import { CartSlice, createCartSlice } from './slices/createCartSlice'
import { createProductSlice, ProductSlice } from './slices/createProductSlice'
import { persist } from 'zustand/middleware'

type StoreState = ProductSlice & CartSlice

export const useAppStore = create<StoreState>()(persist((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
})))