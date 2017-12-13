import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import Product from './Product';

const Products = ({match}) =>{
    const productsData = [
        {
            id: 1,
            name: 'NIKE 蓝色运动鞋',
            status: '有货'
    
        },
        {
            id: 2,
            name: 'NIKE 拖鞋',
            status: '缺货'
    
        },
        {
            id: 3,
            name: '特步 蓝色运动鞋',
            status: '有货'
    
        },
        {
            id: 4,
            name: '特步 拖鞋',
            status: '缺货'
    
        },
    ]

    let linkList = productsData.map(e =>(
            <li key={e.id}>
                <Link to={`${match.url}/${e.id}`}>{e.name}</Link>
            </li>
        )
    )

    return(
        <div className="products">
            <h3>产品</h3>
            <ul> {linkList} </ul>
            <Route path={`${match.url}/:productId`}
                render={ (props) => <Product data= {productsData} {...props} />}/>
            <Route exact path={match.url}
                render={() => (<div><h3>请选择一个产品</h3></div>)}/>
        </div>
    )
}

export default Products;
