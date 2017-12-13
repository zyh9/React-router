import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import './style.less';
import Products from './Products';
import Order from './Order';

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
            <div className="app">
                <Link to="/">首页</Link>
                <Link to="/order">订单</Link>
                <Link to="/products">产品</Link>
                <Link to="/user">用户</Link>

                {/* 不加switch的后果就是一旦有与之匹配的路由就会显示 */}
                {/* <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />
                <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/products" component={Products} />
                    <Route path="/user" component={User} />
                    <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/>
                </Switch>
            </div>
        )
    }
}

export default App;
