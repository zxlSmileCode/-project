import React from "react";
import "./yiyan.scss";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Nominate from "./Nominate"

class Author extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    // html5新方法 锚点
    scrollToAnchor = anchorName => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) {
                anchorElement.scrollIntoView();
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
                                                    <div className="list_items_name">{item.authorName}</div>
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
                    <i onClick={() => this.scrollToAnchor("A")}>A</i>
                    <i onClick={() => this.scrollToAnchor("B")}>B</i>
                    <i onClick={() => this.scrollToAnchor("C")}>C</i>
                    <i onClick={() => this.scrollToAnchor("D")}>D</i>
                    <i onClick={() => this.scrollToAnchor("E")}>E</i>
                    <i onClick={() => this.scrollToAnchor("F")}>F</i>
                    <i onClick={() => this.scrollToAnchor("G")}>G</i>
                    <i onClick={() => this.scrollToAnchor("H")}>H</i>
                    <i onClick={() => this.scrollToAnchor("I")}>I</i>
                    <i onClick={() => this.scrollToAnchor("J")}>J</i>
                    <i onClick={() => this.scrollToAnchor("K")}>K</i>
                    <i onClick={() => this.scrollToAnchor("L")}>L</i>
                    <i onClick={() => this.scrollToAnchor("M")}>M</i>
                    <i onClick={() => this.scrollToAnchor("N")}>N</i>
                    <i onClick={() => this.scrollToAnchor("O")}>O</i>
                    <i onClick={() => this.scrollToAnchor("P")}>P</i>
                    <i onClick={() => this.scrollToAnchor("Q")}>Q</i>
                    <i onClick={() => this.scrollToAnchor("R")}>R</i>
                    <i onClick={() => this.scrollToAnchor("S")}>S</i>
                    <i onClick={() => this.scrollToAnchor("T")}>T</i>
                    <i onClick={() => this.scrollToAnchor("U")}>U</i>
                    <i onClick={() => this.scrollToAnchor("V")}>V</i>
                    <i onClick={() => this.scrollToAnchor("W")}>W</i>
                    <i onClick={() => this.scrollToAnchor("X")}>X</i>
                    <i onClick={() => this.scrollToAnchor("Y")}>Y</i>
                    <i onClick={() => this.scrollToAnchor("Z")}>Z</i>
                    <i onClick={() => this.scrollToAnchor("#")}>#</i>
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
