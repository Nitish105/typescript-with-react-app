import React from 'react'
import { IProduct } from '../App'

interface ProductProps {
    product: IProduct;
    handleAddToCartClick(id: number): void;
}

const Product = ({ product, handleAddToCartClick }: ProductProps) => {
    return (
        <>
            <div>{product.title}</div>
            <button onClick={() => handleAddToCartClick(product.id) } >
                Add to Cart
            </button>
        </>
    )
}

export default Product