import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import './style.less';

// 两种写法是一样的
// class Home extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>我是首页</h3>
//             </div>
//         )
//     }
// }

const Home = () =>{
    return(
        <div>
            <h3>我是首页</h3>
        </div>
    )
}

// class Order extends Component{
//     render(){
//         return(
//             <div>
//                 <h3>我是订单</h3>
//             </div>
//         )
//     }
// }

const Order = ({match}) =>{
    // console.log(match)
    return(
        <div>
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

class User extends Component{
    render(){
        return(
            <div>
                <h3>我是用户</h3>
            </div>
        )
    }
}

class App extends Component{
    // constructor(){
    //     super()
    // }
    render(){
        return(
            <div>
                <Link to="/">首页</Link>
                <Link to="/order">订单</Link>
                <Link to="/user">用户</Link>

                {/* 不加switch的后果就是一旦有与之匹配的路由就会显示 */}
                {/* <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />
                <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/user" component={User} />
                    {/* <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}
                </Switch>
            </div>
        )
    }
}

export default App;
