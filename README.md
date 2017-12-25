## React-router

### 开场白

> [react-router官网](https://reacttraining.com/react-router/)

		React 是一个很流行的库，多用于创建在客户端渲染的单页应用(SPAs)。
		一个SPA会有很多视图（也可以称为页面），不像传统的多页应用，视图之间的跳转不应该导致整个页面被重新加载。
		相反，我们希望视图就在当前页面里渲染。那些习惯于多页应用的最终用户，期望在一个SPA中应该包含以下特性：
		
			应用中每个视图都应该有对应的唯一URL用来区分视图。以便用户可以在之后通过书签收藏的URL指向引用资源
			
				例如：www.example.com/products
			
			浏览器的前进后退按钮应该正常工作。
			
			动态生成的嵌套视图更应该有成对应的URL
			
				例如：example.com/products/shoes/101 -- 101是产品id
		
		路由跳转是指在同步保持浏览器URL的过程中渲染页面中的视图。React Router 让你声明式的操作路由跳转。
		声明式路由方法，通过说"路由应该是这样的"，允许你控制应用中的数据流：
		
			<Route path="/about" component={About}/>
		
		你可以把<Route>组件放在任意你想要路由渲染的地方。
		由于我们所需要接触的<Route>，<Link>以及其他React Router的API都只是组件，所以你可以非常方便的在React里使用路由。
		
		有一个常见的误区，大家都认为React Router是由facebook官方开发的一个路由解决方案。
		实际上，它是一个因其设计和简易性而流行的第三方库。如果你的需求只局限于路由的跳转，
		你可以无需太多麻烦，就可以从头开始实现一个自定义的路由。
		但是，了解React Router的基础知识可以让你更清楚的认识一个路由是怎么工作的。

### 安装React-router

		React Router库包含三个包： react-router, react-router-dom, 和 react-router-native
		react-router是路由的核心包，而其他两个是基于特定环境的
		如果你在开发一个网站，你应该使用react-router-dom
		如果你在移动应用的开发环境使用React Native，你应该使用react-router-native
		
		使用npm安装react-router-dom：
		
		npm install --save react-router-dom
		
		或者  npm i react-router-dom -S

### React-router基础

		下面是路由的例子：
		
			<Router>
			  <Route exact path="/" component={Home}/>
			  <Route path="/order" component={Order}/>
			  <Route path="/user" component={User}/>
			</Router>
			
			在这里，"/"同时匹配"/"和"/order"。因此，所有路由都匹配并被渲染。
			我们该如何避免呢？应该给 path='/'的路由传递exact= {true}
		
		Router
		
			像上面的例子，你需要一个<Router>组件和一些<Route>组件来创建一个基本的路由。
			由于我们创建的是一个基于浏览器的应用，我们可以从React Router API中使用这两种类型的路由：
				
				<BrowserRouter>
				
				<HashRouter>
			
			它们之间主要的区别，可以在它们所创建的URL明显看出：
			
				// <BrowserRouter>
				http://example.com/about
				
				// <HashRouter>
				http://example.com/#/about
			
			<BrowserRouter>在两者中更为常用，原因是它使用了HTML5的history API来记录你的路由历史
			而<HashRouter>则使用URL(window.location.hash)的hash部分来记录。
			如果你想兼容老式浏览器，你应该使用<HashRouter>
		
		history
		
			history是一个让你轻松管理所有Javascript运行的会话记录的Javascript库。
			history提供了简洁的API，让你可以管理history堆栈，跳转，确认跳转，以及保持会话之间的状态。
			
			每个router组件创建了一个history对象，用来记录当前路径(history.location)，上一步路径也存储在堆栈中。
			当前路径改变时，视图会重新渲染，给你一种跳转的感觉。当前路径又是如何改变的呢？
			history对象有history.push()和history.replace()这些方法来实现。
			当你点击<Link>组件会触发history.push()，使用<Redirect>则会调用history.replace()。
			
			其他方法：
			
				例如history.goBack()和history.goForward() - 用来根据页面的后退和前进来跳转history堆栈
		
		Links and Routes
		
			<Route>是React Router里最重要的组件。若当前路径匹配route的路径，它会渲染对应的UI。
			理想来说，<Route>应该有一个叫path的prop，当路径名跟当前路径匹配才会渲染。
			
			另一方面，<Link>用来跳转页面。可以类比HTML的锚元素。然而，使用锚链接会导致浏览器的刷新，这不是我们想要的。
			所以，我们可以使用<Link>来跳转至具体的URL，并且视图重新渲染不会导致浏览器刷新。

### Demo1：基础路由

```javascript
	/* Import statements */
	import React, { Component } from 'react';
	import { Link, Route, Switch } from 'react-router-dom';
	
	/* Home component */
	const Home = () => (
	  <div>
	    <h2>我是首页</h2>
	  </div>
	)
	
	/* Order component */
	const Order = () => (
	  <div>
	    <h2>我是订单页</h2>
	  </div>
	)
	
	/* User component */
	const User = () => (
	  <div>
	    <h2>我是用户页</h2>
	  </div>
	)
	
	/* App component */
	class App extends React.Component {
	  render() {
	    return (
		  <div>
		    <ul className="list">
		      /* 使用<Link>来跳转至具体的URL */
		      <li><Link to="/">首页</Link></li>
		      <li><Link to="/order">订单</Link></li>
		      <li><Link to="/user">用户</Link></li>
		    </ul>
		    /* <Route>的路径与当前路径匹配，对应组件就会被渲染 */
		    <Route exact path="/" component={Home}/>
		    <Route path="/order" component={Order}/>
		    <Route path="/user" component={User}/>
		  </div>
	    )
	  }
	}
```

### 嵌套路由

		<Route>有三个可以用来定义要渲染内容的props：
		
			component：
			
				当URL匹配时，router会将传递的组件使用React.createElement来生成一个React元素
			
			render：
			
				适合行内渲染。在当前路径匹配路由路径时，renderprop期望一个函数返回一个元素
			
			children：
			
				childrenprop跟render很类似，也期望一个函数返回一个React元素。
				然而，不管路径是否匹配，children都会渲染。
				
		Path and match
		
			path用来标识路由匹配的URL部分。React Router使用了Path-to-RegExp库将路径字符串转为正则表达式。
			然后正则表达式会匹配当前路径。当路由路径和当前路径成功匹配，会生成一个对象，我们叫它match。
			match对象有更多关于URL和path的信息。这些信息可以通过它的属性获取，如下所示：
			
				match.url -- 返回URL匹配部分的字符串。对于创建嵌套的<Link>很有用。
				
				match.path -- 返回路由路径字符串 - 就是<Route path="">。将用来创建嵌套的<Route>。
				
				match.isExact -- 返回布尔值，如果准确（没有任何多余字符）匹配则返回true。
				
				match.params -- 返回一个对象包含Path-to-RegExp包从URL解析的键值对。
		
		Switch组件
		
			当一起使用多个<Route>时，所有匹配的routes都会被渲染。
			根据Demo1的代码，我添加一个新的route来验证为什么<Switch>很有用。
			
			<Route exact path="/" component={Home}/>
			<Route path="/order" component={Order}/>
			<Route path="/user" component={User}/>
			<Route path="/:id" render = {()=> (<p>不加Switch的后果，一旦与之匹配就会被渲染出来</p>)}/>
			当URL为/order，所有匹配/order路径的route都会被渲染。
			所以，那个path为:id的<Route>会跟着order组件一块渲染。
			设计就是如此。但是，若这不是你想要的结果，你应该给你的routes添加<Switch>组件。
			有<Switch>组件的话，只有第一个匹配路径的子<Route>会渲染。

### Demo2：嵌套路由

		之前，我们给"/","/order"和"/user"创建了路由。
		但如果我们想要/order/order1这种形式的URL呢？

#### src/App.js

```javascript
	import React, { Component } from 'react';
	import { Link, Route, Switch } from 'react-router-dom';
	import Order from './Order';
	
	class App extends Component {
	  render() {
	    return (
		  <div>
		    <ul className="list">
		      <li><Link to="/">我是首页</Link></li>
		      <li><Link to="/order">我是订单页</Link></li>
		      <li><Link to="/user">我是用户页</Link></li>
		    </ul>
		    <Switch>
		      <Route exact path="/" component={Home}/>
		      <Route path="/order" component={Order}/>
		      <Route path="/user" component={User}/>
		    </Switch>
		  </div>
	    )
	  }
	}
	export default App;
```

		不像React Router之前的版本，在版本4中，嵌套的<Route>最好放在父元素里面。
		所以，Order组件就是这里的父组件，我们将在父组件中定义order/:name路由。

#### src/Order.js

```javascript
	import React from 'react';
	import { Link, Route } from 'react-router-dom';
	
	const Order = ({ match }) => {
		return(
			<div>
				<ul>
					<li><Link to={`${match.url}/order1`}>订单1</Link></li>
					<li><Link to={`${match.url}/order2`}>订单2</Link></li>
					<li><Link to={`${match.url}/order3`}>订单3</Link></li>
			  	</ul>
		  		<Route path={`${match.path}/:order`}
		  			render= {({match}) =>( <div><h3> {match.params.name} </h3></div>)}/>
		  	</div>
		)
	}
	export default Order;
```

		首先，我们给嵌套路由定义了一些Link。之前提到过，match.url用来构建嵌套链接，match.path用来构建嵌套路由。
		如果你对match有不理解的概念，console.log(match)会提供一些有用的信息来帮助你了解它。
		
		<Route path={`${match.path}/:name`}
			render= {({match}) =>( <div><h3> {match.params.name} </h3></div>)}/>
		
		这是我们首次尝试动态路由。不同于硬编码路由，我们给pathname使用了变量。
		:name是路径参数，获取order/之后到下一条斜杠之间的所有内容。
		所以，类似order/order1的路径名会生成如下的一个params对象：
		
			{
			  name: 'order1'
			}
		
		参数可以通过match.params或props.match.params来获取，取决于传递哪种props。
		另外有趣的是我们使用了renderprop。render props非常适合行内函数，这样不需要单独拆分组件。

### Demo3：带Path参数的嵌套路由

		我们让事情变得再复杂一些，可以吗？一个真实的路由应该是根据数据，然后动态展示。
		假设我们获取了从服务端API返回的product数据，如下所示：

#### src/Products.js

```javascript
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
```

		我们需要根据下面这些路径创建路由：
		
		/products -- 这个路径应该展示产品列表。
		
		/products/:productId -- 如果产品有:productId，
		这个页面应该展示该产品的数据，如果没有，就该展示一个错误信息。

#### src/Products.js

```javascript
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
```

		首先，我们通过productsData.id创建一列<Links>，并把它存储在linkList。
		路由从路径字符串根据匹配的对应产品id获取参数。
		
		<Route path={`${match.url}/:productId`}
		render={ (props) => <Product data= {productsData} {...props} />}/>
		你可能期望使用component = { Product }来替代行内render函数。
		问题是，我们不仅需要productsData，并顺带把剩余prop也传给Product组件。
		尽管你还有其他方法，不过我觉的这是最简单的方法了。{...props}使用ES6的扩展运算符 将所有prop传给组件。

#### src/Product.js

```javascript
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
```

		数组find方法用来查找数组中对象的id属性等于match.params.productId。
		如果product存在，productData就会展示，如果不存在，Product不存在的信息就会被渲染。

### 保护式路由

		最后一个demo，我们将围绕保护式路由的技术进行讨论。
		那么，如果有人想进入/admin页面，他们会被要求先登录。
		然而，在我们保护路由之前还需要考虑一些事情。
		
		重定向
		
			类似服务端重定向，<Redirect>会将history堆栈的当前路径替换为新路径。
			新路径通过to prop传递。如何使用<Redirect>？
			
				<Redirect to={{pathname: '/login', state: {from: props.location}}}
				
				如果有人已经注销了账户，想进入/admin页面，他们会被重定向到/login页面。
				当前路径的信息是通过state传递的，若用户信息验证成功，用户会被重定向回初始路径。
				在子组件中，你可以通过this.props.location.state获取state的信息。
				
		自定义路由
		
			自定义路由最适合描述组件里嵌套的路由。
			如果我们需要确定一个路由是否应该渲染，最好的方法是写个自定义组件。
			下面是通过其他路由来定义自定义路由。

#### src/App.js

```javascript
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
```

```javascript
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/order" component={Order} />
		<PrivateRoute path='/products' component = {Products} />
		<Route path="/user" component={User} />
		<Route path="/login" component={Login}/>
		<PrivateRoute path="/admin" component={Admin} />
	</Switch>
```

		若用户已登录，fakeAuth.isAuth返回true，反之亦然。
		如果用户已登录，路由将渲染Admin组件。否则，用户将重定义到 /login登录页面。
		这样做的好处是，定义更明确，而且PrivateRoute可以复用。
		下面是Login组件的代码：

### src/Login.js

```javascript
	import React from 'react';
	import { Redirect } from 'react-router-dom';
	
	class Login extends React.Component {
	    constructor() {
	        super();
	        this.state = {
	            redirectTo: false
	        }
	        // 绑定 'this'
	        this.login = this.login.bind(this);
	        // 也可以使用login = () =>{}
	    }
	    login() {
	        fakeAuth.auth(() => {
	            this.setState({ redirectTo: true })
	        })
	    }
	
	    render() {
	        const { from } = this.props.location.state || { from: { pathname: '/' } }
	        const { redirectTo } = this.state;
	
	        if (redirectTo) {
	            return (<Redirect to={from} />)
	        }
	        // style = {{padding: "0 10% 0 10%",width: "80%",margin: "auto",background: "#fff"}}
	        return (
	            <div>
	                <p>您必须登录才能查看页面</p>
	                <button onClick={this.login}>登录</button>
	            </div>
	        )
	    }
	}
	
	/* 一个假认证功能 */
	export const fakeAuth = {
	    isAuth: false,
	    auth(cb) {
	        this.isAuth = true
	        setTimeout(cb, 100)
	    },
	}
	
	export default Login;
```

		下面这行是对象的解构赋值的示例，es6的特性之一。
		
		const { from } = this.props.location.state || { from: { pathname: '/' } }
		
		让我们把所有片段拼凑到一块，这是我们使用React Router创建的应用最终效果

### Demo4：保护式路由

[点此查看示例代码](https://github.com/zyh19941109/React-Router/tree/master/React-Router)

### 总结

		React Router是一个帮助React构建更完美，更声明式的路由库。
		不像React Router之前的版本，在v4中，一切就"只是组件"。
		而且，新的设计模式也更完美的使用React的构建方式来实现。

#### 本文出处，本人对其稍作修改，使其更容易读懂

[文章原始链接，请点此查看](https://www.sitepoint.com/react-router-v4-complete-guide)
