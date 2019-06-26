import React, { Component } from "react";
import { store } from "../../store";
import Header from "../../components/yicang/Header"
import Tab from "../../components/yicang/Tab";
import List from "../../components/yicang/List";

class Yicang extends Component {
    componentDidMount() {
        store.dispatch({ type: "UPDATE_TAB", payload: "yicang" });
    }

    render() {
        return (
            <div>
                <Header />
                <Tab />
                <List />
            </div>
        );
    }
}
export default Yicang;
