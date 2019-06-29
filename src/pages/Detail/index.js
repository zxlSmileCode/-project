import React, { Component } from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { getData } from '../../api';
import { Link } from "react-router-dom";
import './index.scss'

class Detail extends Component {
    constructor(props) {
        super(props);
        this.props = props
        this.state = {
            jWorksImgList: [],
            data: {},
            Works: {},
            Author: {},
            User: {}
        }
        this.goBack = this.goBack.bind(this)
    }
    async componentDidMount() {
        let { id } = this.props.match.params;
        let { data: { data }, data: { data: { jWorksImgList } } } = await getData(`/rest/borrow/${id}`);
        let { data: { data: Works } } = await getData(`/rest/borrowWorks/${id}`);
        let { data: { data: Author } } = await getData(`/rest/borrowAuthor/${id}`);
        let { data: { data: User } } = await getData(`/rest/borrowUser/${id}`);
        this.setState({ data, jWorksImgList, Works, Author, User });
        this.refs.layout.scrollIntoView()
    }
    goBack() {
        this.props.history.go(-1)
    }
    render() {
        return (
            <div ref={"layout"}>
                <WingBlank style={{ margin: 0, height: '335px' }} >
                    <img onClick={this.goBack.bind(this)} className="fanghui" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTAxOTIwODM3QkEwMTFFODlEQkRDREI5NzREREQxQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTAxOTIwODQ3QkEwMTFFODlEQkRDREI5NzREREQxQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMDE5MjA4MTdCQTAxMUU4OURCRENEQjk3NERERDFCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMDE5MjA4MjdCQTAxMUU4OURCRENEQjk3NERERDFCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PluW97wAAA4YSURBVHja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" />
                    <Carousel
                        infinite
                    >
                        {this.state.jWorksImgList.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: '335px' }}
                            >
                                <img
                                    src={val}
                                    alt=""
                                    style={{ verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="works_describe tupian">
                    <div className="jiage">
                        <div className="ldescribe_top flex flex_direction flex-pack-justify2">
                            <div className="name flex align_items2">
                                <span>{this.state.data.name}</span>
                                <div style={{ fontSize: '0.24rem', color: 'rgb(153, 153, 153)', marginLeft: '0.16rem' }}>
                                    {this.state.Author.jAuthorName}
                                </div>
                            </div>
                            <span className="num">{this.state.data.jWorksNo}</span>
                        </div>
                        <div className="ldescribe_center flex  flex-pack-justify align_items">
                            <div className="flex flex_direction">
                                <div className="price">
                                    价格:
                                    <span className="now_price"> ￥{this.state.data.account}</span>
                                </div>
                                <div className="price">
                                    折扣:
                                    <span className="color1"> {this.state.data.discount * 10}折</span>
                                </div>
                                <div className="price">
                                    期限:
                                    <span className="color1"> {this.state.data.timeLimit}天</span>
                                </div>
                            </div>
                            <div className="wq_bz">
                                <div className="wq_bz_main flex flex_direction">
                                    <a href="" style={{ opacity: 0, fontSize: '14px' }}>物权承诺</a>
                                    <a href="https://reg.jinyishe.cn/wuquan.html" className="quan">物权承诺</a>
                                    <a href="https://reg.jinyishe.cn/wuquan.html" className="zhen">保真承诺</a>
                                </div>
                            </div>
                        </div>
                        <div className="ldescribe_bottom flex  flex-pack-justify align_items">
                            <div className="ldescribe_bottom_main">
                                {this.state.data.jWorksDescribe}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="updetail">
                    <div className="inner">
                        <div className="detail_title">
                            <span>作品详情</span>
                        </div>
                        <div className="detail_main">
                            <div className="detail_mainline clearfix">
                                <div className="fl" style={{ width: '50%' }}>
                                    <span>创作年代:</span>
                                    <span>2019年</span>
                                </div>
                                <div className="fl" style={{ width: '50%' }}>
                                    <span>作者:</span>
                                    <span>{this.state.Author.jAuthorName}</span>
                                </div>
                                <div className="fl" style={{ width: '50%' }}>
                                    <span>作品材质:</span>
                                    <span>纸本水墨</span>
                                </div>
                                <div className="fl" style={{ width: '50%' }}>
                                    <span>作品规格:</span>
                                    <span>37cm&times;20cm</span>
                                </div>
                            </div>
                            {
                                this.state.jWorksImgList.map(item =>
                                    <div key={item} style={{ marginTop: '0.3rem' }}>
                                        <img src={item} style={{ width: '100%' }} />
                                    </div>)
                            }

                        </div>
                        <div className="detail_title">
                            <span>作者简介</span>
                        </div>
                        <div className="detail_main">
                            <div className="flex  align_items img_box">
                                <div className="img" style={{ background: 'url(' + this.state.Author.jAuthorImg + ') center center / cover no-repeat' }}></div>
                            </div>
                            <div className="detail_main_content">
                                {this.state.Author.jAuthorDescribe}
                            </div>
                        </div>
                        <div className="detail_title">
                            <span>项目期限</span>
                        </div>
                        <div className="flex flex-pack-justify2 xm_xq">
                            <div className="xm_info flex flex_direction flex-pack-justify2">
                                <div className="xm_infomain flex flex_direction">
                                    <span className="percent_val">9.83折</span>
                                    <span>折扣</span>
                                </div>
                            </div>
                            <div className="xm_info flex flex_direction flex-pack-justify2">
                                <div className="xm_infomain flex flex_direction">
                                    <span className="percent_val">90天</span>
                                    <span>期限</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="yitoudetail_footer flex flex-pack-justify align_items">
                    <span className="yy_visit yy_visit1">预约参观</span>
                    <span className="yy_visit yy_visit2">{this.state.data.attNum}</span>
                    <div className="collection collection_buy flex  align_items flex-pack-justify2">
                        收藏
                    </div>
                    <div className="buy_now collection_buy flex  align_items flex-pack-justify2 bg1">
                        <Link
                            to={{
                                pathname: `/cart/${this.state.data.id}`
                            }}>立即购买
                        </Link>
                    </div>
                </div>
            </div>

        )
    }
}
export default Detail;
