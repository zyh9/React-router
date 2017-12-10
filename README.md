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
