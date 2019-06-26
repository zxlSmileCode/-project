import React from "react";
import "./yiyan.scss";
import { getData } from "../../api";
import { Link, withRouter } from "react-router-dom";

class List extends React.Component {
    state = {
        list: []
    };

    async componentDidMount() {
        let {
            data: { articleItemList }
        } = await getData("rest/articleList/yi_shuo");
        console.log(this);
        this.setState({ list: articleItemList });
    }

    randerList(arr) {
        return arr.map(item => {
            return (
                <div className="yy_main_list" key={item.id}>
                    <Link
                        to={{
                            pathname: `/yiyandetail/${item.id}`
                        }}>
                        <div
                            className="yy_coverimg"
                            style={{
                                background: `url(${item.coverImg}) center center / cover no-repeat`
                            }}
                        />{" "}
                        <div className="yy_text">
                            <span className="yi2">{item.title}</span>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="yishuo">
                <div className="inner">{this.randerList(this.state.list)}</div>
            </div>
        );
    }
}

export default withRouter(List);
