import React from "react";
import "./yiyan.scss";
import { store } from "../../store";
import { connect } from "react-redux";

class Tab extends React.Component {
    changeTab(name) {
        store.dispatch({ type: "YIYAN_TAB", payload: name });
    }

    render() {
        return (
            <div className="yy_main_title">
                <ul className="inner flex flex-pack-justify">
                    <li
                        className={this.props.yiyantab === "yishuo" ? "yiactive" : "yiunactive"}
                        onClick={this.changeTab.bind(this, "yishuo")}>
                        艺说
                    </li>
                    <li
                        className={this.props.yiyantab === "yizhan" ? "yiactive" : "yiunactive"}
                        onClick={this.changeTab.bind(this, "yizhan")}>
                        艺术家
                    </li>
                </ul>
            </div>
        );
    }

    componentDidMount() {
        console.log(this);
    }
}

export default connect(store => store)(Tab);
