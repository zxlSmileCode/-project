import React from "react";
import "./yicang.scss";
import { store } from "../../store/";
import { connect } from "react-redux";

class Tab extends React.Component {
    state = {
        active: 0
    };

    activeTab(tab) {
        this.setState({
            active: tab
        });
        store.dispatch({ type: "TYPE_TAB", payload: tab });
    }

    componentDidMount() {
        console.log(this);
    }

    render() {
        return (
            <div className="type" style={{ marginTop: "0.88rem" }}>
                <div className="inner">
                    <ul className="flex flex-pack-justify2">
                        <li
                            className={this.state.active === 0 ? "active" : null}
                            onClick={this.activeTab.bind(this, 0)}>
                            全部
                        </li>
                        <li
                            className={this.state.active === 2 ? "active" : null}
                            onClick={this.activeTab.bind(this, 2)}>
                            油画
                        </li>
                        <li
                            className={this.state.active === 1 ? "active" : null}
                            onClick={this.activeTab.bind(this, 1)}>
                            国画
                        </li>
                        <li
                            书法
                           className={this.state.active === 4 ? "active" : null}
                            onClick={this.activeTab.bind(this, 4)}>
                         </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(store => store)(Tab);
