import React from 'react'
import './Product.css'

function Product() {
    return (
        <div className='product'>
            <div className="product_info">
                <p>Smart Lâmpada Led Colors</p>
                <p className="product_price">
                    <small>R$</small>
                    <strong>62,91</strong>
                </p>
                <div className="product_rating">
                    <p>
                        🌟🌟🌟
                    </p>
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/61bWZkW8UsL._AC_UL160_SR160,160_.jpg" alt="" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
