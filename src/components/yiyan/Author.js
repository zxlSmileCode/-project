import React from "react";
import "./yiyan.scss";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Nominate from "./Nominate";

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            zimu: [
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
                "G",
                "H",
                "I",
                "J",
                "K",
                "L",
                "M",
                "N",
                "O",
                "P",
                "Q",
                "R",
                "S",
                "T",
                "U",
                "V",
                "W",
                "X",
                "Y",
                "Z",
                "#"
            ]
        };
    }

    // html5新方法 锚点
    scrollToAnchor = anchorName => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
<<<<<<< HEAD
                anchorElement.scrollIntoView({ behavior: "smooth" });
=======
                anchorElement.scrollIntoView({behavior:'smooth'});
>>>>>>> 0433095247f248a36bbf5f6b563cbb5c305438d6
            }
        }
    };

    async componentDidMount() {
        let arr = await axios.post("https://api.jinyishe.cn/rest/authorList").then(function(res) {
            return res.data.data.letterList;
        });
        this.setState({
            list: arr
        });

        this.renderList(arr);
    }

    renderList(arr) {
        return (
            arr
                .filter(item => {
                    if (item.letter) {
                        return item;
                    }
                    return null;
                })
                // 渲染字母列表
                .map((item, index) => {
                    return (
                        <div id={item.letter} className="authorlistitem" key={index}>
                            <div className="num inner2" style={{ paddingTop: "0.5rem" }}>
                                {item.letter}
                            </div>
                            <div id="galley" className="clearfix" style={{ paddingTop: "0.3rem" }}>
                                <ul className="pictures">
                                    {/* 渲染作者 */}
                                    {item.list.map(item => {
                                        return (
                                            <li
                                                item={21}
                                                className="list_items flex flex_direction align_items"
                                                key={item.id}>
                                                <Link
                                                    to={{
                                                        pathname: `/authordetail/${item.id}`
                                                    }}>
                                                    <img src={item.headImage} alt="" />
                                                    <div className="list_items_name">
                                                        {item.authorName}
                                                    </div>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })
        );
    }

    render() {
        return (
            <div>
                <Nominate />
                <div
                    className="topbar"
                    style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        marginTop: "0.2rem",
                        marginBottom: "0.06rem",
                        boxShadow: "rgb(228, 228, 228) 1px 1px 1px"
                    }}>
                    <div className="inner">
                        <div className="lettersearch inner2">
                            <div className="searchname">艺术家索引</div>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-pack-justify flex_direction numlist"
                    style={{
                        paddingBottom: "0.1rem",
                        position: "fixed",
                        right: "0px",
                        top: "1.8rem",
                        fontSize: "0.24rem",
                        zIndex: 999
                    }}>
                    {this.state.zimu.map((item, index) => {
                        return (
                            <i onClick={() => this.scrollToAnchor(`${item}`)} key={index}>
                                {item}
                            </i>
                        );
                    })}
                </div>

                <div
                    id="scrolllist"
                    style={{
                        backgroundColor: "rgb(255, 255, 255)",
                        height: "10rem",
                        overflow: "scroll",
                        position: "relative"
                    }}>
                    <div className="inner">
                        <div className="authorlistitem" style={{ display: "none" }}>
                            <div className="num inner2" style={{ paddingTop: "0.5rem" }} />
                            <div id="galley" className="clearfix" style={{ paddingTop: "0.3rem" }}>
                                <ul className="pictures" />
                            </div>
                        </div>

                        {this.renderList(this.state.list)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Author);
