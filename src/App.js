import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { store } from "./store";

import Home from "./pages/Home";
import Yicang from "./pages/Yicang";
import Yigou from "./pages/Yigou";
import Yiyan from "./pages/Yiyan";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import Mine from "./pages/Mine";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import Indent from "./pages/Indent";

import Yiyandetail from "./pages/YiyanDetail";
import AuthorDetail from "./pages/AuthorDetail";

import "./App.scss";
import "./assets/icon/iconfont.css";
import "./css/reset.css";

class App extends React.Component {
    // 跳转
    goto(name) {
        store.dispatch({ type: "UPDATE_TAB", payload: name });
        let { history } = this.props;
        history.push("/" + name);
    }

    render() {
        return (
            <div className="app">
                <main className="main">
                    <Switch>
                        <Route exact path="/Home" component={Home} />
                        <Route path="/yicang" component={Yicang} />
                        <Route path="/yigou" component={Yigou} />
                        <Route path="/yiyan" component={Yiyan} />
                        <Route exact path="/authordetail/:id" component={AuthorDetail} />
                        <Route exact path="/yiyan/:now" component={Yiyan} />
                        <Route path="/detail/:id" component={Detail} />
                        <Route path="/cart/:id" component={Cart} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/login" component={Login} />
                        <Route path="/reg" component={Reg} />
                        <Route path="/indent" component={Indent} />
                        <Route exact path="/yiyandetail/:id" component={Yiyandetail} />
                        <Redirect from="/" to="/home" />
                    </Switch>
                </main>
                {
                    <footer className="footer" >
                        <ul>
                            <li
                                onClick={this.goto.bind(this, "home")}
                                className={this.props.currentTab === "home" ? "selected" : null}>
                                <i className="iconfont icon-shouye" style={{ fontSize: "25px" }} />
                                <span>首页</span>
                            </li>
                            <li
                                onClick={this.goto.bind(this, "yigou")}
                                className={this.props.currentTab === "yigou" ? "selected" : null}>
                                <i className="iconfont icon-shoutibao" style={{ fontSize: "25px" }} />
                                <span>艺购</span>
                            </li>
                            <li
                                onClick={this.goto.bind(this, "yicang")}
                                className={this.props.currentTab === "yicang" ? "selected" : null}>
                                <i className="iconfont icon-icon-" style={{ fontSize: "25px" }} />
                                <span>艺藏</span>
                            </li>
                            <li
                                onClick={this.goto.bind(this, "yiyan")}
                                className={this.props.currentTab === "yiyan" ? "selected" : null}>
                                <i className="iconfont icon-faxian-yanjing" style={{ fontSize: "25px" }} />
                                <span>艺眼</span>
                            </li>
                            <li
                                onClick={this.goto.bind(this, "mine")}
                                className={this.props.currentTab === "mine" ? "selected" : null}>
                                <i className="iconfont icon-iconfuzhi" style={{ fontSize: "25px" }} />
                                <span>我的</span>
                            </li>
                        </ul>
                    </footer>
                }
            </div>
        );
    }
}
App = withRouter(App);
export default connect(store => store)(App);
