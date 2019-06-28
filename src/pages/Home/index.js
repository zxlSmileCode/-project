import React, { Component } from 'react';
import { getData } from '../../api';
import { Carousel, WingBlank } from 'antd-mobile';
import './index.scss';
import '../../css/reset.css';
// import { Tabs, Button, WhiteSpace, WingBlank, Badge } from 'antd-mobile';
import { store } from '../../store';


class Home extends Component {
    state = {
        data: ['1', '2'],
        imgHeight: 176,
        jingPingBeanList: []
    }

    async componentDidMount() {
        store.dispatch({ type: 'UPDATE_TAB', payload: "home" })
        setTimeout(() => {
            this.setState({
                data: ['866f2fd6242d42a6899945b503c08840', 'b10ebbed15694282a6f3b63fb552ed9d'],
            });
        }, 100);
        let { data: { jingPingBeanList } } = await getData('/rest/indexApp?Hflag=22');
        console.log(jingPingBeanList);
        this.setState({ jingPingBeanList })
    }
    render() {
        return (
            <div className="main">
                <WingBlank style={{ margin: 0, height: '188px' }}>
                    <Carousel
                        autoplay={true}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201812/${val}.jpg?x-oss-process=image/resize,s_600`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
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
                <div className="yishuo">
                    <div className="yishuo-t">
                        <span>一 艺购  一</span><span>></span>
                    </div>
                    <div className="yishuo-b">
                        <div className="tupian" style={{ width: '335px', height: '175px', background: "url(http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201906/df311e6bd79a46da98cebaa73f30fbfa.jpg?x-oss-process=image/resize,s_400) center center / cover no-repeat" }}></div>
                        <div className="wenzi"> 辟谣！马云真的没买潘天寿的“猫”</div>
                    </div>
                </div>
                <div className="yicang">
                    <div className="yicang-box">
                        <div className="box-t">
                            <span>一 艺购  一</span><span>></span>
                        </div>
                        <div className="box-b">
                            <ul>
                                {
                                    this.state.jingPingBeanList.map(item =>
                                        <li key={item.borrowId}>
                                            <div data-v-539475ac="" className="cover_map" style={{ background: "url(" + item.img + ") center center / cover no-repeat" }}></div>
                                            <div className="cover_b">
                                                <h4>{item.borrowName}</h4>
                                                <p>{item.artworkNum}</p>
                                                <span>￥{item.account}</span><br />
                                                <i>折扣：<span>{item.discount * 10}折</span>期限：<span>{item.timeLimit}天</span></i>
                                            </div>
                                        </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="yishuo">
                    <div className="yishuo-t">
                        <span>一 艺说  一</span><span>></span>
                    </div>
                    <div className="yishuo-b">
                        <div className="tupian" style={{ width: '335px', height: '175px', background: "url(http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201906/df311e6bd79a46da98cebaa73f30fbfa.jpg?x-oss-process=image/resize,s_400) center center / cover no-repeat" }}></div>
                        <div className="wenzi"> 辟谣！马云真的没买潘天寿的“猫”</div>
                    </div>
                </div>
                <div className="yishujia">
                    <div className="yishujia-t">
                        <span>一 艺术家 一</span><span>></span>
                    </div>
                    <div className="yishujia-b">
                        <ul>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/57f621fdc34a4eaabe3b5ff398bae9ed.png" alt=""/>
                                <p>蓝正辉</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/d95fcc2be3734e90bdc1a356798dbb2f.jpg" alt=""/>
                                <p>马天戈</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/2608a8c715454ec7a5c615d8e5f03de2.jpg" alt=""/>
                                <p>朱叶青</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/dff15f87ac24414dadb3eea9afa84f63.jpg" alt=""/>
                                <p>叶永青</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/aca252fe6671433d8e5a7cc898c5b242.jpg" alt=""/>
                                <p>曹宝麟</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/0040c5df9bbf4b548e409055397ae4d9.jpg" alt=""/>
                                <p>陈平</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/d8ce5f1650e24fc18798c16cedfbcef8.jpg" alt=""/>
                                <p>何加林</p>
                            </li>
                            <li>
                                <img src="http://jinyishe2.oss-cn-hangzhou.aliyuncs.com/cms/201810/b5e747cbedf44502a771f37ab4582850.jpg" alt=""/>
                                <p>江宏伟</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tixing">艺术品收藏有风险，购买须谨慎 浙ICP备17012626号</div>
            </div>
        )
    }
}
export default Home;
