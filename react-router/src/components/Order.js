import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';

const Order = ({match}) =>{
    // console.log(match)
    return(
        <div className="order">
            {/* <h3>我是订单</h3> */}
            <ul>
                <li><Link to={`${match.url}/order1`}>订单1</Link></li>
                <li><Link to={`${match.url}/order2`}>订单2</Link></li>
                <li><Link to={`${match.url}/order3`}>订单3</Link></li>
            </ul>
            <Route path={`${match.path}/:order`} 
            render={({match})=>(<div><h3>{match.params.order}</h3></div>)}/>
        </div>
    )
}
export default Order;
