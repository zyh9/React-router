## React-router

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
			而<HashRouter>则使用URL(window.location.hash)的hash部分来记录。如果你想兼容老式浏览器，你应该使用<HashRouter>
		
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

		```html
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
		          <ul className="nav navbar-nav">
		
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

		

1.项目首页引入cube-ui的scroll组件，并给其嵌套轮播图和类型选择的容器， 
官方并没有提出可以嵌套组件的使用方法，所以和swiper的搭配出现了不兼容的情况。 
目前是去掉了swiper的轮播图的自动轮播，后续会使用cube-ui的slider作嵌套处理 

2.移动端富文本编辑器的使用，引重置样式中包含-webkit-user-select: none;的样式， 
因为-webkit-user-select: none;会产生一些问题，导致IOS下输入元素无光标显示，可添加以下样式解决 
		element{ 
		-webkit-user-select: text; 
		-user-select: text; 
		} 

3.uunote在pc端展示页面通过设备判断navigator.userAgent处理 

		let n = navigator.userAgent.toLowerCase(); 
		if (n.indexOf('iphone') == -1 && n.indexOf('ipad') == -1 && n.indexOf('android') == -1) { 
			//... 
		} 
		} 

4.不存在token的情况，重定向至login登录页，导航守卫的使用，导致登录需点击两次才可登录成功，目前使用监听路由路径来解决