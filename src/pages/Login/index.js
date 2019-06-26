import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios'
class Login extends Component {
    state = {
        logOk: false
    }
    getUser() {
        axios
            .post("http://106.14.119.190:3019/login", {
                username: this.refs.user.value,
                password: this.refs.psw.value
            })
            .then((res) => {
                if (res.data == 'no') {
                    console.log('用户名或密码错误');
                }else{
                    Cookies.set('token',res.data,{expires:1});
                    window.location.href="/#/home";
                }
            })
    }
    
    render() {
        return (
        <div className="login" > 
            <div className="logo">
            </div>
            <div className="content">
            <div className="content_part">
            <input ref="user" type="text" placeholder="请输入手机号码" id="tel" className="tel" />
            </div>
            <div className="content_part">
                <input ref="psw" type="password" placeholder="请输入密码" className="password" />
            </div>
            <div className="forget_remember flex flex-pack-justify">
            <div
                className="remember"
                style={{
                    position: 'relative'
                }}>
                <input
                    id="color-input-red"
                    type="checkbox"
                    name="color-input-red log"
                    value="#f0544d"
                    className="chat-button-location-radio-input" />
                <label htmlFor="color-input-red">
                    </label>
                <span
                    style={{
                        marginLeft: '0.4rem',
                        fontSize: '0.24rem',
                        color: 'rgb(255, 255, 255)'
                    }}>
                记住用户名 </span> </div >< div className="forget" > <span style={{
                    marginLeft: '0.4rem',
                    fontSize: '0.24rem',
                    color: 'rgb(255, 255, 255)'
                }}></span></div></div><div className="btn_part login_btn" onClick={this
                    .getUser
                    .bind(this)
                }
                > 立即登录 </div> <div className="btn_part register_btn" > 
                <Link to="/reg" style={{
                    color: '#fff'
                }}>现在注册
                </Link>
            </div>               
        </div>
    </div>
    )}
}

export default Login;