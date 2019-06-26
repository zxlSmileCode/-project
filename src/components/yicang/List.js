import React from "react";
import "./yicang.scss";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

class List extends React.Component {
    state = {
        list: []
    };

    componentDidMount() {
        this.getData(0);
    }

    async getData(id) {
        let arr = await axios.get(`https://api.jinyishe.cn/rest/borrowPc?borrowBusiness=${id}`).then(function(res) {
            return res.data.date.result;
        });
        this.setState({
            list: arr
        });
    }

    componentWillReceiveProps(newProps) {
        console.log(this);
        this.getData(newProps.typetab);
    }

    renderList(arr) {
        return arr.map(item => {
            return (
                <div className="modular_main modular_mains yigou_lists_box box" key={item.id}>
                    <a href="/yitoudetail?id=2920" className="">
                        <div className="cover_mapyt">
                            <img alt="" className="lazy" src={item.jWorksImg} />
                        </div>
                        <div className="describe">
                            <div className="describe_top clearfix flex flex_direction flex-pack-justify">
                                <span>
                                    {item.name}
                                    {this.state.id}
                                </span>
                                <div
                                    style={{
                                        fontSize: "0.22rem",
                                        color: "rgb(153, 153, 153)",
                                        marginBottom: "0.16rem"
                                    }}>
                                    {item.authorName}
                                </div>
                                <div>
                                    <span className="text_color fl">￥{item.account}</span>
                                    <span className="text_color1 fr view">{item.jAttentionNum}</span>
                                </div>
                            </div>
                            <div className="describe_bottom flex flex-pack-justify">
                                <span className="text_color2">
                                    折扣：
                                    <i className="text_color">9.83折</i>
                                </span>
                                <span className="text_color2">
                                    期限：
                                    <i className="text_color">90天</i>
                                </span>
                            </div>
                        </div>
                    </a>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="works_list inner" style={{ paddingTop: "1.8rem" }}>
                {this.renderList(this.state.list)}
            </div>
        );
    }
}

export default withRouter(connect(store => store)(List));
