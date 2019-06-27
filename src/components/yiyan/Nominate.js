import React from "react";
import "./yiyan.scss";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

class Nominate extends React.Component {
    state = {
        info: {},
        list: []
    };

    async getData() {
        await axios.post("https://api.jinyishe.cn/rest/authorList").then(res => {
            let { commondAuthorInfo, workImgVOList } = res.data.data.commondAuthor;
            this.setState({
                info: commondAuthorInfo,
                list: workImgVOList
            });
        });
    }

    componentDidMount() {
        this.getData();
        console.log(this);
    }

    render() {
        return (
            <div className="nominate" style={{ display: "block" }}>
                <div className="flex flex-pack-justify">
                    <div className="flex align_items" style={{ margin: "0px auto" }}>
                        <span className="line" />
                        <span
                            className="nominate_title text_color"
                            style={{ color: "rgb(201, 169, 110)" }}>
                            本期推荐
                        </span>
                        <span className="line" />
                    </div>
                </div>
                <div className="inner">
                    <Link
                        to={{
                            pathname: `/authordetail/${this.state.info.id}`
                        }}>
                        <div className="authorinfo flex">
                            <div>
                                <img src={this.state.info.headImage} alt="" />
                            </div>
                            <div>
                                <div className="authorname">
                                    <span
                                        style={{
                                            display: "inline-block",
                                            width: "1.5rem",
                                            fontSize: "0.28rem",
                                            height: "0.5rem",
                                            textAlign: "center"
                                        }}>
                                        {this.state.info.authorName}
                                    </span>
                                </div>
                                <div className="authordes">{this.state.info.authorLabel}</div>
                            </div>
                        </div>
                    </Link>
                    <div className="works">
                        <div className="swiper-container swiper-container2 swiper-container-horizontal">
                            <div className="swiper-wrapper">
                                {/* 渲染作品 */}
                                {this.state.list.map((item, index) => {
                                    return (
                                        <div
                                            className="swiper-slide"
                                            style={{ width: 140, marginRight: 10 }}
                                            key={index}>
                                            <div
                                                className="author_cover"
                                                style={{
                                                    background: `url(${
                                                        item.img
                                                    }) center center / cover no-repeat`
                                                }}
                                            />
                                            <div className="describe">
                                                <div className="describe_author flex flex-pack-justify align_items">
                                                    <span>{item.imgName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Nominate);
