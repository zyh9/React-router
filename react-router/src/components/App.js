import React,{Component} from 'react';
import {Redirect,Route,Link,Switch} from 'react-router-dom';
import './style.less';
import Products from './Products';
import Order from './Order';
import Login,{fakeAuth} from './Login';

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

const Admin = ({ match }) => {
    return (
        <div>
        <h3>欢迎回来，您已登录</h3>
        </div>
    )
}

// 私有路由功能
const PrivateRoute = ({ component: Component, ...rest }) => {
    // console.log(Component,{...rest})
    return (
        <Route {...rest} 
            render={ props => fakeAuth.isAuth === true ? 
                <Component {...props} /> : 
                <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
            }
        />
    )
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
                <Link to="/admin">登录</Link>

                {/* 不加switch的后果就是一旦有与之匹配的路由就会显示 */}
                {/* <Route exact path="/" component={Home} />
                <Route path="/order" component={Order} />
                <Route path="/user" component={User} />
                <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/> */}

                {/* <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <Route path="/products" component={Products} />
                    <Route path="/user" component={User} />
                    <Route path="/:id" render = {()=> (<p>不加switch的后果</p>)}/>
                </Switch> */}
                
                {/* 将PrivateRoute组件添加到现有路由 */}
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/order" component={Order} />
                    <PrivateRoute path='/products' component = {Products} />
                    <Route path="/user" component={User} />
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/admin" component={Admin} />
                </Switch>
            </div>
        )
    }
}

export default App;
