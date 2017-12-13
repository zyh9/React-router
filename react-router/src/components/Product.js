import React,{Component} from 'react';

const Product = ({match,data}) => {
    let product= data.find(e => e.id == match.params.productId);
    let productData;
    if(product)
        productData =(
            <div>
                <h3> {product.name} </h3>
                <h3> {product.status} </h3>
            </div>
        )
    else productData = <h3>抱歉，产品不存在</h3>

    return (
        <div>
           {productData}
        </div>
    )
}

export default Product;
