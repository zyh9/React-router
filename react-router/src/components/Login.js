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
