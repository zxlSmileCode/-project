import React, { Component } from 'react';
import axios from 'axios';
import './common.css';
class Reg extends Component {
    state = {
        code:'获取验证码'
    }
    getCode(){
        let ranCode = '';
        for(var i = 0;i < 4; i++){
            ranCode += parseInt(Math.random()*10);
        }
        this.setState({
            code:ranCode
        })
    }
    goLogin(name){
        if(this.refs.code.value == this.state.code){
            axios
                .post("http://106.14.119.190:3019/regist", {
                    username: this.refs.user.value,
                    password: this.refs.psw.value
                })
                .then((res) => {
                    if(res.data == 'yes'){
                        window.location.href="/#/login";
                    }
                })
        }else{
            console.log('验证码错误');
        }
    }
    render() {
        return (
            <div>
                <div className="register login">
                    <div className="logo"></div> 
                    <div className="content">
                        <div  className="content_part">
                            <input ref="user" type="text" placeholder="请输入手机号码" className="tel" />
                        </div> 
                        <div className="getCode content_part flex align_items">
                            <input ref="code" type="text" placeholder="请输入验证码" className="code"/> 
                            <div className="line"></div> 
                            <span className="getCode_btn" onClick={this.getCode.bind(this)}>{this.state.code}</span>
                        </div>
                        <div  className="content_part">
                            <input ref="psw"  type="password" placeholder="请设置登录密码" className="password"/>
                        </div> 
                        <div className="tuijianren flex align_items">
                            <div className="tuijianren_main flex flex_direction">
                                <div className="tuijianren_main_title">推荐人（选填）</div> 
                                <input type="text" placeholder="请输入推荐人手机号码" className="tel2"/>
                            </div>
                        </div> 
                        <div className="btn_part register_btn" onClick={this.goLogin.bind(this)} style={{
                                color: '#fff'
                            }}>立即登录
                        </div>
                    </div> 
                    <div className="copyright">版权所有@2017杭州金艺网络科技有限公司 金艺社ICP号：浙ICP备17012626号</div>
                </div>
            </div>
        )
    }
}
export default Reg;
